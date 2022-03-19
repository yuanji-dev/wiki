# Kubernetes

## kubectl

### One command to create pod and service

```bash
kubectl run nginx --image=nginx --restart=Never --port=80 --expose
```

### Create temporary busybox pod

```bash
kubectl run busybox --image=busybox --restart=Never --rm -it -- /bin/sh
```

### Create manifests

===! "Deployment"

    ```bash
    kubectl create deployment whoami --image=traefik/whoami -o yaml --dry-run=client
    ```

=== "Service"

    ```bash
    kubectl create service clusterip whoami --tcp=80:80 -o yaml --dry-run=client
    ```

## Kubernetes JSON schemas

- [yannh/kubeconform: A FAST Kubernetes manifests validator, with support for Custom Resources!](https://github.com/yannh/kubeconform)
- [yannh/kubernetes-json-schema: JSON Schemas for every version of every object in every version of Kubernetes](https://github.com/yannh/kubernetes-json-schema/)
  - [Is this repository dead? · Issue #32 · instrumenta/kubernetes-json-schema](https://github.com/instrumenta/kubernetes-json-schema/issues/32)

## Links

- [kubectl Cheat Sheet | Kubernetes](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
