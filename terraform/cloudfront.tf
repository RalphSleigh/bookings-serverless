resource "aws_cloudfront_distribution" "cloudfront" {

  origin {

    origin_id = "cloudfront-api-gateway-id"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
    domain_name = "${aws_api_gateway_rest_api.gateway.id}.execute-api.eu-west-2.amazonaws.com"

  }

  origin {
    domain_name = aws_s3_bucket.public_static.bucket_regional_domain_name
    origin_id   = "cloudfront-s3-id"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  #  logging_config {
  #    include_cookies = false
  #    bucket          = "mylogs.s3.amazonaws.com"
  #    prefix          = "myprefix"
  #  }

  #  aliases = ["mysite.example.com", "yoursite.example.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "cloudfront-s3-id"

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 3600

    forwarded_values {
      cookies {
        forward = "all"
      }
      query_string = true
    }
  }

  ordered_cache_behavior {

    path_pattern = "/api/*"

    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "cloudfront-api-gateway-id"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    origin_request_policy_id = aws_cloudfront_origin_request_policy.api_policy.id
    cache_policy_id          = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"

    /*
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    

    

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0


      /*
    forwarded_values {
       cookies {
        forward = "all"
       }
       query_string = true
    } 
    */
  }

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 200
    response_page_path    = "/"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  lifecycle {
    ignore_changes = [
      aliases,
      viewer_certificate
    ]
  }
}

resource "aws_cloudfront_origin_access_identity" "identity" {

}

resource "aws_cloudfront_origin_request_policy" "api_policy" {
  name = "api_policy"

  cookies_config {
    cookie_behavior = "all"
  }
  headers_config {
    header_behavior = "whitelist"
    headers {
      items = ["User-Agent"]
    }
  }

  query_strings_config {
    query_string_behavior = "all"
  }
}
