# acme.sh

## Installation

```bash
yay -S acme.sh
```

## Issue a cert

Set environment for `CF_Token`

```bash
export CF_Token=""
```

## Issue a cert

```bash
acme.sh --issue -d tokyo-1.gimo.me -d '*.tokyo-1.gimo.me' --dns dns_cf
```

## Install a cert

```bash
acme.sh --install-cert -d "tokyo-1.gimo.me" \
--key-file /etc/ssl/tokyo-1.gimo.me/privkey.pem \
--fullchain-file /etc/ssl/tokyo-1.gimo.me/fullchain.pem \
--capath /etc/ssl/tokyo-1.gimo.me/chain.pem \
--reloadcmd "sudo systemctl reload nginx.service"
```

## Renew timer

- Create a systemd unit for acme.sh:

```ini title="/etc/systemd/system/acme_letsencrypt.service"
[Unit]
Description=Renew Let's Encrypt certificates using acme.sh
After=network-online.target

[Service]
Type=oneshot
Environment="HOME=/home/yuanji"
ExecStart=/usr/bin/acme.sh --cron
SuccessExitStatus=0 2
```

- Test that it works before creating the timer:

```bash
sudo systemctl daemon-reload
sudo systemctl start acme_letsencrypt
```

- Create systemd timer unit for the service above:

```ini title="/etc/systemd/system/acme_letsencrypt.timer"
[Unit]
Description=Daily renewal of Let's Encrypt's certificates

[Timer]
OnCalendar=daily
RandomizedDelaySec=1h
Persistent=true

[Install]
WantedBy=timers.target
```

- Enable timer:

```bash
sudo systemctl start acme_letsencrypt.timer
sudo systemctl enable acme_letsencrypt.timer
```

## Links

- [acmesh-official/acme.sh: A pure Unix shell script implementing ACME client protocol](https://github.com/acmesh-official/acme.sh)
