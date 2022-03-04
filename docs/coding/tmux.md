# tmux

> tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.
>
> -- <cite>[tmux/tmux Wiki](https://github.com/tmux/tmux/wiki)</cite>

## Configurations

My own configurations: [dotfiles/tmux at main · masakichi/dotfiles](https://github.com/masakichi/dotfiles/tree/main/tmux)

Ref: [tony/tmux-config: Example tmux configuration - screen + vim key-bindings, system stat, cpu load bar.](https://github.com/tony/tmux-config)

### 24-bit color(true color)

- Testing

```shell
curl -s https://raw.githubusercontent.com/tmux/tmux/master/tools/24-bit-color.sh | bash
```

- Vim under tmux

```shell
set -g default-terminal "tmux-256color"
set -ga terminal-overrides ",*256col*:Tc"
```

Ref: [How to use true colors in vim under tmux? · Issue #1246 · tmux/tmux](https://github.com/tmux/tmux/issues/1246)

## Session managers

- [ivaaaan/smug: Session manager and task runner for tmux. Start your development environment within one command.](https://github.com/ivaaaan/smug)
- [tmux-python/tmuxp: tmux session manager. built on libtmux](https://github.com/tmux-python/tmuxp)
- [tmuxinator/tmuxinator: Manage complex tmux sessions easily](https://github.com/tmuxinator/tmuxinator)

## Plugins

- [tmux-plugins](https://github.com/tmux-plugins)

## Cheatsheets

- [Tmux Cheat Sheet & Quick Reference](https://tmuxcheatsheet.com/)

## Links

- [Read The Tao of tmux | Leanpub](https://leanpub.com/the-tao-of-tmux/read)
