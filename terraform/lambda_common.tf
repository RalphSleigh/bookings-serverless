resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "aws_iam_policy_document" "lambda_exec_role_policy" {
  statement {
    actions = [
      "logs:CreateLogStream",
      "logs:DescribeLogStreams",
      "logs:PutLogEvents"
    ]
    resources = [
      "arn:aws:logs:*:*:*:*"
    ]
  }
  statement {
    actions = [
      "secretsmanager:GetSecretValue"
    ]
    resources = [
      "arn:aws:secretsmanager:eu-west-2:${data.aws_caller_identity.current.account_id}:secret:db_password_secret-MyBd3A",
      aws_secretsmanager_secret.db_password_secret.arn
    ]
  }

  statement {
    actions = [
        "appconfig:StartConfigurationSession",
        "appconfig:GetLatestConfiguration"
    ]
    resources = ["*"]
  }

  statement {
     actions = [
      "lambda:InvokeFunction",
      "lambda:InvokeAsync"
     ]
     resources = ["arn:aws:lambda:eu-west-2:${data.aws_caller_identity.current.account_id}:*:*"]
  }
}

resource "aws_iam_policy" "lambda_execution_policy" {
  name   = "lambda_execution_policy"
  path   = "/"
  policy = data.aws_iam_policy_document.lambda_exec_role_policy.json
}

resource "aws_iam_role_policy_attachment" "lambda_policy_attachment" {
  role       = aws_iam_role.iam_for_lambda.id
  policy_arn = aws_iam_policy.lambda_execution_policy.arn
}

resource "aws_iam_role_policy_attachment" "iam_role_policy_attachment_lambda_vpc_access_execution" {
  role       = aws_iam_role.iam_for_lambda.id
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}