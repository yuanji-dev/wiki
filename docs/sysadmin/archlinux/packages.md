# Packages

## Download a package

```bash
sudo pacman -Syw foobar
```

## Install local package

```bash
sudo pacman -U foobar-2-1-any.pkg.tar.xz
```

## Download AUR repository

```bash
yay -G aur/goldendict-git
```

## Create packages

### Build in a clean chroot

```bash
sudo pacman -S devtools
extra-x86_64-build -- -I ~/packages/foobar/foobar-2-1-any.pkg.tar.xz
```

Ref: [DeveloperWiki:Building in a clean chroot - ArchWiki](https://wiki.archlinux.org/title/DeveloperWiki:Building_in_a_clean_chroot)

### Submit to AUR

```bash
git init
git branch -M master #(1)
git remote add aur ssh://aur@aur.archlinux.org/vale-git.git
makepkg --printsrcinfo > .SRCINFO
git add PKGBUILD .SRCINFO
git commit -m "Initial build for vale-git"
git push aur master
```

1. Push to a branch other than master is restricted.

## Links

- [PKGBUILD - ArchWiki](https://wiki.archlinux.org/title/PKGBUILD)
- [.SRCINFO - ArchWiki](https://wiki.archlinux.org/title/.SRCINFO)
- [AUR submission guidelines - ArchWiki](https://wiki.archlinux.org/title/AUR_submission_guidelines)
- [VCS package guidelines - ArchWiki](https://wiki.archlinux.org/title/VCS_package_guidelines)

<!-- prettier-ignore -->
*[AUR]: Arch User Repository
