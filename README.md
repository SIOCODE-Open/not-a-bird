<div align="center">
<img src="https://imgs.search.brave.com/so-uD4sAXbEI46Uod2_37kJfXyvugWVtHiCyfBWNVHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzg2LzQzLzYy/LzM2MF9GXzY4NjQz/NjI5OV9sN3lzbXcz/R0ROYnV5V0h5Q2FT/UHAzcHB3UFZGUE1Z/Si5qcGc" alt="logo" width="120" height="120" />
</div>

<h3 align="center">Magican by not a Bird</h3>
  <p align="center">
  <br />
    <a href="https://magican.surge.sh/">Demo v0.0.1</a>
    ·
    <a href="https://youtu.be/XkQCJIe48-M?si=Dn65WveHu1yoclYP">Youtube</a>
    ·
    <a href="https://github.com/SIOCODE-Open/not-a-bird.git">Repo</a>
  </p>
</div>

Welcome to our submission for the _Polkadot Hackathon Global Series: North America Edition 2024_, **Magican**!

```md
### Hola 👋,

We are Botond, Marcel and Frank.  
Botond and Frank are running validators together.  
Marcel and Frank grew up together, literally 50 meters away.  
Botond is a Game Developer by heart and a Software Architect by profession.  
Marcel is a Designer by heart and a Frontend Developer by Profession.  
Frank is a 3D Artist by heart and a Fullstack Developer by Profession.  
**We are Not a bird.**

Nice to have you here.  
We build on this Hack, a Game.  
**The Game is Magican.**

### Cheers 🌤️
```

First play the inspiration, then read further. [Play Infinite Craft](https://neal.fun/infinite-craft/) or [Play Alchemy](https://littlealchemy.com/)

We introduce ownership to this game mechanic.  
You are owning fire. You are owning earth. You are owning a merged vulcano.

From a market side, we are approaching it an unusual way.
The User Story would be the following:

<details>
  <summary>Click here to read more</summary>
There is Discord.  
Discord has Channels.  
Every Channels has their hidden jokes/sketches/art/... .  
We Gather information from Community.  
Generate the game out of the given information.   
Let people play.

An example:
You install a Discord bot, it ask the community.

1. What are the core elementt?
2. What are other Elements?
3. What are the rules to get these other Elements?

Now we are in Discord.
Discord Channel - Primegean Discord.
The Elements are `Vim`, `Rust`, `Cows`.
If you combine `Vim` and `Cows`, you gets `Matrix Cow`.
`Matrix Cow` and `Rust`, creates `crappy cow`.
`crappy cow` and `vim`, gives you `donkey with rollerblades`.
If you combine, combine and combine, then you get `Stinky Feets`.
🤯 🐾 🥳
`Stinky Feet` is THE trophy, because that's what the community appreciates the most.

That's a **fun** example, which illustrates the whole point.

</details>

## Screenshots

![Screenshot](https://i.ibb.co/TYNDW8X/image.png)

## Information

**Track:** Smart Contracts

**Tech Stack:**

- Frontend: Javascript (React, PolkadotJS, UniqueSdk)
- SmartContract: Rust (ink!)

**Challenges:**

- Unique Network

### Encountered Challenges

I forgot the most. We struggled with rust and we had vivid memory on code_hash migration. (still not solved, yet^^)

```
$ git log --oneline --reverse | frankFiltering.sh

  **Utilize AI to generate A bunch of Assets. Property Software, based on a big .toml file. Software is written and owned by Botond.**
  -- f5547b7 Initialized a bunch of stuff, added AI generated assets

  **Getting a Frist Figma Draft out for communication purposes**
  -- 6a7ef01 :zap: (uiux) add design sketch

  **Encountering issues recongized till refSize and proofSize changed**
  -- b3c601c :zap: (contracts) add write_call.js

  **No Issue but Autodeploy scripts are sweet.**
  -- 889fe99 :zap: (app-game) add ink_frank.sh, an auto deploy script

  **Struggleing to get the trait definition right.**
  -- 36a1e1d :zap: (contracts) etablish mod franks_interfaces

  **Getting the ink-example to work. It say migrate. We still don't know how to call it.**
  -- a0318cf :zap: (./TODO.md) setCodeHash check, setCodeHashMigration w.i.p, delegate_code endgoal

  **Here we were super happy. We have an array of contracts. We can switch contracts and delegate mint and burn.**
  -- 26ec1f3 :zap: (contracts) add index to mint && make mint resizable

  **Too Less time for slick frontend**
  -- c0ddb1e :zap: (app-game) intialise MergicanPage
```

## Quickstart

- `cd ~ `
- `git clone https://github.com/SIOCODE-Open/not-a-bird.git `
- `cd not-a-bird`

**Contracts**

- `substrate-contracts-node --dev`
- `./packages/contracts/version_3/deploy_version_3.sh`
- Select option 2
- `cat ./packages/contracts/version_3//deploy_version_3.sh`
- `cat ./packages/contracts/version_3/element_store/lib.rs`
- `cat ./packages/contracts/version_3/element_a/lib.rs`
- `cat ./packages/contracts/version_3/contracts_info.log`

**Frontend**

- `npm i`
- `npm run serve`
- Go to `http://localhost:5000 `

## Contacts

| Name   | Telegram  | Discord   |
| :----- | :-------- | :-------- |
| Botond | -         | tthe1871  |
| Marcel | -         | fishmac   |
| Frank  | frankbevr | frankbevr |

# Botond Notes

* Use the following command to build app contracts: `npm run build:contracts`
