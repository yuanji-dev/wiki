# Zsh

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

> Zsh is a shell designed for interactive use, although it is also a powerful scripting language.
>
> -- <cite>[Zsh](https://www.zsh.org/)</cite>

## Completions

Basically, there're two ways to enable autocompletion.

<Tabs>
  <TabItem value="Source completion script" default>

The kubectl completion script for Zsh can be generated with the command kubectl completion zsh. Sourcing the completion script in your shell enables kubectl autocompletion.

To do so in all your shell sessions, add the following to your ~/.zshrc file:

```bash
source <(kubectl completion zsh)
```

If you have an alias for kubectl, you can extend shell completion to work with that alias:

```bash
echo 'alias k=kubectl' >>~/.zshrc
echo 'compdef __start_kubectl k' >>~/.zshrc
```

Ref: [zsh auto-completion | Kubernetes](https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-zsh/)

  </TabItem>
  <TabItem value="Install completion file">

Install or generate completion files under `$FPATH`

```bash
volta completions zsh > ~/.zsh_completions/_volta
```

To add `~/.zsh_completions` to `$FPATH`, you need to add the following line to `~/.zshrc`

```bash
export FPATH="$HOME/.zsh_completions:$FPATH"
```

Ref: [Completions for zsh is not working · Issue #496 · volta-cli/volta](https://github.com/volta-cli/volta/issues/496)

  </TabItem>
</Tabs>

:::caution Rebuild zcompdump

You may have to rebuild `zcompdump` by running

```bash
rm -f ~/.zcompdump; compinit
```

:::
