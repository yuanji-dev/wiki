# ChromeOS

## Installation

1. Download recovery image
   Find archived image file from [Chromium Dash](https://chromiumdash.appspot.com/serving-builds?deviceCategory=Chrome%20OS%20Flex), download file like https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_14794.0.0_reven_recovery_dev-channel_mp-v2.bin.zip
2. Unzip downloaded file
3. Create USB installer

```bash
dd if=path/to/file.img of=/dev/drive_device status=progress
```

## Settings

### Nerd Fonts for Terminal

1. Open Chrome
2. Press ++ctrl+alt+t++
3. Press ++ctrl+shift+j++
4. Input following codes into console
   ```javascript
   term_.prefs_.set("font-family", "Caskaydia Cove");
   term_.prefs_.set(
     "user-css-text",
     '@font-face {font-family: "Caskaydia Cove"; src: url("https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/patched-fonts/CascadiaCode/Regular/complete/Caskaydia%20Cove%20Regular%20Nerd%20Font%20Complete.otf"); font-weight: normal; font-style: normal;}'
   );
   ```

Ref: [Chrome / Chrome OS support · Issue #345 · ryanoasis/nerd-fonts](https://github.com/ryanoasis/nerd-fonts/issues/345#issuecomment-961718662)

## Set up Linux

[Linux setup | chromeOS.dev](https://chromeos.dev/en/linux/setup)
[Set up Linux on your Chromebook - Chromebook Help](https://support.google.com/chromebook/answer/9145439?hl=en)

### Debian Packages

```bash
sudo apt install tmux
sudo apt-get install build-essential
sudo apt install fonts-noto-color-emoji
sudo apt-get install wamerican
sudo apt-get install python3-distutils
sudo apt install wl-clipboard
sudo apt install xfce4-terminal
sudo apt install telegram-desktop
```

### Homebrew Packages

[The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)

```bash
brew install gcc
brew install hugo
brew install neovim
brew install go
brew install fd ripgrep vale tealdeer git-delta bat fasd exa neofetch tig smug
```

### Fcitx5

```bash
sudo apt install --install-recommends fcitx5 fcitx5-chinese-addons fcitx5-mozc
sudo apt install fcitx5-material-color
```

=== "Environment vars"

    ```ini title="~/.config/environment.d/envvars.conf"
    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx
    GDK_BACKEND=x11
    ```

=== "Auto start"

    ```bash title="~/.sommelierrc"
    if [ -z $(pgrep -fo "fcitx5") ]; then
       /usr/bin/fcitx5 -d
    fi
    ```

Ref:

- [ja/I18n/Fcitx5 - Debian Wiki](https://wiki.debian.org/ja/I18n/Fcitx5)
- [Chromebook Crostini の有効化と日本語化](https://zenn.dev/igac/articles/84d1f377bcd9d698ee8d)
- [Chromebook を快適な開発環境にするためのプチノウハウ群（2022 年 6 月版） - Qiita](https://qiita.com/komde/items/25b4c80598d7e2b679f6#%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AEssh%E3%82%AD%E3%83%BC%E3%81%8C%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%9F%E6%99%82%E3%81%AE%E3%82%AD%E3%83%BC%E3%81%AE%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88)
- [Chromebook Crostini (Linux VM) - @//メモ](https://at-sushi.com/pukiwiki/index.php?Chromebook%20Crostini%20%28Linux%20VM%29)

### Signal desktop

```bash
# NOTE: These instructions only work for 64 bit Debian-based
# Linux distributions such as Ubuntu, Mint etc.

# 1. Install our official public software signing key
wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor > signal-desktop-keyring.gpg
cat signal-desktop-keyring.gpg | sudo tee -a /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null

# 2. Add our repository to your list of repositories
echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' |\
  sudo tee -a /etc/apt/sources.list.d/signal-xenial.list

# 3. Update your package database and install signal
sudo apt update && sudo apt install signal-desktop
```

Ref: [Signal >> Download Signal for Linux](https://signal.org/download/linux/)
