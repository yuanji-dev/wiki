# Cloudflare

I use [Cloudflare DNS](https://www.cloudflare.com/dns/) for my domain names, and use [Cloudflare Pages](https://pages.cloudflare.com/) to deploy my [blog](https://blog.gimo.me) and this wiki site.

## Cloudflare Pages

You can find the official documentation of Cloudflare Pages from [here](https://developers.cloudflare.com/pages/)

### Deploy a Hugo site

- Build configurations

| Name:                   | Value                                                                     |
| ----------------------- | ------------------------------------------------------------------------- |
| Build command:          | git fetch --unshallow && git config core.quotePath false && hugo --minify |
| Build output directory: | /public                                                                   |
| Root directory:         | /                                                                         |

:::caution Using a specific Hugo version

The default version of hugo seems too old, set a specific version by using `HUGO_VERSION`
For example: `HUGO_VERSION`: `0.92.2`

:::

### Deploy a Docusaurus site

- Build configurations

| Name:                   | Value                                                                     |
| ----------------------- | ------------------------------------------------------------------------- |
| Build command:          | git fetch --unshallow && git config core.quotePath false && npm run build |
| Build output directory: | /build                                                                    |
| Root directory:         | /                                                                         |

:::caution Using a specific Node.js version

The default version of Node.js seems too old, set a specific version by using `NODE_VERSION`
For example: `NODE_VERSION`: `16`.

:::
