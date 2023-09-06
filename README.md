# Auth0 by Okta - DevDay Arcade Games

Custom Pacman and Space Invader games for Auth0 DevDay experience at Oktane 2023.

The game is written in JavaScript and packaged as an [Electron](https://www.electronjs.org/) desktop app.

## Building and publishing the game binaries

There is a GitHub action workflow (`.github/workflows/build.yml`) that builds and publishes binaries for Raspberry Pi, Windows, Linux and macOS. In order to trigger a new build a new tag needs to be pushed.

1. Update the `package.json` and bump the `version`. For example `3.0.0`
2. Create a tag `git tag v3.0.0`
3. Push the tags `git push && git push --tags` this will trigger the build and create a new release
4. Go to [release](https://github.com/oktadev/devdays-arcade-games/releases) and find the draft release. Edit and publish.

## Installing and running the game binaries

### Raspberry PI 4

1. Download the `DevDay-Arcade-Games-x.x.x-arm64.AppImage` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Raspberry PI. Make sure to download the `arm64` version.
2. Run `chmod +x DevDay-Arcade-Games-x.x.x-arm64.AppImage`
3. Install FUSE: `sudo apt-get install libfuse2`
4. Run with `./DevDay-Arcade-Games-x.x.x-arm64.AppImage`

### Windows

1. Download the `DevDay-Arcade-Games-Setup-x.x.x.exe` file from the latest [release](https://github.com/oktadev/devdays-arcade-games/releases) to the Windows machine.
2. Run the downloaded file

## Local development setup

1. Install JS dependencies and run the app locally

```
npm install
npm start
```

Builds can be created locally. But keep in mind that you can only build for the OS you are using. For example, you cannot build for Raspberry Pi from macOS and vise versa.

### Controls

For the joystick and buttons keycode mapping needs to be done in 3 places.

1. **Welcome screen**: In `src/ui/script.js` change key values
   1. **Default**: `ArrowLeft` and `ArrowRight` to choose the game and `Enter` to select.
2. **Pacman**: In `src/ui/pacman/pacman.js` change the values for constants (`KEY_CODE_*`) at the start of the file
   1. **Default**: `ArrowLeft`, `ArrowRight`, `ArrowUp` and `ArrowDown` to navigate. `Space` to start game and `Enter` to go back to the welcome screen.
3. **Space invaders**: In `src/ui/space/space.js` change the values for constants (`KEY_CODE_*`) at the start of the file
   1. **Default**: `ArrowUp` and `ArrowDown` to select single or multi player. `ArrowLeft`, `ArrowRight` to navigate. `Space` to fire and `Enter` to go back to the welcome screen.

### Resolution

The game resolution can be changed in following places

- **Pacman**: Update height and width for `#pacman` in `src/ui/pacman/pacman.css`
- **Space Invaders**: Update `CANVAS_WIDTH` & `CANVAS_HEIGHT` in `src/ui/space/space.js`

## Credits

Pacman based on [github.com/daleharvey/pacman](https://github.com/daleharvey/pacman) (WTFPL licensed)
Space Invader based on [github.com/toivjon/html5-space-invaders](https://github.com/toivjon/html5-space-invaders) (MIT licensed)
