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

variable "cluster_name" {
  description = "EKS Cluster Name"
  type        = string
  default     = "eks-avanti-masterclass"
}

variable "kubernetes_version" {
  description = "EKS Kubernetes Version"
  type        = string
  default     = "1.25"
}

variable "desired_size" {
  description = "EKS Cluster Nodes Count"
  type        = number
  default     = 2
}

variable "min_size" {
  description = "EKS Cluster Minimum Node Count"
  type        = number
  default     = 1
}

variable "max_size" {
  description = "EKS Cluster Maximum Node Count"
  type        = number
  default     = 3
}
