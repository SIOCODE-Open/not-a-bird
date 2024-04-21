# Not a bird

Welcome to our submission for the _Polkadot Hackathon Global Series: North America Edition 2024_, **Not a bird**!

This code is very heavily under construction, please check back later!

# Screenshots

_Note to self: Include screenshots of the game here_

# Building

_First of all_, to perform any kind of building or development on the project, please make sure to have the following tools installed:

* Node.JS 20, and latest npm
* Rust
* Rust toolchain for compiling Smart Contracts on Substrate

## Quickly playing

To build **Not a Bird - HTML5 Edition**, and serve it from a local web server, thus allowing you to _quickly start playing the game_, run the following commands:

```bash
$ npm install
$ npm run -w @not-a-bird/app-game serve
```

## HTML5 Edition

To build **Not a Bird - HTML5 Edition**, run the following commands:

```bash
$ npm install
$ npm run -w @not-a-bird/app-game build
```

The game will be available in the `packages/app-game/dist/` directory. You can serve this from a web server to play.

## Electron Edition

_Note to self: this is not implemented yet._

To build **Not a Bird - Electron Edition**, run the following commands:

```bash
$ npm install
$ npm run -w @not-a-bird/electron-game build
```

The game will be available in the `packages/electron-game/dist/` directory. You can run the executable to play.

# Technical Details

_Note to self: Add technical details about the game here_
