# Arch Linux

## Packages

- [Packages Search - pkgs.org](https://pkgs.org/)
- [Unofficial user repositories - ArchWiki](https://wiki.archlinux.org/title/unofficial_user_repositories)

## GRUB

```ini title="/etc/default/grub"
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet cryptdevice=/dev/nvme0n1p2:cryptroot root=/dev/mapper/cryptroot"
```

```bash
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

### Theme

- [vinceliuice/grub2-themes: Modern Design theme for Grub2](https://github.com/vinceliuice/grub2-themes)

```bash
yay -S grub-theme-tela-color-1080p-git
sudo cp -r /usr/share/grub/themes/tela-color-1080p /boot/grub/themes
sudo vim /etc/default/grub #GRUB_THEME="/boot/grub/themes/tela-color-1080p/theme.txt"
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Btrfs

- Compress existing files [https://wiki.archlinux.org/title/Btrfs#Compression](https://wiki.archlinux.org/title/Btrfs#Compression)

```bash
btrfs filesystem defragment -r -v -czstd /
```

- View compression types and ratios

```bash
compsize -x /
```

## cryptsetup

- Open

```bash
cryptsetup open /dev/sda1 cryptroot
```

- Mount

```bash
mount -t btrfs /dev/mapper/cryptroot /mnt
```

## Dual boot

```bash
timedatectl set-local-rtc 1 --adjust-system-clock

sudo vim /etc/default/grub #GRUB_DISABLE_OS_PROBER=false
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Wayland

### Questions?

- What is Wayland?
- What is XWayland?
- What’s the relation between GNOME and Wayland?
- How is Wayland different from xorg?
- echo $XDG_SESSION_TYPE
- [bash - Real GNOME Wayland session - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/233459/real-gnome-wayland-session)

### Issues

- No iBus in chrome when using wayland
- No iBus in chrome when using Electron Apps
- Notification jump in telegram

### Chrome

```title=".config/chrome-flags.conf"
--enable-features=UseOzonePlatform --ozone-platform=wayland
```

### Telegram

```title=".config/environment.d/envvars.conf"
QT_QPA_PLATFORM=wayland
```

### Clipboard

```
yay -S wl-clipboard
```

- [Clipboard - ArchWiki](https://wiki.archlinux.org/title/clipboard)

## GNOME

- [Projects/GnomeShell/CheatSheet - GNOME Wiki!](https://wiki.gnome.org/Projects/GnomeShell/CheatSheet)
- Alt + F2 => lg
- [linux - How to know whether Wayland or X11 is being used - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/202891/how-to-know-whether-wayland-or-x11-is-being-used/371164#371164)

Software Center Update: - [Design/OS/SoftwareUpdates - GNOME Wiki!](https://wiki.gnome.org/Design/OS/SoftwareUpdates) - [systemd.offline-updates](https://www.freedesktop.org/software/systemd/man/systemd.offline-updates.html)

### Fractional Scaling

```bash
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

Reset:

```bash
gsettings reset org.gnome.mutter experimental-features
```

ref: https://wiki.archlinux.org/title/HiDPI#Fractional_scaling

### RAW Thumbnails

```bash
yay -S raw-thumbnailer
```

```bash title="~/.local/share/thumbnailers/raw.thumbnailer"
[Thumbnailer Entry]
TryExec=/usr/bin/raw-thumbnailer
Exec=/usr/bin/raw-thumbnailer -s %s -o %o -i %i
MimeType=image/x-3fr;image/x-adobe-dng;image/x-arw;image/x-bay;image/x-canon-cr2;image/x-canon-crw;image/x-cap;image/x-cr2;image/x-crw;image/x-dcr;image/x-dcraw;image/x-dcs;image/x-dng;image/x-drf;image/x-eip;image/x-erf;image/x-fff;image/x-fuji-raf;image/x-iiq;image/x-k25;image/x-kdc;image/x-mef;image/x-minolta-mrw;image/x-mos;image/x-mrw;image/x-nef;image/x-nikon-nef;image/x-nrw;image/x-olympus-orf;image/x-orf;image/x-panasonic-raw;image/x-pef;image/x-pentax-pef;image/x-ptx;image/x-pxn;image/x-r3d;image/x-raf;image/x-raw;image/x-rw2;image/x-rwl;image/x-rwz;image/x-sigma-x3f;image/x-sony-arw;image/x-sony-sr2;image/x-sony-srf;image/x-sr2;image/x-srf;image/x-x3f;
```

ref: https://jan.alphadev.net/blog/2018/gnome-raw-thumbnail-generation/

- Image Viewer

  - [Apps/Gthumb - GNOME Wiki!](https://wiki.gnome.org/Apps/Gthumb)
  - [17 alternatives to your default image viewer on Fedora - Fedora Magazine](https://fedoramagazine.org/17-alternatives-to-your-default-image-viewer-on-fedora/)

### Extensions

```bash
sudo pacman -S chrome-gnome-shell
```

- [GNOME Shell integration - Chrome Web Store](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep)
- [Projects/GnomeShellIntegrationForChrome/Installation - GNOME Wiki!](https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome/Installation)
- [NetSpeed - GNOME Shell 拡張機能](https://extensions.gnome.org/extension/104/netspeed/)
  - [Text breaking on fresh install · Issue #131 · hedayaty/NetSpeed](https://github.com/hedayaty/NetSpeed/issues/131#issuecomment-878623312)

### H.264

```bash
sudo pacman -S gst-libav
```

### Input Method

```bash
yay -S fcitx5-im fcitx5-mozc fcitx5-chinese-addons
yay -S gnome-shell-extension-kimpanel-git
```

- [Debian 11 "bullseye" testing で fcitx5 の日本語入力環境を検証する！ 〜Debian 11 ”bullseye” full freeze の段階に入った直後の Debian 11 testing gnome edition を使って Wayland 対応の fcitx5 日本語入力環境を検証！・・](https://www.linux-setting.tokyo/2021/07/debian-11-bullseye-testingfcitx5-debian.html)
- [ja/I18n/Fcitx5 - Debian Wiki](https://wiki.debian.org/ja/I18n/Fcitx5)
- [Fcitx5 - ArchWiki](https://wiki.archlinux.org/title/Fcitx5)
