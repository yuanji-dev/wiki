## Cloudflare

I use [Cloudflare DNS](https://www.cloudflare.com/dns/) for my domain names, and use [Cloudflare Pages](https://pages.cloudflare.com/) to deploy my [blog](https://blog.gimo.me) and this wiki site.

## Cloudflare Pages

You can find the official documentation of Cloudflare Pages from [here](https://developers.cloudflare.com/pages/)

### Deploy a Hugo site

- Build configurations

| Name:                   | Value                                                                       |
| ----------------------- | --------------------------------------------------------------------------- |
| Build command:          | `git fetch --unshallow && git config core.quotePath false && hugo --minify` |
| Build output directory: | /public                                                                     |
| Root directory:         | /                                                                           |

!!! warning "Using a specific Hugo version"

    The default version of hugo seems too old, set a specific version by using `HUGO_VERSION`
    For example: `HUGO_VERSION`: `0.92.2`

### Deploy a MkDocs site

| Name:                   | Value          |
| ----------------------- | -------------- |
| Build command:          | `mkdocs build` |
| Build output directory: | /site          |
| Root directory:         | /              |

!!! warning "Using a specific Python version"

    The default version of Python seems too old, set a specific version by using `PYTHON_VERSION`
    For example: `PYTHON_VERSION`: `3.7`, as of Feb 26, 2022, the latest version supported by Cloudflare Pages is Python 3.7.

    You can find more information about Python version from [here](https://developers.cloudflare.com/pages/framework-guides/deploy-a-sphinx-site/#prerequisites).
