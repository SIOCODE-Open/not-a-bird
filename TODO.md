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
- [x] Add an items wiki page (see [`packages/app-game/src/pages/ItemsWikiPage.tsx`](packages/app-game/src/pages/ItemsWikiPage.tsx))
- [x] Game page should have a FAB for the items wiki
- [ ] Add an item details wiki page
- [x] A stacked layout component for position: absolute layers (see [`packages/app-game/src/layout/StackedLayout.tsx`](packages/app-game/src/layout/StackedLayout.tsx), [`packages/app-game/src/style/_stacked.scss`](packages/app-game/src/style/_stacked.scss))
- [x] A horizontal layout component for equally sized column layout (see [`packages/app-game/src/layout/HorizontalLayout.tsx`](packages/app-game/src/layout/HorizontalLayout.tsx), [`packages/app-game/src/style/_horizontal.scss`](packages/app-game/src/style/_horizontal.scss))

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

<details>
  <summary>Clock</summary>

| Note                | ClockIn                          | ClockOut                         | Total |
| :------------------ | :------------------------------- | :------------------------------- | :---- |
| Add Frank Page      | Mon Apr 22 05:00:00 PM CEST 2024 | Mon Apr 22 05:50:00 PM CEST 2024 | 0:50  |
| Do Figma Base       | Mon Apr 22 07:10:00 PM CEST 2024 | Mon Apr 22 08:30:00 PM CEST 2024 | 1:20  |
| Do Figma Base       | Mon Apr 22 08:35:00 PM CEST 2024 | Mon Apr 22 09:30:00 PM CEST 2024 | 0:55  |
| Landing Page        | Tue Apr 23 08:10:00 AM CEST 2024 | Tue Apr 23 09:15:00 AM CEST 2024 | 1:05  |
| Landing Page        | Tue Apr 23 09:30:00 AM CEST 2024 | Tue Apr 23 10:10:00 AM CEST 2024 | 0:40  |
| SetUp Ink           | Tue Apr 23 11:40:00 AM CEST 2024 | Tue Apr 23 12:15:00 PM CEST 2024 | 0:35  |
| Write Script        | Wed Apr 24 07:30:00 AM CEST 2024 | Wed Apr 24 10:00:00 AM CEST 2024 | 0:30  |
| Write Script        | Wed Apr 24 10:55:00 AM CEST 2024 | Wed Apr 24 11:35:00 AM CEST 2024 | 0:40  |
| Write Script        | Wed Apr 24 11:50:00 AM CEST 2024 | Wed Apr 24 12:35:00 PM CEST 2024 | 0:45  |
| Merge Logic         | Thu Apr 25 07:20:00 AM CEST 2024 | Thu Apr 25 08:20:00 AM CEST 2024 | 1:00  |
| Merge Logic         | Thu Apr 25 08:25:00 AM CEST 2024 | Thu Apr 25 09:30:00 AM CEST 2024 | 1:05  |
| Merge Logic         | Thu Apr 25 09:40:00 AM CEST 2024 | Thu Apr 25 10:10:00 AM CEST 2024 | 0:30  |
| Merge Logic         | Thu Apr 25 11:10:00 AM CEST 2024 | Thu Apr 25 12:30:00 AM CEST 2024 | 1:20  |
| Bit Frontend        | Thu Apr 25 12:40:00 PM CEST 2024 | Thu Apr 25 01:25:00 PM CEST 2024 | 1:45  |
| Bit Frontend        | Thu Apr 25 04:10:00 PM CEST 2024 | Thu Apr 25 05:20:00 PM CEST 2024 | 1:10  |
| Bit Frontend        | Thu Apr 25 04:30:00 PM CEST 2024 | Thu Apr 25 04:50:00 PM CEST 2024 | 0:20  |
| Fix Bug Frontend    | Fri Apr 26 09:30:00 AM CEST 2024 | Fri Apr 26 10:00:00 AM CEST 2024 | 0:30  |
| Fix Bug Frontend    | Fri Apr 26 10:20:00 AM CEST 2024 | Fri Apr 26 11:50:00 AM CEST 2024 | 1:30  |
| Fix Bug Frontend    | Fri Apr 26 12:00:00 AM CEST 2024 | Fri Apr 26 12:55:00 AM CEST 2024 | 0:55  |
| Fix Bug Frontend    | Sat Apr 27 08:00:00 AM CEST 2024 | Sat Apr 27 08:50:00 AM CEST 2024 | 0:50  |
| Fix Bug Frontend    | Sat Apr 27 09:00:00 AM CEST 2024 | Sat Apr 27 09:50:00 AM CEST 2024 | 0:50  |
| Record the glory    | Sat Apr 27 09:55:00 AM CEST 2024 | Sat Apr 27 10:20:00 AM CEST 2024 | 0:25  |
| Align Fro & Cro     | Sun Apr 28 08:50:29 AM CEST 2024 | Sun Apr 28 09:10:00 AM CEST 2024 | 0:20  |
| Align Fro & Cro     | Sun Apr 28 09:15:29 AM CEST 2024 | Sun Apr 28 09:50:00 AM CEST 2024 | 0:35  |
| Create Helper       | Sun Apr 28 09:55:00 AM CEST 2024 | Sun Apr 28 10:45:00 AM CEST 2024 | 0:50  |
| Align Fro & Cro     | Sun Apr 28 10:45:00 AM CEST 2024 | Sun Apr 28 11:20:00 AM CEST 2024 | 0:35  |
| Think & WriteDraft  | Sun Apr 28 11:25:00 AM CEST 2024 | Sun Apr 28 12:40:00 PM CEST 2024 | 1:15  |
| Write a helper      | Sun Apr 28 02:30:00 PM CEST 2024 | Sun Apr 28 03:30:00 PM CEST 2024 | 1:00  |
| Finish helper       | Sun Apr 28 06:20:00 PM CEST 2024 | Sun Apr 28 06:35:00 PM CEST 2024 | 0:15  |
| Write DataBlobs     | Sun Apr 28 06:40:00 PM CEST 2024 | Sun Apr 28 06:55:00 PM CEST 2024 | 0:15  |
| Create Interface    | Mon Apr 29 07:55:00 AM CEST 2024 | Mon Apr 29 08:55:00 AM CEST 2024 | 1:00  |
| Create ElementStore | Mon Apr 29 09:30:00 AM CEST 2024 | Mon Apr 29 10:18:00 AM CEST 2024 | 0:48  |
| Create ElementStore | Mon Apr 29 10:39:25 AM CEST 2024 | Mon Apr 29 11:19:19 AM CEST 2024 | 0:40  |
| Create ElementStore | Mon Apr 29 11:33:18 AM CEST 2024 | Mon Apr 29 11:58:44 AM CEST 2024 | 0:25  |
| Create ElementStore | Mon Apr 29 12:08:00 PM CEST 2024 | Mon Apr 29 12:28:00 PM CEST 2024 | 0:20  |
| Create ElementStore | Mon Apr 29 01:22:23 PM CEST 2024 | Mon Apr 29 01:49:27 PM CEST 2024 | 0:27  |
| Create ElementStore | Mon Apr 29 08:29:43 PM CEST 2024 | Mon Apr 29 09:20:54 PM CEST 2024 | 0:51  |
| Create ElementStore | Tue Apr 30 07:41:31 AM CEST 2024 | Tue Apr 30 08:20:58 AM CEST 2024 | 0:39  |
| Create ElementStore | Tue Apr 30 09:05:18 AM CEST 2024 | Tue Apr 30 09:28:43 AM CEST 2024 | 0:23  |
| Create ElementStore | Tue Apr 30 09:40:42 AM CEST 2024 | Tue Apr 30 10:13:32 AM CEST 2024 | 0:33  |
| Update Botond       | Tue Apr 30 10:18:42 AM CEST 2024 | Tue Apr 30 10:43:58 AM CEST 2024 | 0:25  |
| Create ElementStore | Tue Apr 30 10:51:06 AM CEST 2024 | Tue Apr 30 11:01:18 AM CEST 2024 | 0:10  |
| Create ElementStore | Tue Apr 30 08:17:00 PM CEST 2024 | Tue Apr 30 08:25:50 PM CEST 2024 | 0:08  |
| Create ElementStore | Wed May 1 07:27:44 AM CEST 2024  | Wed May 1 08:06:16 AM CEST 2024  | 0:39  |
| Create ElementStore | Wed May 1 08:20:55 AM CEST 2024  | Wed May 1 08:42:34 AM CEST 2024  | 0:22  |
| Create ElementStore | Wed May 1 11:32:15 AM CEST 2024  | Wed May 1 12:49:56 PM CEST 2024  | 1:17  |
| Create ElementStore | Wed May 1 04:23:57 PM CEST 2024  | Wed May 1 05:10:28 PM CEST 2024  | 0:47  |
| Create ElementStore | Thu May 2 07:52:23 AM CEST 2024  | Thu May 2 08:35:27 AM CEST 2024  | 0:43  |
| Create ElementStore | Thu May 2 08:40:45 AM CEST 2024  | Thu May 2 09:57:46 AM CEST 2024  | 1:17  |
| Call with Unique    | Thu May 2 09:59:29 AM CEST 2024  | Thu May 2 11:00:00 AM CEST 2024  | 1:01  |
| Write notes         | Thu May 2 11:05:00 AM CEST 2024  | Thu May 2 11:28:57 AM CEST 2024  | 0:23  |
| Create ElementStore | Fri May 3 06:44:19 AM CEST 2024  | Fri May 3 07:41:06 AM CEST 2024  | 0:57  |
| Create ElementStore | Fri May 3 07:47:39 AM CEST 2024  | Fri May 3 08:22:14 AM CEST 2024  | 0:35  |
| Create ElementStore | Fri May 3 09:01:56 AM CEST 2024  | Fri May 3 10:12:38 AM CEST 2024  | 1:11  |
| Create ElementStore | Fri May 3 10:30:04 AM CEST 2024  | Fri May 3 11:00:00 AM CEST 2024  | 0:30  |
| Create ElementStore | Fri May 3 03:40:21 PM CEST 2024  | Fri May 3 04:23:59 PM CEST 2024  | 0:43  |
| Create ElementStore | Fri May 3 04:37:31 PM CEST 2024  | Fri May 3 05:03:58 PM CEST 2024  | 0:26  |
| Create ElementStore | Sat May 4 08:10:08 AM CEST 2024  | Sat May 4 08:36:00 AM CEST 2024  | 0:26  |
| Create ElementStore | Sat May 4 09:15:33 AM CEST 2024  | Sat May 4 09:56:27 AM CEST 2024  | 0:41  |
| Mark Session        | Sat May 4 10:10:33 AM CEST 2024  | Sat May 4 12:01:27 AM CEST 2024  | 1:51  |
| Create ElementStore | Sat May 4 12:20:00 PM CEST 2024  | Sat May 4 01:10:00 PM CEST 2024  | 0:50  |
| Create ElementStore | Sat May 4 01:18:41 PM CEST 2024  | Sat May 4 01:48:20 PM CEST 2024  | 0:30  |
| Clean up & Frontend | Sat May 4 01:50:00 PM CEST 2024  | Sat May 4 03:30:00 PM CEST 2024  | 1:40  |
| Frontend            | Sat May 4 04:00:20 PM CEST 2024  | Sat May 4 04:30:00 PM CEST 2024  | 0:30  |
| Total               | -                                | -                                | 48:35 |
| Frontend            | Sun May 5 08:54:21 AM CEST 2024  | Sun May 5 09:28:09 AM CEST 2024  | 0:34  |
| Frontend            | Sun May 5 09:34:42 AM CEST 2024  | Sun May 5 11:00:37 AM CEST 2024  | 1:26  |
| Frontend            | Sun May 5 11:02:16 AM CEST 2024  | Sun May 5 11:35:38 AM CEST 2024  |       |
| Frontend            | Sun May 5 11:47:48 AM CEST 2024  | Sun May 5 12:20:52 PM CEST 2024  |       |
| Frontend            | Sun May 5 01:00:00 PM CEST 2024  | Sun May 5 03:02:06 PM CEST 2024  |       |
| Frontend            | Mon May 6 08:30:00 AM CEST 2024  | Sun May 5 10:15:00 PM CEST 2024  |       |
| Frontend            | Mon May 6 10:25:00 AM CEST 2024  | Sun May 5 10:45:00 PM CEST 2024  |       |

</details>

- [x] Do one commit
- [x] Add A Frank Page, seperation of Concern
- [x] Do Figma For Landing
  - [x] Set Colorshema
  - [x] Set Fonts
  - [x] Do Landing
  - [x] wait for feedback
- [x] Create PSP34 Base
- [x] Write NodeJS Base
  - [x] Write instantiate.js
  - [x] write get_call.js
  - [x] Write write_call.js
- [x] Iteration till `merge merge boom`
  - [x] modularize it
  - [x] Create stone_nft
  - [x] Create rock_nft
  - [x] Throw them in seperate modules
  - [x] Create conract, which impots boths
  - [x] Create gem_nft
  - [x] Create notes.md of how to manually deploy and interact with gem_creator contract
  - [x] Create create_gem button in FranksPage
    - [x] getRock(x)
    - [x] mintRock(x)
    - [x] getStone(x)
    - [x] mintStone(x)
    - [x] createGem(x)
      - [x] create auto deploy script
      - [x] create helper script in nodesJS
      - [x] apply nodeJs to browser version
- [x] Record this glory 😬
- [x] rename thingies after marcelo session
- [x] adjust contract call
- [x] create helper
- [x] review & think
  - [x] Write simplistic draft, share it
- [x] Write another helper
- [x] Write Data Blobs
  - [x] Ressource
  - [x] Mine
- [x] Create Module franks Interfaces
- [x] add nft_interface to module
- [x] Create a vanilla ElementStore
- [x] Create a List out of it.
  - [x] checkout delegate thingies, use lazyvec?
  - [x] failed ^^, read consience [upgrade](https://use.ink/basics/upgradeable-contracts)
  - [x] do setcodehash
  - [x] do setcodehash with migration
  - [x] do delegation
  - [x] implent delegation correctly
