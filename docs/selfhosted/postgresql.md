# PostgreSQL

## Install

```bash
yay -S postgresql
```

## Disable CoW

```bash
sudo chattr +C /var/lib/postgres/data
```

## Initialize

```bash
sudo -u postgres -i initdb --locale=en_US.UTF-8 -E UTF8 -D /var/lib/postgres/data
```

## Enable & Start Service

```bash
sudo systemctl enable --now postgresql.service
```

## Ignore Pkg

```bash title="/etc/pacman.conf"
IgnorePkg = postgresql postgresql-libs
```

## postgresql.conf

```bash title="/var/lib/postgres/data/postgresql.conf"
listen_addresses = 'localhost,10.10.0.5'                # what IP address(es) to listen on;
password_encryption = scram-sha-256
```

## pg_hba.conf

```bash title="/var/lib/postgres/data/pg_hba.conf"
# "local" is for Unix domain socket connections only
local   all             postgres                                peer
local   all             all                                     scram-sha-256
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
```

## Set password for postgres

```bash
[postgres@delta ~]$ psql
psql (13.4)
Type "help" for help.

postgres=# \password postgres
Enter new password:
Enter it again:
```

## Dump database

```bash
pg_dump -U miniflux miniflux > miniflux.sql
```

## Create database

```bash
create database miniflux;
create user miniflux with encrypted password 'YOUR_PASSWORD';
grant all privileges on database miniflux to miniflux;
```

## Import data

```bash
psql -U miniflux -h localhost -d miniflux -f miniflux.sql
```

## prometheus-postgresql-exporter

```bash title="/etc/conf.d/prometheus-postgresql-exporter"
DATA_SOURCE_USER="postgres"
DATA_SOURCE_PASS="YOUR_PASSWORD"
DATA_SOURCE_NAME="postgresql://postgres:YOUR_PASSWORD@127.0.0.1:5432/postgres?sslmode=disable"
PG_EXPORTER_AUTO_DISCOVER_DATABASES=true
POSTGRES_EXPORTER_ARGS="--web.listen-address=10.10.0.5:9187"
```

## Links

- [How to Install, Configure, and Upgrade PostgreSQL on Arch Linux](https://www.vultr.com/docs/how-to-install-configure-and-upgrade-postgresql-on-arch-linux)
- [PostgreSQL](https://wiki.archlinux.org/title/PostgreSQL)
- [How to manage DEFAULT PRIVILEGES for USERs on a DATABASE vs SCHEMA?](https://dba.stackexchange.com/questions/117109/how-to-manage-default-privileges-for-users-on-a-database-vs-schema)
- [Is it better to use multiple databases with one schema each, or one database with multiple schemas?](https://stackoverflow.com/questions/1152405/is-it-better-to-use-multiple-databases-with-one-schema-each-or-one-database-wit)
- [23.1. Overview](https://www.postgresql.org/docs/current/manage-ag-overview.html)
  > Inside each database are multiple schemas, which contain objects like tables and functions. So the full hierarchy is: cluster, database, schema, table (or some other kind of object, such as a function).

## TODO

- [ ] TLS
- [ ] Access Permission
- [ ] How to upgrade
- [ ] How to backup
