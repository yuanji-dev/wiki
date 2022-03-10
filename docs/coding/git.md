# Git

## Commit messages

```bash
npm install -g commitizen
npm install -g cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [commitizen/cz-cli: The commitizen command-line utility. #BlackLivesMatter](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
- [commitizen-tools/commitizen: Create committing rules for projects auto bump versions and auto changelog generation](https://github.com/commitizen-tools/commitizen)

## Global configuration & ignore

=== "Global configuration"

    ```ini title="~/.config/git/config"
    [user]
        name = Yuanji
        email = self@gimo.me
        signingkey = 3CB6EA7C55827AAD

    [core]
        quotepath = false
        pager = delta

    [interactive]
        diffFilter = delta --color-only

    [delta]
        navigate = true

    [merge]
        conflictstyle = diff3

    [diff]
        colorMoved = default

    [commit]
        gpgsign = true

    [init]
        defaultBranch = main
    ```

=== "Global ignore"

    ```ini title="~/.config/git/ignore"
    # Compiled source #
    ###################
    *.com
    *.class
    *.dll
    *.exe
    *.o
    *.so

    # Packages #
    ############
    # it's better to unpack these files and commit the raw source
    # git has its own built in compression methods
    *.7z
    *.dmg
    *.gz
    *.iso
    *.jar
    *.rar
    *.tar
    *.zip

    # Logs and databases #
    ######################
    *.log
    *.sql
    *.sqlite

    # OS generated files #
    ######################
    .DS_Store
    .DS_Store?
    ._*
    .Spotlight-V100
    .Trashes
    ehthumbs.db
    Thumbs.db
    ```

!!! Tip "Nice to have"

    - Pager: [dandavison/delta: A syntax-highlighting pager for git, diff, and grep output](https://github.com/dandavison/delta)
    - .gitignore template: [gitignore.io](https://github.com/toptal/gitignore.io)

See also: [dotfiles/git/.config/git at main · masakichi/dotfiles](https://github.com/masakichi/dotfiles/tree/main/git/.config/git)

## Project wise configuration

```ini title=".git/config"
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@github.com:masakichi/wiki.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
[user]
	name = Yuanji
	email = self@gimo.me
	signingkey = 3CB6EA7C55827AAD
[commit]
	gpgsign = true
```

## Git log

### List commit message between two tags

```bash
git log --pretty="%s" --no-merges  v1.8.12..v1.9.0
```

Ref: [Git - pretty-formats Documentation](https://git-scm.com/docs/pretty-formats)

## Pre-commit

A framework for managing and maintaining multi-language pre-commit hooks.

For more information see: https://pre-commit.com/

### Installation

=== ":material-arch: Arch Linux"

    ```bash
    sudo pacman -S python-pre-commit
    ```

=== ":material-apple: macOS"

    ```bash
    brew install pre-commit
    ```

=== ":material-language-python: Python"

    ```bash
    pip install pre-commit
    ```

### Current repository's configuration

```yaml title=".pre-commit-config.yaml"
--8<-- ".pre-commit-config.yaml"
```

Ref: [supported hooks](https://pre-commit.com/hooks.html)

### Setup git hooks

```bash
pre-commit install
```

## Tips

### Update git commit author date when amending

```bash
git commit --amend --date=now
```
