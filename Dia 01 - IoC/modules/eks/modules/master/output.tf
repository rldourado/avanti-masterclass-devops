output "cluster_name" {
  value = aws_eks_cluster.eks_cluster.id
}

output "arn" {
  value = aws_eks_cluster.eks_cluster.arn
}
