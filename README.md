# Auth0 by Okta - DevDay Arcade Games

Custom Pacman and Space Invader games for Auth0 DevDay experience at Oktane 2023

The game is written in Javascript and packaged as an [Electron](https://www.electronjs.org/) desktop app

## Installing and running the game

### Windows

1. Download the `DevDay-Arcade-Games-Setup-x.x.x.exe` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Windows machine.
2. Run the downloaded file

### Raspberry PI 4B

1. Download the `DevDay-Arcade-Games-x.x.x-armv7l.AppImage` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Raspberry PI. Make sure to download the `armv7l` version.
2. Run `chmod +x DevDay-Arcade-Games-x.x.x-armv7l.AppImage`
3. Run with `./DevDay-Arcade-Games-x.x.x-armv7l.AppImage`

## Local development setup

1. Install JS dependencies and run the app locally

```
npm install
npm start
```

Access it on [localhost](http://localhost:1420/)

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

## Credits

Pacman based on [github.com/daleharvey/pacman](https://github.com/daleharvey/pacman) (WTFPL licensed)
Space Invader based on [github.com/toivjon/html5-space-invaders](https://github.com/toivjon/html5-space-invaders) (MIT licensed)
