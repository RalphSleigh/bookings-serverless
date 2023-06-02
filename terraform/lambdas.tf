data "archive_file" "lambda_zip" {
  for_each    = local.filtered_lambdas
  type        = "zip"
  source_dir  = "${path.module}/../dist-lambda/lambdas/${each.value.code_dir}"
  output_path = "${path.module}/files/${each.value.name}-lambda.zip"
}

resource "aws_s3_object" "lambda_code" {
  for_each = local.filtered_lambdas
  bucket   = aws_s3_bucket.lambda_code.id
  key      = data.archive_file.lambda_zip[each.key].output_md5
  source   = data.archive_file.lambda_zip[each.key].output_path
}

resource "aws_cloudwatch_log_group" "lambda_log_group" {
  for_each          = local.filtered_lambdas
  name              = "/aws/lambda/function_${each.value.name}"
  retention_in_days = 14
}

resource "aws_lambda_function" "lambda" {
  for_each      = local.filtered_lambdas
  function_name = "function_${each.value.name}"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "handler.lambdaHandler"

  s3_bucket = aws_s3_bucket.lambda_code.id
  s3_key    = resource.aws_s3_object.lambda_code[each.key].key

  architectures = ["arm64"]
  memory_size = 256
  timeout = 60

  #layers = [resource.aws_lambda_layer_version.common_layer.arn, resource.aws_lambda_layer_version.node_modules_layer.arn, "arn:aws:lambda:eu-west-2:282860088358:layer:AWS-AppConfig-Extension-Arm64:11"]
  layers = [resource.aws_lambda_layer_version.node_modules_layer.arn, "arn:aws:lambda:eu-west-2:282860088358:layer:AWS-AppConfig-Extension-Arm64:11"]

  vpc_config {
    security_group_ids = [aws_default_security_group.default_security_group.id]
    subnet_ids = [aws_subnet.one.id]
  }

  environment {
    variables = {
      database_url = resource.aws_db_instance.database.endpoint
      workspace = terraform.workspace
      log_arm = resource.aws_cloudwatch_log_stream.booking_system_logs.arn
      AWS_APPCONFIG_EXTENSION_POLL_INTERVAL_SECONDS = 3600
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda_policy_attachment,
  ]

  runtime = "nodejs16.x"
}

resource "aws_lambda_permission" "api_gateway_lambda_permission" {
  for_each      = local.filtered_lambdas
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "function_${each.value.name}"
  principal     = "apigateway.amazonaws.com"

  # The /*/* portion grants access from any method on any resource
  # within the API Gateway "REST API".
  source_arn = "${aws_api_gateway_rest_api.gateway.execution_arn}/*/*"

  depends_on = [aws_lambda_function.lambda]
}
