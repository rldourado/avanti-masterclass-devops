terraform {
  cloud {
    organization = "rldourado"

    workspaces {
      name = "Avanti-Masterclass-IoC"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.5.0"
}
