# code-server

## Installation

```
yay -S code-server
```

see also: [Install - code-server v4.0.2 docs](https://coder.com/docs/code-server/latest/install)

## Configuration

### Allows code-server to listen on port 443

```bash
sudo setcap cap_net_bind_service=+ep /usr/lib/code-server/lib/node
```

### config file

```yaml title="~/.config/code-server/config.yaml"
bind-addr: 0.0.0.0:443
auth: password
password: db0d7ea5d107538586421279
cert: /home/yuanji/.local/share/code-server/cert.pem
cert-key: /home/yuanji/.local/share/code-server/key.pem
```

### install extension

```
code-server --install-extension vscodevim.vim
```

### Enable/Start Service

```bash
sudo systemctl enable --now code-server@$USER
```

### HTTPS

see [acme.sh](./acme.sh.md) for more details.

```bash
acme.sh --issue -d code.gimo.me --dns dns_cf

acme.sh --install-cert -d code.gimo.me \
--key-file /home/yuanji/.local/share/code-server/key.pem \
--fullchain-file /home/yuanji/.local/share/code-server/cert.pem \
--reloadcmd "sudo systemctl restart code-server@yuanji.service"
```
