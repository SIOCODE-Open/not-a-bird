# Tasks

## ℹ️ Information - All

- See Botond Notes for How to navigate Repo.
- Add Prettier. Do Format via `npm run format` in `./packages/app-game/`

## Frontend

- [ ] An Inventory component, featuring grid of items
- [ ] On inventory slot click, open the _inventory slot menu_
- [ ] Support the _Sell_ action in the inventory slot menu
- [ ] Support drag and dropping items from one slot to another
- [x] A StarMap page, showing one _sector_ of starts (see [`packages/app-game/src/pages/StarMapPage.tsx`](packages/app-game/src/pages/StarMapPage.tsx))
- [x] Player should be able to navigate StarMap between [-127, -127] and [128, 128]
- [ ] Each sector should contain _star systems_, which should contain _planets_, which contain _inventory slots_
- [x] A StarSystem page, showing _planets_ of a _star system_ (see [`packages/app-game/src/pages/StarSystemPage.tsx`](packages/app-game/src/pages/StarSystemPage.tsx))
- [ ] A Planet component, showing details and _inventory slots_ of a _planet_
- [x] The player should choose their _home planet_ at the beginning of the game
- [ ] The player should be able to open the StarMap anytime
- [ ] The player should be able to buy new planets
- [x] A page for the game over screen (see [`packages/app-game/src/pages/GameOverPage.tsx`](packages/app-game/src/pages/GameOverPage.tsx))

## Backend

- [ ] More detailed breakdown of the tasks
- [ ] Packages & architecture for game logic
- [ ] Game logic implementation without blockchain, let's call it `local`
- [ ] Support items such as _materials_ and _buildings_
- [ ] React to drag and drop interactions if possible
- [ ] Game logic implementation with blockchain, let's call it `blockchain`

---

## Notes

### Botond

- Frontend app entrypoint (see [`packages/app-game/src/index.tsx`](packages/app-game/src/index.tsx), [`packages/app-game/public/index.html`](packages/app-game/public/index.html))
- Some kind of simple routing (see [`packages/app-game/src/NotABirdApp.tsx`](packages/app-game/src/NotABirdApp.tsx))
- SCSS for stylesheets (see [`packages/app-game/src/index.scss`](packages/app-game/src/index.scss))
- Package for game assets, such as images, fonts, audio, etc. (see [`packages/assets/package.json`](packages/assets/package.json))
- Game assets should be copied to the frontend app (see [`packages/assets/scripts/copy.js`](packages/assets/scripts/copy.js), [`packages/app-game/package.json`](packages/app-game/package.json))
- Component for completely centered content (see [`packages/app-game/src/layout/CenteredLayout.tsx`](packages/app-game/src/layout/CenteredLayout.tsx))
- A Card component, has some border, and a shadow (see [`packages/app-game/src/components/Card.tsx`](packages/app-game/src/components/Card.tsx))
- A Button component (see [`packages/app-game/src/components/Button.tsx`](packages/app-game/src/components/Button.tsx))
- A landing page screen for starting the game (see [`packages/app-game/src/pages/LandingPage.tsx`](packages/app-game/src/pages/LandingPage.tsx))
- A page for the game itself (see [`packages/app-game/src/pages/GamePage.tsx`](packages/app-game/src/pages/GamePage.tsx))

### Frank

| Note                 | ClockIn                          | ClockOut                         | Total |
| :------------------- | :------------------------------- | :------------------------------- | :---- |
| Add Frank Page       | Mon Apr 22 05:00:00 PM CEST 2024 | Mon Apr 22 05:45:00 PM CEST 2024 | -     |
| Do Figma for Landing | -                                | -                                | -     |

- [x] Do one commit
- [x] Add A Frank Page, seperation of Concern
- [ ] Do Figma For Landing
