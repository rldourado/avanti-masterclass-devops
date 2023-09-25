## Infractructure As Code

Infractructure As Code - IAC Scripts and Artifacts

<br />

### AWS

```(bash)
$ export AWS_DEFAULT_PROFILE=rldourado
$ # aws configure
$ aws eks list-clusters --region us-east-1 --output table
```

<br />

### RegistroBR

```(bash)
$ dig @1.1.1.1 +all stwconsult.tec.br ANY+
```

<br />

### Terraform - Install (Ubuntu)

```(bash)
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

#### Version Constraints

https://developer.hashicorp.com/terraform/language/expressions/version-constraints

### Terraform - CLI

```(bash)
$ terraform init
$ terraform providers
$ terraform fmt -recursive
$ terraform validate
$ terraform plan -out "main.tfplan"
$ terraform apply "main.tfplan"
$ terraform login
$ terraform logout
$ terraform destroy
```

### Terraform Cloud - Login

```(bash)
$ terraform login
```

### Terraform Cloud - Before Logout

```(bash)
mkdir -p terraform.tfstate.d/tfc-migration-test
terraform state pull > terraform.tfstate.d/tfc-migration-test/terraform.tfstate
mv .terraform/terraform.tfstate .terraform/terraform.tfstate.old

# Remove the cloud block in the config

terraform init
```

### Terraform Cloud - Logout

```(bash)
$ terraform logout
```

<br />

### EKS Config

```(bash)
$ aws eks update-kubeconfig --region sa-east-1 --name eks-avanti-masterclass
$ kubectl get svc
$ kubectl -n kube-system edit configmap aws-auth
```

```
  mapUsers: |
    - groups:
      - system:masters
      userarn: arn:aws:iam::111122223333:user/admin
      username: admin
```

### Rancher

```(bash)
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm search repo ingress-nginx -l

helm upgrade --install \
  ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --set controller.service.type=LoadBalancer \
  --version 4.7.2 \
  --create-namespace

kubectl get service ingress-nginx-controller --namespace=ingress-nginx

# Get External-IP Address

helm repo add rancher-stable https://releases.rancher.com/server-charts/stable

kubectl create namespace cattle-system

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.crds.yaml
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.11.0

helm install rancher rancher-stable/rancher \
  --namespace cattle-system \
  --set hostname=k8s.stwconsult.tec.br \
  --set bootstrapPassword=admin \
  --set ingress.tls.source=letsEncrypt \
  --set letsEncrypt.email=me@example.org \
  --set letsEncrypt.ingress.class=nginx \
  --set ingress.ingressClassName=nginx

kubectl -n cattle-system rollout status deploy/rancher

kubectl -n cattle-system get deploy rancher
```
