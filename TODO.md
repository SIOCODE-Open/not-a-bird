# Tasks

## Frank
- [ ] Do one commit
- [ ] work in progress ... ^^

## Frontend
- [X] Frontend app entrypoint (see [`packages/app-game/src/index.tsx`](packages/app-game/src/index.tsx), [`packages/app-game/public/index.html`](packages/app-game/public/index.html))
- [X] Some kind of simple routing (see [`packages/app-game/src/NotABirdApp.tsx`](packages/app-game/src/NotABirdApp.tsx))
- [X] SCSS for stylesheets (see [`packages/app-game/src/index.scss`](packages/app-game/src/index.scss))
- [X] Package for game assets, such as images, fonts, audio, etc. (see [`packages/assets/package.json`](packages/assets/package.json))
- [X] Game assets should be copied to the frontend app (see [`packages/assets/scripts/copy.js`](packages/assets/scripts/copy.js), [`packages/app-game/package.json`](packages/app-game/package.json))
- [X] Component for completely centered content (see [`packages/app-game/src/layout/CenteredLayout.tsx`](packages/app-game/src/layout/CenteredLayout.tsx))
- [X] A Card component, has some border, and a shadow (see [`packages/app-game/src/components/Card.tsx`](packages/app-game/src/components/Card.tsx))
- [X] A Button component (see [`packages/app-game/src/components/Button.tsx`](packages/app-game/src/components/Button.tsx))
- [X] A landing page screen for starting the game (see [`packages/app-game/src/pages/LandingPage.tsx`](packages/app-game/src/pages/LandingPage.tsx))
- [X] A page for the game itself (see [`packages/app-game/src/pages/GamePage.tsx`](packages/app-game/src/pages/GamePage.tsx))
- [ ] An Inventory component, featuring grid of items
- [ ] On inventory slot click, open the _inventory slot menu_
- [ ] Support the _Sell_ action in the inventory slot menu
- [ ] Support drag and dropping items from one slot to another
- [X] A StarMap component, showing one _sector_ of starts
- [X] Player should be able to navigate StarMap between [-127, -127] and [128, 128]
- [ ] Each sector should contain _star systems_, which should contain _planets_, which contain _inventory slots_
- [X] A StarSystem component, showing _planets_ of a _star system_
- [ ] A Planet component, showing details and _inventory slots_ of a _planet_
- [X] The player should choose their _home planet_ at the beginning of the game
- [ ] The player should be able to open the StarMap anytime
- [ ] The player should be able to buy new planets
- [X] A page for the game over screen

## Backend
- [ ] More detailed breakdown of the tasks
- [ ] Packages & architecture for game logic
- [ ] Game logic implementation without blockchain, let's call it `local`
- [ ] Support items such as _materials_ and _buildings_
- [ ] React to drag and drop interactions if possible
- [ ] Game logic implementation with blockchain, let's call it `blockchain`