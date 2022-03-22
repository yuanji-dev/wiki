# Docker

## Run systemd in container

```docker title="Dockerfile"
FROM centos:7
MAINTAINER "Gimo" <self@gimo.me>
ENV container docker
RUN yum -y update; yum clean all
RUN yum -y install systemd; yum clean all; \
(cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); \
rm -f /lib/systemd/system/multi-user.target.wants/*;\
rm -f /etc/systemd/system/*.wants/*;\
rm -f /lib/systemd/system/local-fs.target.wants/*; \
rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
rm -f /lib/systemd/system/basic.target.wants/*;\
rm -f /lib/systemd/system/anaconda.target.wants/*;
VOLUME [ "/sys/fs/cgroup" ]
CMD ["/usr/sbin/init"]
```

```bash
docker build -t systemd_centos .
docker run --privileged -d -v /sys/fs/cgroup:/sys/fs/cgroup:ro systemd_centos
```

Ref: [Running systemd within a docker container](https://rhatdan.wordpress.com/2014/04/30/running-systemd-within-a-docker-container/)

## Save and load docker images

```bash
docker save ubuntu -o ubuntu.tar
docker load -i ubuntu.tar
```

## Update image using docker-compose

```bash
docker-compose pull && docker-compose up -d
```

Ref: [build process - how to get docker-compose to use the latest image from repository - Stack Overflow](https://stackoverflow.com/questions/37685581/how-to-get-docker-compose-to-use-the-latest-image-from-repository#comment107864323_39127792)

## Remove unused images

```bash
docker image prune -a
```

Ref: [How to remove old and unused Docker images - Stack Overflow](https://stackoverflow.com/questions/32723111/how-to-remove-old-and-unused-docker-images)

## Access host port from container

> On Linux, add `--add-host=host.docker.internal:host-gateway` to your Docker command to enable this feature. (See below for Docker Compose configuration.)
>
> Use your internal IP address or connect to the special DNS name `host.docker.internal` which will resolve to the internal IP address used by the host.
>
> To enable this in Docker Compose on Linux, add the following lines to the container definition:
>
> ```yaml
> extra_hosts:
>   - "host.docker.internal:host-gateway"
> ```

Ref: [How to access host port from docker container - Stack Overflow](https://stackoverflow.com/questions/31324981/how-to-access-host-port-from-docker-container)
