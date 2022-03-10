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
