# avanti-masterclass-k8s

```
kubectl get namespaces

kubectl create namespace avanti

kubectl autoscale deployment test --cpu-percent=50 --min=1 --max=10
```


```
wrk -t20 -c200 -d60s -R2000 http://ae52681fd19294b04af0ac20dae66d9e-1727356218.sa-east-1.elb.amazonaws.com:6060/posts
```

## Deployments

## Services

- ClusterIP
- NodePort
- LoadBalancer