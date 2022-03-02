# Kustomize

> Kustomize traverses a Kubernetes manifest to add, remove or update configuration options without forking. It is available both as a standalone binary and as a native feature of kubectl.
>
> -- <cite>[Kustomize - Kubernetes native configuration management](https://kustomize.io/)</cite>

## Kustomization

- [The Kustomization File ](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/)

## Usage

Suppose you have following file structure:

```text
.
├── base
│   ├── deployment.k8s.yaml
│   ├── kustomization.yaml
│   ├── network-policy.k8s.yaml
│   └── service.k8s.yaml
└── overlays
    ├── dev
    │   ├── domain-claim.k8s.yaml
    │   ├── kustomization.yaml
    │   └── virtual-service.k8s.yaml
    └── test
        ├── domain-claim.k8s.yaml
        ├── kustomization.yaml
        └── virtual-service.k8s.yaml

4 directories, 10 files
```

If you want to apply manifests for `dev` environment, you can do:

```shell
kubectl apply -k overlays/dev
```

or

```shell
kubectl kustomize overlays/dev | kubectl apply -f -
```
