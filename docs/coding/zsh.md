# Zsh

> Zsh is a shell designed for interactive use, although it is also a powerful scripting language.
>
> -- <cite>[Zsh](https://www.zsh.org/)</cite>

## Completions

Basically, there're two ways to enable autocompletion.

=== "Source completion script"

    The kubectl completion script for Zsh can be generated with the command kubectl completion zsh. Sourcing the completion script in your shell enables kubectl autocompletion.

    To do so in all your shell sessions, add the following to your ~/.zshrc file:

    ```shell
    source <(kubectl completion zsh)
    ```

    If you have an alias for kubectl, you can extend shell completion to work with that alias:

    ```shell
    echo 'alias k=kubectl' >>~/.zshrc
    echo 'compdef __start_kubectl k' >>~/.zshrc
    ```

    Ref: [zsh auto-completion | Kubernetes](https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-zsh/)

=== "Install completion file"

    Install or generate completion files under `$FPATH`

    ```shell
    volta completions zsh > ~/.zsh_completions/_volta
    ```

    To add `~/.zsh_completions` to `$FPATH`, you need to add the following line to `~/.zshrc`

    ```shell
    export FPATH="$HOME/.zsh_completions:$FPATH"
    ```

    Ref: [Completions for zsh is not working · Issue #496 · volta-cli/volta](https://github.com/volta-cli/volta/issues/496)

!!! warning "Rebuild zcompdump"

    You may have to rebuild `zcompdump` by running

    ```shell
    rm -f ~/.zcompdump; compinit
    ```
