resource "aws_s3_bucket" "lambda_code" {
  bucket = "bookings-lambda-code-${data.aws_caller_identity.current.account_id}"

  tags = {
    Name        = "Lambda Code Bucket"
  }
}

resource "aws_s3_bucket_acl" "private_acl_lambda_code" {
  bucket = aws_s3_bucket.lambda_code.id
  acl    = "private"
}

resource "aws_s3_bucket" "public_static" {
  bucket = "bookings-public-${data.aws_caller_identity.current.account_id}"

  tags = {
    Name        = "Public Static Bucket"
  }
}

resource "aws_s3_bucket_acl" "public_static_acl" {
  bucket = aws_s3_bucket.public_static.id
  acl    = "private"
}


data "aws_iam_policy_document" "s3_policy_public_static" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.public_static.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "public_static_policy" {
  bucket = aws_s3_bucket.public_static.id
  policy = data.aws_iam_policy_document.s3_policy_public_static.json
}


module "template_files" {
  source = "hashicorp/dir/template"

  base_dir = "${path.module}/../public"
}

resource "aws_s3_object" "static_files" {
  for_each = module.template_files.files

  bucket       = aws_s3_bucket.public_static.id
  key          = each.key
  content_type = each.value.content_type

  # The template_files module guarantees that only one of these two attributes
  # will be set for each file, depending on whether it is an in-memory template
  # rendering result or a static file on disk.
  source  = each.value.source_path
  content = each.value.content

  # Unless the bucket has encryption enabled, the ETag of each object is an
  # MD5 hash of that object.
  source_hash = each.value.digests.md5
  cache_control = "max-age=3600, no-cache"
}