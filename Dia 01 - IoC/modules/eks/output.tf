output "eks_cluster_name" {
  value = module.master.cluster_name
}

output "eks_arn" {
  value = module.master.arn
}

output "eks_vpc_id" {
  value = module.network.vpc_id
}

output "eks_private_subnet_1a" {
  value = module.network.private_subnet_1a
}

output "eks_private_subnet_1b" {
  value = module.network.private_subnet_1b
}
