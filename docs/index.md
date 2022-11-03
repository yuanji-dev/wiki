---
sidebar_position: 1
sidebar_label: Welcome
---

# Welcome to Yuanji's wiki

This's my personal wiki where I share what I know. It's powered by [Docusaurus 2](https://docusaurus.io/).

I deploy this website on [Cloudflare Pages](sysadmin/cloudflare.md#deploy-a-docusaurus-site).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
