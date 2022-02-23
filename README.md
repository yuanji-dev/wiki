# Welcome to Yuanji's Wiki

This is my personal wiki where I share what I know. It is powered by [MkDocs](https://www.mkdocs.org/) with [Material theme](https://squidfunk.github.io/mkdocs-material/).

## Configurations

All Configurations are located in `mkdocs.yml`, you can add the following line at the top of it to enable YAML schema validation.

```yaml
# yaml-language-server: $schema=https://squidfunk.github.io/mkdocs-material/schema.json
```

## Run locally

- Clone repo & install dependencies

```bash
git clone https://github.com/masakichi/wiki.git
cd wiki
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

- Launch dev server

```bash
mkdocs serve
```

## Formatting

Currently, I'm using [prettier](https://prettier.io/) to format yaml & markdown files, also I've setup [pre-commit](https://pre-commit.com/) to guarentee all files being formatted before committing to git.

To install pre-commit hook, simply run:

```shell
pre-commit install
```

!!! tip "Regression Test"

    I use the [markdown](coding/markdown.md) page to roughly check if everthing works fine.
