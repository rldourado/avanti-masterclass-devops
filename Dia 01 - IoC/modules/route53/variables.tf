variable "aws_access_key_id" {
  description = "Access key to AWS console"
  type        = string
}

variable "aws_secret_access_key" {
  description = "Secret key to AWS console"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "sa-east-1"
}

variable "www_a_record" {
  type    = string
  default = "192.168.1.220"
}

variable "k8s_cname_record" {
  type = string
  default = "a22c77390c714496bb9f8c4385e89617-1571838498.sa-east-1.elb.amazonaws.com"
}
