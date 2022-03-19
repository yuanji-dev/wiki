# cert-manager

> cert-manager adds certificates and certificate issuers as resource types in Kubernetes clusters, and simplifies the process of obtaining, renewing and using those certificates.
>
> It can issue certificates from a variety of supported sources, including Let’s Encrypt, HashiCorp Vault, and Venafi as well as private PKI.
>
> It will ensure certificates are valid and up to date, and attempt to renew certificates at a configured time before expiry.
>
> -- <cite>[cert-manager | cert-manager](https://cert-manager.io/docs/)</cite>

## Installation

===! "Installation"

    ```bash
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.yaml
    ```

=== "Verify the installation"

    ```bash
    $ kubectl get pods --namespace cert-manager
    NAME                                     READY   STATUS    RESTARTS   AGE
    cert-manager-cainjector-d6cbc4d9-vfrvg   1/1     Running   0          5m9s
    cert-manager-6d8d6b5dbb-5kdlj            1/1     Running   0          5m8s
    cert-manager-webhook-85fb68c79b-btvg7    1/1     Running   0          5m8s
    ```

Ref: [Kubectl apply | cert-manager](https://cert-manager.io/docs/installation/kubectl/)

## Creating Issuers/ClusterIssuers

!!! note "Issuer vs ClusterIssuer"

    An Issuer is a namespaced resource, and it is not possible to issue certificates from an Issuer in a different namespace. This means you will need to create an Issuer in each namespace you wish to obtain Certificates in.

    If you want to create a single Issuer that can be consumed in multiple namespaces, you should consider creating a ClusterIssuer resource. This is almost identical to the Issuer resource, however is non-namespaced so it can be used to issue Certificates across all namespaces.

    -- <cite>[Issuer | cert-manager](https://cert-manager.io/docs/concepts/issuer/#namespaces)</cite>

Following example creates an ACME ClusterIssuer using Cloudflare as DNS01 challenge provider:

===! "Secret"

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: cloudflare-api-token
      namespace: cert-manager
    type: Opaque
    stringData:
      api-token: YOUR_TOKEN
    ```

=== "ClusterIssuer"

    ```yaml
    apiVersion: cert-manager.io/v1
    kind: ClusterIssuer
    metadata:
      name: letsencrypt-prod
    spec:
      acme:
        email: production@example.com
        server: https://acme-v02.api.letsencrypt.org/directory
        privateKeySecretRef:
          name: letsencrypt-prod-account-key
        solvers:
          - dns01:
              cloudflare:
                apiTokenSecretRef:
                  name: cloudflare-api-token
                  key: api-token
    ```

=== "ClusterIssuer(Staging)"

    !!! tip "Staging environment"

        You can test against the [ACME v2 staging environment](https://letsencrypt.org/docs/staging-environment/) before using production environment. This will allow you to get things right before issuing trusted certificates and reduce the chance of your running up against rate limits.

    ```yaml
    apiVersion: cert-manager.io/v1
    kind: ClusterIssuer
    metadata:
      name: letsencrypt-staging
    spec:
      acme:
        email: staging@example.com
        server: https://acme-staging-v02.api.letsencrypt.org/directory
        privateKeySecretRef:
          name: letsencrypt-staging-account-key
        solvers:
          - dns01:
              cloudflare:
                apiTokenSecretRef:
                  name: cloudflare-api-token
                  key: api-token
    ```

Ref: [Cloudflare | cert-manager](https://cert-manager.io/docs/configuration/acme/dns01/cloudflare/)

## Creating certificates

You can use following example to issue a certificate:

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: example-com-wildcard
spec:
  secretName: example-com-wildcard-tls
  renewBefore: 360h # 15d
  dnsNames:
    - example.com
    - "*.example.com"
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
```

Ref: [Certificate Resources | cert-manager](https://cert-manager.io/docs/usage/certificate/)

## Using certificates

You can refer to a certificate in `Ingress` by using `secretName` like following example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: whoami
  annotations:
    kubernetes.io/ingress.class: "traefik"
spec:
  tls:
    - hosts:
        - whoami.example.com
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

1.  Refer to the certificate you created in the [previous step](#creating-certificates)
