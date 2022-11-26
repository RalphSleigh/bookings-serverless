terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  backend "s3" {
    key    = "bookings"
    region = "eu-west-2"
  }
}

#data "terraform_remote_state" "state" {
#  backend = "s3"
#  config {
#    bucket     = "${var.tf_state_bucket}"
#  }
#}

provider "aws" {
  region = "eu-west-2"
  default_tags {
    tags = {
      Environment = "${terraform.workspace}"
      MANAGED_BY  = "Terraform"
    }
  }
}
