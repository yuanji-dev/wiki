# Git

## Commit Messages

```bash
npm install -g commitizen
npm install -g cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [commitizen/cz-cli: The commitizen command line utility. #BlackLivesMatter](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
- [commitizen-tools/commitizen: Create committing rules for projects auto bump versions and auto changelog generation](https://github.com/commitizen-tools/commitizen)

## Project Wise Config

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
