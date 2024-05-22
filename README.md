# Not a Bird

📖 [Click here to read the old readme](./README.old.md)

🚀 Welcome to **Not a Bird**! This repository contains our submission for the _Polkadot Global 2024: North America Edition_.

🔗 _Not a Bird_ is a _blockchain game_, which involved _crafting_, _trading_ and _collectively working towards a goal_ so that players are _rewarded_. This readme contains technical information about the game, such as _how to build it_, and explanation of _some parts of the code_.

👨‍🎓 If you just want to learn about the game, [look at the game documentation here](https://polkadot-global-na-2024-not-a-bird-docs.surge.sh/).

🕹️ If you just want to start playing the game, [click here to open it](https://polkadot-global-na-2024-not-a-bird-docs.surge.sh/).

📽️ To see our presentation (pitched live at _Polkadot Social_ in _Austin, Texas, USA_), [go to this page](https://hackmd.io/@bokovhu/SkNAIVjm0)

# Dependencies

To build and run the game, you need to have the following dependencies installed:

* Node.JS 20 and npm
* Rust
* `substrate-contracts-node`
* `cargo contract`

Here is a quick script, which has been tested on `Ubuntu 22.04`, and sets up the necessary tools for building:

```bash
#!/bin/bash
sudo apt update
sudo apt install build-essential make automake pkg-config curl git unzip zip
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
. "$HOME/.cargo/env"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
rustup component add rust-src
cargo install --force --locked cargo-contract
nvm install 20
```

_Note: you still have to download or build `substrate-contracts-code`, you can get it [from here](https://github.com/paritytech/substrate-contracts-node)_

# Building

Now you can start building the game.

* First you have to clone the source

```bash
git clone https://github.com/SIOCODE-Open/not-a-bird
```

* Enter the repository, and run the following command to install Node.JS dependencies:

```bash
npm install
```

* Now you can build the _backend_ of the game (contracts):

```bash
npm run build:contracts
```

* Now you should start `substrate-contracts-node` locally, so that you can _deploy the contracts_, and _generate the contract data in the contract client libraries_:

```bash
npm run deploy:contracts
```

* Now you can build the game

```bash
npm run build
```

The game will be ready as a _single-page application_ in the `packages/app-game/dist` directory.

You can also run `npm run serve`, which will start the build pipeline in watch mode, and serves the game locally.

# Credits

This submission was created by the following people:

| Name   | Telegram  | Discord   |
| :----- | :-------- | :-------- |
| Botond | -         | tthe1871  |
| Marcel | -         | fishmac   |
| Frank  | frankbevr | frankbevr |
