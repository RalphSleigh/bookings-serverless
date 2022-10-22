terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  backend "s3" {
    bucket = "bookings-terraform-state"
    key    = "bookings"
    region = "eu-west-2"
  }
}

provider "aws" {
  region = "eu-west-2"
  default_tags {
    tags = {
      Environment = "${terraform.workspace}"
      MANAGED_BY  = "Terraform"
    }
  }
}
