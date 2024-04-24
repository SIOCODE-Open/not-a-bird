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
- [x] There should be a reusable tutorial component (see [`packages/app-game/src/components/Tutorial.tsx`](packages/app-game/src/components/Tutorial.tsx))
- [x] There should be a tutorial for the star map (see [`packages/app-game/src/tutorials/StarMapTutorial.tsx`](packages/app-game/src/tutorials/StarMapTutorial.tsx))
- [x] There should be a tutorial for the star system page (see [`packages/app-game/src/tutorials/StarSystemTutorial.tsx`](packages/app-game/src/tutorials/StarSystemTutorial.tsx))
- [x] There should be a tutorial for the game page (see [`packages/app-game/src/tutorials/GameTutorial.tsx`](packages/app-game/src/tutorials/GameTutorial.tsx))
- [ ] There should be a market page for buying stuff
- [ ] Show the player's current money
- [ ] Show in the game which planet we are currently seeing
- [ ] Show in a star system which planets are owned by the player
- [ ] Show in a space region which star system contains player owned planets
- [ ] Show star systems spread out in the space region
- [ ] When clicking / hovering on a star system, show the star system info panel
- [ ] Show orbits of planets in a star system
- [ ] When clicking / hovering on a planet, show the planet info panel
- [x] Split SCSS utilities from main bundle (see [`packages/app-game/src/style/_utils.scss`](packages/app-game/src/style/_utils.scss))
- [x] Split SCSS tutorial styling from main bundle (see [`packages/app-game/src/style/_tutorial.scss`](packages/app-game/src/style/_tutorial.scss))
- [x] Split SCSS spacing from main bundle (see [`packages/app-game/src/style/_spacing.scss`](packages/app-game/src/style/_spacing.scss))
- [x] Split SCSS flex from main bundle (see [`packages/app-game/src/style/_flex.scss`](packages/app-game/src/style/_flex.scss))
- [x] Split SCSS button from main bundle (see [`packages/app-game/src/style/_button.scss`](packages/app-game/src/style/_button.scss))
- [x] Split SCSS Unbounded font face from main bundle (see [`packages/app-game/src/style/_typography.scss`](packages/app-game/src/style/_typography.scss))
- [ ] Tutorials should only be shown once globally
- [X] Add an items wiki page (see [`packages/app-game/src/pages/ItemsWikiPage.tsx`](packages/app-game/src/pages/ItemsWikiPage.tsx))
- [X] Game page should have a FAB for the items wiki
- [ ] Add an item details wiki page
- [X] A stacked layout component for position: absolute layers (see [`packages/app-game/src/layout/StackedLayout.tsx`](packages/app-game/src/layout/StackedLayout.tsx), [`packages/app-game/src/style/_stacked.scss`](packages/app-game/src/style/_stacked.scss))
- [X] A horizontal layout component for equally sized column layout (see [`packages/app-game/src/layout/HorizontalLayout.tsx`](packages/app-game/src/layout/HorizontalLayout.tsx), [`packages/app-game/src/style/_horizontal.scss`](packages/app-game/src/style/_horizontal.scss))

## Backend

- [ ] More detailed breakdown of the tasks
- [ ] Packages & architecture for game logic
- [ ] Game logic implementation without blockchain, let's call it `local`
- [ ] Support items such as _materials_ and _buildings_
- [ ] React to drag and drop interactions if possible
- [ ] Game logic implementation with blockchain, let's call it `blockchain`
- [x] We need a JS seeded PRNG (see [`packages/seeded-random/package.json`](packages/seeded-random/package.json), [`packages/seeded-random/src/index.ts`](packages/seeded-random/src/index.ts))
- [x] We need a package for the game model interfaces (see [`packages/model/package.json`](packages/model/package.json), [`packages/model/src/index.ts`](packages/model/src/index.ts))
- [x] We need a package for generating space regions (see [`packages/region-generator/package.json`](packages/region-generator/package.json), [`packages/region-generator/src/index.ts`](packages/region-generator/src/index.ts))
- [x] We need a package for generating star systems (see [`packages/star-system-generator/package.json`](packages/star-system-generator/package.json), [`packages/star-system-generator/src/index.ts`](packages/star-system-generator/src/index.ts))
- [x] We need a package for generating planets (see [`packages/planet-generator/package.json`](packages/planet-generator/package.json), [`packages/planet-generator/src/index.ts`](packages/planet-generator/src/index.ts))
- [ ] We need a package for _items_
- [ ] We need a package for _combination recipes_
- [ ] We need a package for _usage recipes_
- [ ] We need a package for _production recipes_

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

| Note           | ClockIn                          | ClockOut                         | Total |
| :------------- | :------------------------------- | :------------------------------- | :---- |
| Add Frank Page | Mon Apr 22 05:00:00 PM CEST 2024 | Mon Apr 22 05:50:00 PM CEST 2024 | 0:50  |
| Do Figma Base  | Mon Apr 22 07:10:00 PM CEST 2024 | Mon Apr 22 08:30:00 PM CEST 2024 | 1:20  |
| Do Figma Base  | Mon Apr 22 08:35:00 PM CEST 2024 | Mon Apr 22 09:30:00 PM CEST 2024 | 0:55  |
| Landing Page   | Tue Apr 23 08:10:00 AM CEST 2024 | Tue Apr 23 09:15:00 AM CEST 2024 | 1:05  |
| Landing Page   | Tue Apr 23 09:30:00 AM CEST 2024 | Tue Apr 23 10:10:00 AM CEST 2024 | 0:40  |
| Total          | -                                | -                                | 4:50  |
| SetUp Ink      | Tue Apr 23 11:40:00 AM CEST 2024 | Tue Apr 23 12:15:00 PM CEST 2024 | -     |
| Write Script   | Wed Apr 24 07:30:00 AM CEST 2024 | Wed Apr 24 10:00:00 AM CEST 2024 |       |
| Write Script   | Wed Apr 24 10:55:00 AM CEST 2024 | Wed Apr 24 11:35:00 AM CEST 2024 |       |

- [x] Do one commit
- [x] Add A Frank Page, seperation of Concern
- [x] Do Figma For Landing
  - [x] Set Colorshema
  - [x] Set Fonts
  - [x] Do Landing
  - [x] wait for feedback
- [ ] Create Smart Contract Base
  - [x] Create PSP34 Base
  - [ ] Write NodeJS Base
    - [x] Write instantiate.js
    - [x] write get_call.js
    - [ ] Write write_call.j0
