import { IItem } from './IItem';
import { IRecipe } from './IRecipe';
import { IGameContent } from './IGameContent';

export const ITEM_MONKEY: IItem = {
    id: 0,
    name: 'Monkey',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_GIRAFFE: IItem = {
    id: 1,
    name: 'Giraffe',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_BEE: IItem = {
    id: 2,
    name: 'Bee',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_COIN: IItem = {
    id: 3,
    name: 'Coin',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_SWARM: IItem = {
    id: 4,
    name: 'Swarm',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_HYDRA: IItem = {
    id: 5,
    name: 'Hydra',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_MONKEY_BRANCH: IItem = {
    id: 6,
    name: 'Monkey Branch',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_BRIDGE: IItem = {
    id: 7,
    name: 'Bridge',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_GOLDEN_GATE: IItem = {
    id: 8,
    name: 'Golden Gate',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_GOLD: IItem = {
    id: 9,
    name: 'Gold',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_SILVER: IItem = {
    id: 10,
    name: 'Silver',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_RHODIUM: IItem = {
    id: 11,
    name: 'Rhodium',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_HIVE: IItem = {
    id: 12,
    name: 'Hive',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_TRANSACTION: IItem = {
    id: 13,
    name: 'Transaction',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_BLOCK: IItem = {
    id: 14,
    name: 'Block',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_BLOCKCHAIN: IItem = {
    id: 15,
    name: 'Blockchain',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_POLKADOT: IItem = {
    id: 16,
    name: 'Polkadot',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_PEER_REVIEW: IItem = {
    id: 17,
    name: 'Peer Review',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_CARDANO: IItem = {
    id: 18,
    name: 'Cardano',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_BEAR: IItem = {
    id: 19,
    name: 'Bear',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_BEER: IItem = {
    id: 20,
    name: 'Beer',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_LOCK: IItem = {
    id: 21,
    name: 'Lock',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_MARMALADE: IItem = {
    id: 22,
    name: 'Marmalade',
    description: 'We need a description here',
    tier: 1,
};
export const ITEM_SUPER_MARMALADE: IItem = {
    id: 23,
    name: 'Super Marmalade',
    description: 'We need a description here',
    tier: 2,
};
export const ITEM_HYPER_MARMALADE: IItem = {
    id: 24,
    name: 'Hyper Marmalade',
    description: 'We need a description here',
    tier: 2,
};

export const ALL_ITEMS: IItem[] = [
    ITEM_MONKEY,
    ITEM_GIRAFFE,
    ITEM_BEE,
    ITEM_COIN,
    ITEM_SWARM,
    ITEM_HYDRA,
    ITEM_MONKEY_BRANCH,
    ITEM_BRIDGE,
    ITEM_GOLDEN_GATE,
    ITEM_GOLD,
    ITEM_SILVER,
    ITEM_RHODIUM,
    ITEM_HIVE,
    ITEM_TRANSACTION,
    ITEM_BLOCK,
    ITEM_BLOCKCHAIN,
    ITEM_POLKADOT,
    ITEM_PEER_REVIEW,
    ITEM_CARDANO,
    ITEM_BEAR,
    ITEM_BEER,
    ITEM_LOCK,
    ITEM_MARMALADE,
    ITEM_SUPER_MARMALADE,
    ITEM_HYPER_MARMALADE,
];

export const RECIPE_MAKE_SWARM: IRecipe = {
    id: 0,
    a: ITEM_BEE,
    b: ITEM_BEE,
    result: ITEM_SWARM,
};
export const RECIPE_MAKE_HYDRA: IRecipe = {
    id: 1,
    a: ITEM_GIRAFFE,
    b: ITEM_GIRAFFE,
    result: ITEM_HYDRA,
};
export const RECIPE_MAKE_MONKEYBRANCH: IRecipe = {
    id: 2,
    a: ITEM_MONKEY,
    b: ITEM_HYDRA,
    result: ITEM_MONKEY_BRANCH,
};
export const RECIPE_MAKE_BRIDGE: IRecipe = {
    id: 3,
    a: ITEM_MONKEY_BRANCH,
    b: ITEM_MONKEY_BRANCH,
    result: ITEM_BRIDGE,
};
export const RECIPE_MAKE_GOLDENGATE: IRecipe = {
    id: 4,
    a: ITEM_COIN,
    b: ITEM_BRIDGE,
    result: ITEM_GOLDEN_GATE,
};
export const RECIPE_MAKE_CARDANO: IRecipe = {
    id: 5,
    a: ITEM_BLOCKCHAIN,
    b: ITEM_PEER_REVIEW,
    result: ITEM_CARDANO,
};
export const RECIPE_MAKE_BEER: IRecipe = {
    id: 6,
    a: ITEM_BEE,
    b: ITEM_BEAR,
    result: ITEM_BEER,
};
export const RECIPE_MAKE_LOCK: IRecipe = {
    id: 7,
    a: ITEM_SILVER,
    b: ITEM_SILVER,
    result: ITEM_LOCK,
};
export const RECIPE_MAKE_SUPERMARMALADE: IRecipe = {
    id: 8,
    a: ITEM_MARMALADE,
    b: ITEM_MARMALADE,
    result: ITEM_SUPER_MARMALADE,
};
export const RECIPE_MAKE_HYPERMARMALADE: IRecipe = {
    id: 9,
    a: ITEM_SUPER_MARMALADE,
    b: ITEM_SUPER_MARMALADE,
    result: ITEM_HYPER_MARMALADE,
};

export const ALL_RECIPES: IRecipe[] = [
    RECIPE_MAKE_SWARM,
    RECIPE_MAKE_HYDRA,
    RECIPE_MAKE_MONKEYBRANCH,
    RECIPE_MAKE_BRIDGE,
    RECIPE_MAKE_GOLDENGATE,
    RECIPE_MAKE_CARDANO,
    RECIPE_MAKE_BEER,
    RECIPE_MAKE_LOCK,
    RECIPE_MAKE_SUPERMARMALADE,
    RECIPE_MAKE_HYPERMARMALADE,
];

export const GAME_UNIFIERS_ITEMS: Array<IItem> = [
    ITEM_MONKEY,
    ITEM_GIRAFFE,
    ITEM_BEE,
    ITEM_COIN,
    ITEM_SWARM,
    ITEM_HYDRA,
    ITEM_MONKEY_BRANCH,
    ITEM_BRIDGE,
    ITEM_GOLDEN_GATE,
    ITEM_GOLD,
    ITEM_SILVER,
    ITEM_RHODIUM,
    ITEM_HIVE,
    ITEM_TRANSACTION,
    ITEM_BLOCK,
    ITEM_BLOCKCHAIN,
    ITEM_POLKADOT,
    ITEM_PEER_REVIEW,
    ITEM_CARDANO,
    ITEM_BEAR,
    ITEM_BEER,
    ITEM_LOCK,
    ITEM_MARMALADE,
    ITEM_SUPER_MARMALADE,
    ITEM_HYPER_MARMALADE,
];
export const GAME_UNIFIERS_RECIPES: Array<IRecipe> = [
    RECIPE_MAKE_SWARM,
    RECIPE_MAKE_HYDRA,
    RECIPE_MAKE_MONKEYBRANCH,
    RECIPE_MAKE_BRIDGE,
    RECIPE_MAKE_GOLDENGATE,
    RECIPE_MAKE_CARDANO,
    RECIPE_MAKE_BEER,
    RECIPE_MAKE_LOCK,
    RECIPE_MAKE_SUPERMARMALADE,
    RECIPE_MAKE_HYPERMARMALADE,
];
export const GAME_UNIFIERS: IGameContent = {
    name: "Unifiers",
    description: "A game created with the help of the Unifiers group",
    items: GAME_UNIFIERS_ITEMS,
    recipes: GAME_UNIFIERS_RECIPES,
};
export const ALL_GAMES: Array<IGameContent> = [
    GAME_UNIFIERS,
];