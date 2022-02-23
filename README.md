# Welcome to Yuanji's Wiki

This is my personal wiki where I share what I know. It's powered by [MkDocs](https://www.mkdocs.org/) with [Material theme](https://squidfunk.github.io/mkdocs-material/).

## Configurations

You can find all configurations in `mkdocs.yml`, to enable YAML schema validation add the following line at the top of it.

```yaml
# yaml-language-server: $schema=https://squidfunk.github.io/mkdocs-material/schema.json
```

## Run locally

- Clone repository & install dependencies

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
