# Auth0 by Okta - DevDay Arcade Games

Custom Pacman and Space Invader games for Auth0 DevDay experience at Oktane 2023

The game is written in Javascript and packaged as an [Electron](https://www.electronjs.org/) desktop app

## Installing and running the game

### Raspberry PI 4

1. Download the `DevDay-Arcade-Games-x.x.x-armv7l.AppImage` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Raspberry PI. Make sure to download the `armv7l` version.
2. Run `chmod +x DevDay-Arcade-Games-x.x.x-armv7l.AppImage`
3. Run with `./DevDay-Arcade-Games-x.x.x-armv7l.AppImage`

### Windows

1. Download the `DevDay-Arcade-Games-Setup-x.x.x.exe` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Windows machine.
2. Run the downloaded file

## Local development setup

1. Install JS dependencies and run the app locally

```
npm install
npm start
```

### Controls

For the joystick and buttons keycode mapping needs to be done in 3 places.

1. **Welcome screen**: In `src/ui/script.js` change key values
   1. **Default**: `ArrowLeft` and `ArrowRight` to choose the game and `Enter` to select.
2. **Pacman**: In `src/ui/pacman/pacman.js` change the values for constants (`KEY_CODE_*`) at the start of the file
   1. **Default**: `ArrowLeft`, `ArrowRight`, `ArrowUp` and `ArrowDown` to navigate. Space (` `) to start game and `Enter` to go back to the welcome screen.
3. **Space invaders**: In `src/ui/space/space.js` change the values for constants (`KEY_CODE_*`) at the start of the file
   1. **Default**: `ArrowUp` and `ArrowDown` to select single or multi player. `ArrowLeft`, `ArrowRight` to navigate. Space (` `) to fire and `Enter` to go back to the welcome screen.

### Resolution

The game resolution can be changed in following places

- **Pacman**: Update height and width for `#pacman` in `src/ui/pacman/pacman.css`
- **Space Invaders**: Update `CANVAS_WIDTH` & `CANVAS_HEIGHT` in `src/ui/space/space.js`

## Credits

Pacman based on [github.com/daleharvey/pacman](https://github.com/daleharvey/pacman) (WTFPL licensed)
Space Invader based on [github.com/toivjon/html5-space-invaders](https://github.com/toivjon/html5-space-invaders) (MIT licensed)
