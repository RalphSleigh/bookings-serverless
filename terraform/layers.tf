data "archive_file" "node_modules_layer_zip" {
  type        = "zip"
  source_dir = "${path.module}/../common-layer/"
  output_path = "${path.module}/files/node_modules_layer.zip"
}

resource "aws_s3_object" "node_modules_layer_code" {
    bucket = aws_s3_bucket.lambda_code.id
    key = data.archive_file.node_modules_layer_zip.output_md5
    source = data.archive_file.node_modules_layer_zip.output_path
}

resource "aws_lambda_layer_version" "node_modules_layer" {
  s3_bucket = aws_s3_bucket.lambda_code.id
  s3_key = aws_s3_object.node_modules_layer_code.key
  layer_name = "node_modules"
  compatible_runtimes = ["nodejs16.x"]
}
/*
data "archive_file" "common_layer_zip" {
  type        = "zip"
  source_dir = "${path.module}/../common_layer"
  output_path = "${path.module}/files/common_layer.zip"
}

resource "aws_s3_object" "common_layer_code" {
    bucket = aws_s3_bucket.lambda_code.id
    key = data.archive_file.common_layer_zip.output_md5
    source = data.archive_file.common_layer_zip.output_path
}

resource "aws_lambda_layer_version" "common_layer" {
  s3_bucket = aws_s3_bucket.lambda_code.id
  s3_key = aws_s3_object.common_layer_code.key
  layer_name = "common"
  compatible_runtimes = ["nodejs16.x"]
}
*/