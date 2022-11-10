# Vim

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Due to I use [Neovim](https://neovim.io/) now, the term `Vim` in this article refers to Neovim.

## Installation

<Tabs>
  <TabItem value="Arch Linux" default>

```bash
sudo pacman -S neovim
```

  </TabItem>
  <TabItem value="macOS">

```bash
brew install neovim
```

  </TabItem>
</Tabs>

## Configurations

My own configurations: [dotfiles/nvim/.config/nvim at main · masakichi/dotfiles](https://github.com/masakichi/dotfiles/tree/main/nvim/.config/nvim)

### yaml-language-server

- Using inline schema

```yaml
# yaml-language-server: $schema=<urlToTheSchema>
```

:::tip JSON Schema Store

Find all available schemas from [JSON Schema Store](https://www.schemastore.org/json/)

:::

## Plugins

I use [packer.nvim](https://github.com/wbthomason/packer.nvim) to manage all plugins.

### General

- [folke/tokyonight.nvim: 🏙 A clean, dark Neovim theme written in Lua, with support for lsp, treesitter and lots of plugins. Includes additional themes for Kitty, Alacritty, iTerm and Fish.](https://github.com/folke/tokyonight.nvim)
- [nvim-lualine/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.](https://github.com/nvim-lualine/lualine.nvim)
- [simrat39/symbols-outline.nvim: A tree like view for symbols in Neovim using the Language Server Protocol. Supports all your favourite languages.](https://github.com/simrat39/symbols-outline.nvim)
- [folke/trouble.nvim: 🚦 A pretty diagnostics, references, telescope results, quickfix and location list to help you solve all the trouble your code is causing.](https://github.com/folke/trouble.nvim)
- [farmergreg/vim-lastplace: Intelligently reopen files at your last edit position in Vim.](https://github.com/farmergreg/vim-lastplace)
- [nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim)
- [nvim-treesitter/nvim-treesitter: Nvim Treesitter configurations and abstraction layer](https://github.com/nvim-treesitter/nvim-treesitter)
- [iamcco/markdown-preview.nvim: markdown preview plugin for (neo)vim](https://github.com/iamcco/markdown-preview.nvim)
- [brglng/vim-im-select: Improve Vim/Neovim experience with input methods.](https://github.com/brglng/vim-im-select)
- [norcalli/nvim-colorizer.lua: The fastest Neovim colorizer.](https://github.com/norcalli/nvim-colorizer.lua)
- [windwp/nvim-autopairs: autopairs for neovim written by lua](https://github.com/windwp/nvim-autopairs)

### LSP

- [neovim/nvim-lspconfig: Quickstart configurations for the Nvim LSP client](https://github.com/neovim/nvim-lspconfig)
- [williamboman/nvim-lsp-installer: Neovim plugin that allows you to seamlessly manage LSP servers with :LspInstall. With full Windows support!](https://github.com/williamboman/nvim-lsp-installer)
- [jose-elias-alvarez/null-ls.nvim: Use Neovim as a language server to inject LSP diagnostics, code actions, and more via Lua.](https://github.com/jose-elias-alvarez/null-ls.nvim)
- [onsails/lspkind-nvim: vscode-like pictograms for neovim lsp completion items](https://github.com/onsails/lspkind-nvim)

### Completion & snippets

- [hrsh7th/nvim-cmp: A completion plugin for neovim coded in Lua.](https://github.com/hrsh7th/nvim-cmp)
- [hrsh7th/cmp-nvim-lsp: nvim-cmp source for neovim builtin LSP client](https://github.com/hrsh7th/cmp-nvim-lsp)
- [hrsh7th/cmp-buffer: nvim-cmp source for buffer words](https://github.com/hrsh7th/cmp-buffer)
- [hrsh7th/cmp-path: nvim-cmp source for path](https://github.com/hrsh7th/cmp-path)
- [hrsh7th/cmp-cmdline: nvim-cmp source for vim's cmdline](https://github.com/hrsh7th/cmp-cmdline)
- [hrsh7th/cmp-vsnip: nvim-cmp source for vim-vsnip](https://github.com/hrsh7th/cmp-vsnip)
- [hrsh7th/vim-vsnip: Snippet plugin for vim/nvim that supports LSP/VSCode's snippet format.](https://github.com/hrsh7th/vim-vsnip)
  - Run `:VsnipOpen` to create/edit snippets
  - The snippet format was described in [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax) or [here](https://github.com/Microsoft/language-server-protocol/blob/main/snippetSyntax.md)
- [hrsh7th/vim-vsnip-integ: vim-vsnip integrations to other plugins.](https://github.com/hrsh7th/vim-vsnip-integ)
- [rafamadriz/friendly-snippets: Set of preconfigured snippets for different languages.](https://github.com/rafamadriz/friendly-snippets)
- [uga-rosa/cmp-dictionary: nvim-cmp source for dictionary.](https://github.com/uga-rosa/cmp-dictionary)

## Links

- [Moving to modern Neovim](https://toroid.org/modern-neovim) / [Discussion on Lobsters](https://lobste.rs/s/hgvtpd/moving_modern_neovim)
- [Everything you need to know to configure neovim using lua | Devlog](https://vonheikemen.github.io/devlog/tools/configuring-neovim-using-lua/)
- [From init.vim to init.lua - a crash course](https://www.notonlycode.org/neovim-lua-config/)
- [nanotee/nvim-lua-guide: A guide to using Lua in Neovim](https://github.com/nanotee/nvim-lua-guide)
- [Configuration | LunarVim Docs](https://www.lunarvim.org/configuration/)
- [mhinz/vim-galore: All things Vim!](https://github.com/mhinz/vim-galore#buffers-windows-tabs)
- [Modern Vim](https://learning.oreilly.com/library/view/modern-vim/9781680506006/)
- [SpaceVim/SpaceVim: A community-driven modular vim distribution - The ultimate vim configuration](https://github.com/SpaceVim/SpaceVim)
- [kabinspace/AstroVim: AstroVim is an aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins](https://github.com/kabinspace/AstroVim)
