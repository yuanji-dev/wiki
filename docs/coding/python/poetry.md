# Poetry

> Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.
>
> -- <cite>[Poetry - Python dependency management and packaging made easy](https://python-poetry.org/docs/)</cite>

## Installation

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

## Usage

### Install packages

The install command reads the pyproject.toml file from the current project, resolves the dependencies, and installs them.

```bash
poetry install
```

You can specify to the command that you don't want the development dependencies installed by passing the --no-dev option.

```bash
poetry install --no-dev
```

### Add packages

The add command adds required packages to your pyproject.toml and installs them.

```bash
poetry add requests pendulum
```

See also: [Dependency specification](https://python-poetry.org/docs/dependency-specification/)

### Export requirements.txt

This command exports the lock file to requirements.txt format

```bash
poetry export -f requirements.txt --output requirements.txt
```

You can specify to the command that you also want the development dependencies by passing the `--dev` option, and exclude hashes from exported files by passing `--without-hashes`.

```bash
poetry export -f requirements.txt --dev --without-hashes --output requirements.txt
```

Ref: [Poetry Commands Documentation](https://python-poetry.org/docs/cli/)
