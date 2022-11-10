# K3s

> Lightweight Kubernetes. Production ready, easy to install, half the memory, all in a binary less than 100 MB.
>
> -- <cite>[k3s-io/k3s: Lightweight Kubernetes](https://github.com/k3s-io/k3s)</cite>

## Installation

```bash
k3sup install --host $HOST --user $USER --ssh-key $SSH_KEY --ssh-port $SSH_PORT
```

After the installation completes, you can check node status:

```shell
export KUBECONFIG=`pwd`/kubeconfig
kubectl get node -o wide
```

Ref: [alexellis/k3sup: bootstrap Kubernetes with k3s over SSH < 1 min 🚀](https://github.com/alexellis/k3sup#-setup-a-kubernetes-server-with-k3sup)

## Usage

### Deploying whoami

You can use following manifests to deploy [traefik/whoami](https://github.com/traefik/whoami) to verify if the newly created k3s cluster works well:

<details>
<summary>Example manifests for whoami</summary>

_Please change TLS & hosts configurations to fit your own needs_

```yaml title="whoami.k8s.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: whoami
  name: whoami
spec:
  replicas: 1
  selector:
    matchLabels:
      app: whoami
  template:
    metadata:
      labels:
        app: whoami
    spec:
      containers:
        - image: traefik/whoami
          name: whoami
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: whoami
  name: whoami
spec:
  ports:
    - name: 80-80
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: whoami
  type: ClusterIP
---
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: https-redirect-scheme
spec:
  redirectScheme:
    scheme: https
    port: "443"
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami
  annotations:
    kubernetes.io/ingress.class: "traefik"
    traefik.ingress.kubernetes.io/router.middlewares: default-https-redirect-scheme@kubernetescrd
spec:
  tls:
    - hosts:
        - whoami.example.com
      # highlight-next-line
      secretName: example-com-wildcard-tls #(1)
  rules:
    - host: whoami.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: whoami
                port:
                  number: 80
```

1.  See [cert-manager](cert-manager.md) for more info

</details>

Ref:

- [Traefik Proxy 2.x and Kubernetes 101 | Traefik Labs](https://traefik.io/blog/traefik-proxy-kubernetes-101/)

## Troubleshooting

### Failed to pull image

When you try to create a pod, you may meet following issue due to domain names not being resolved.

```
Failed to create pod sandbox: rpc error: code = Unknown desc = failed to get sandbox image "rancher/mirrored-pause:3.6": failed to pull image "rancher/mirrored-pause:3.6": failed to pull and unpack image "docker.io/rancher/mirrored-pause:3.6": failed to resolve reference "docker.io/rancher/mirrored-pause:3.6": failed to do request: Head "https://registry-1.docker.io/v2/rancher/mirrored-pause/manifests/3.6": dial tcp: lookup registry-1.docker.io: Try again
```

To solve this problem, you can check if `/etc/resolv.conf` this file on your host server is correctly configured. If you use systemd-resolved, you can try:

```bash
sudo ln -rsf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
```

Ref: [systemd-resolved - ArchWiki](https://wiki.archlinux.org/title/Systemd-resolved#DNS)

### Failed to kubectl port-forward

If you met following issue when calling `kubectl port-forward`,

```
failed to connect to localhost:8888 inside namespace "****************************************************************", IPv4: dial tcp4: lookup localhost: Try again IPv6 dial tcp6: lookup localhost: Try again
```

Please check if `/etc/hosts` file contains following records on your host machine.

```ini title="/etc/hosts"
127.0.0.1        localhost
::1              localhost
```

Ref: [Network configuration - ArchWiki](https://wiki.archlinux.org/title/Network_configuration#Local_hostname_resolution)

### Unable to get real client IP address

You can create `traefik-config.yaml` under `/var/lib/rancher/k3s/server/manifests/`:

```yaml title="/var/lib/rancher/k3s/server/manifests/traefik-config.yaml"
apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: traefik
  namespace: kube-system
spec:
  valuesContent: |-
    service:
      spec:
        externalTrafficPolicy: Local
```

Ref:

- [Rancher Docs: Networking](https://rancher.com/docs/k3s/latest/en/networking/#traefik-ingress-controller)
- [traefik-helm-chart/values.yaml at master · traefik/traefik-helm-chart](https://github.com/traefik/traefik-helm-chart/blob/master/traefik/values.yaml)
