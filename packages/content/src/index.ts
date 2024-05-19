import { IItem, IRecipe } from "@not-a-bird/model";

/** Begin generated content items */
export const CONTENT_ITEM_MONKEY: IItem = {
    "name": "Monkey",
    "description": "We need a description here"
};
export const CONTENT_ITEM_GIRAFFE: IItem = {
    "name": "Giraffe",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BEE: IItem = {
    "name": "Bee",
    "description": "We need a description here"
};
export const CONTENT_ITEM_COIN: IItem = {
    "name": "Coin",
    "description": "We need a description here"
};
export const CONTENT_ITEM_SWARM: IItem = {
    "name": "SWARM",
    "description": "We need a description here"
};
export const CONTENT_ITEM_HYDRA: IItem = {
    "name": "Hydra",
    "description": "We need a description here"
};
export const CONTENT_ITEM_MONKEY_BRANCH: IItem = {
    "name": "MonkeyBranch",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BRIDGE: IItem = {
    "name": "Bridge",
    "description": "We need a description here"
};
export const CONTENT_ITEM_GOLDEN_GATE: IItem = {
    "name": "GoldenGate",
    "description": "We need a description here"
};
export const CONTENT_ITEM_GOLD: IItem = {
    "name": "Gold",
    "description": "We need a description here"
};
export const CONTENT_ITEM_SILVER: IItem = {
    "name": "Silver",
    "description": "We need a description here"
};
export const CONTENT_ITEM_RHODIUM: IItem = {
    "name": "Rhodium",
    "description": "We need a description here"
};
export const CONTENT_ITEM_HIVE: IItem = {
    "name": "Hive",
    "description": "We need a description here"
};
export const CONTENT_ITEM_TRANSACTION: IItem = {
    "name": "Transaction",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BLOCK: IItem = {
    "name": "Block",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BLOCKCHAIN: IItem = {
    "name": "Blockchain",
    "description": "We need a description here"
};
export const CONTENT_ITEM_POLKADOT: IItem = {
    "name": "Polkadot",
    "description": "We need a description here"
};
export const CONTENT_ITEM_PEER_REVIEW: IItem = {
    "name": "PeerReview",
    "description": "We need a description here"
};
export const CONTENT_ITEM_CARDANO: IItem = {
    "name": "Cardano",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BEAR: IItem = {
    "name": "Bear",
    "description": "We need a description here"
};
export const CONTENT_ITEM_BEER: IItem = {
    "name": "Beer",
    "description": "We need a description here"
};
export const CONTENT_ITEM_LOCK: IItem = {
    "name": "Lock",
    "description": "We need a description here"
};
export const CONTENT_ITEM_MARMALADE: IItem = {
    "name": "Marmalade",
    "description": "We need a description here"
};
export const CONTENT_ITEM_SUPER_MARMALADE: IItem = {
    "name": "SuperMarmalade",
    "description": "We need a description here"
};
export const CONTENT_ITEM_HYPER_MARMALADE: IItem = {
    "name": "HyperMarmalade",
    "description": "We need a description here"
};
export const CONTENT_ITEMS: Array<IItem> = [
    CONTENT_ITEM_MONKEY,
    CONTENT_ITEM_GIRAFFE,
    CONTENT_ITEM_BEE,
    CONTENT_ITEM_COIN,
    CONTENT_ITEM_SWARM,
    CONTENT_ITEM_HYDRA,
    CONTENT_ITEM_MONKEY_BRANCH,
    CONTENT_ITEM_BRIDGE,
    CONTENT_ITEM_GOLDEN_GATE,
    CONTENT_ITEM_GOLD,
    CONTENT_ITEM_SILVER,
    CONTENT_ITEM_RHODIUM,
    CONTENT_ITEM_HIVE,
    CONTENT_ITEM_TRANSACTION,
    CONTENT_ITEM_BLOCK,
    CONTENT_ITEM_BLOCKCHAIN,
    CONTENT_ITEM_POLKADOT,
    CONTENT_ITEM_PEER_REVIEW,
    CONTENT_ITEM_CARDANO,
    CONTENT_ITEM_BEAR,
    CONTENT_ITEM_BEER,
    CONTENT_ITEM_LOCK,
    CONTENT_ITEM_MARMALADE,
    CONTENT_ITEM_SUPER_MARMALADE,
    CONTENT_ITEM_HYPER_MARMALADE,
];


export const CONTENT_RECIPE_MAKE_SWARM: IRecipe = {
    a: CONTENT_ITEM_BEE,
    b: CONTENT_ITEM_BEE,
    result: CONTENT_ITEM_SWARM,
};
export const CONTENT_RECIPE_MAKE_HYDRA: IRecipe = {
    a: CONTENT_ITEM_GIRAFFE,
    b: CONTENT_ITEM_GIRAFFE,
    result: CONTENT_ITEM_HYDRA,
};
export const CONTENT_RECIPE_MAKE_MONKEY_BRANCH: IRecipe = {
    a: CONTENT_ITEM_MONKEY,
    b: CONTENT_ITEM_HYDRA,
    result: CONTENT_ITEM_MONKEY_BRANCH,
};
export const CONTENT_RECIPE_MAKE_BRIDGE: IRecipe = {
    a: CONTENT_ITEM_MONKEY_BRANCH,
    b: CONTENT_ITEM_MONKEY_BRANCH,
    result: CONTENT_ITEM_BRIDGE,
};
export const CONTENT_RECIPE_MAKE_GOLDEN_GATE: IRecipe = {
    a: CONTENT_ITEM_COIN,
    b: CONTENT_ITEM_BRIDGE,
    result: CONTENT_ITEM_GOLDEN_GATE,
};
export const CONTENT_RECIPE_MAKE_CARDANO: IRecipe = {
    a: CONTENT_ITEM_BLOCKCHAIN,
    b: CONTENT_ITEM_PEER_REVIEW,
    result: CONTENT_ITEM_CARDANO,
};
export const CONTENT_RECIPE_MAKE_BEER: IRecipe = {
    a: CONTENT_ITEM_BEE,
    b: CONTENT_ITEM_BEAR,
    result: CONTENT_ITEM_BEER,
};
export const CONTENT_RECIPE_MAKE_LOCK: IRecipe = {
    a: CONTENT_ITEM_SILVER,
    b: CONTENT_ITEM_SILVER,
    result: CONTENT_ITEM_LOCK,
};
export const CONTENT_RECIPE_MAKE_SUPER_MARMALADE: IRecipe = {
    a: CONTENT_ITEM_MARMALADE,
    b: CONTENT_ITEM_MARMALADE,
    result: CONTENT_ITEM_SUPER_MARMALADE,
};
export const CONTENT_RECIPE_MAKE_HYPER_MARMALADE: IRecipe = {
    a: CONTENT_ITEM_SUPER_MARMALADE,
    b: CONTENT_ITEM_SUPER_MARMALADE,
    result: CONTENT_ITEM_HYPER_MARMALADE,
};
export const CONTENT_RECIPES: Array<IRecipe> = [
    CONTENT_RECIPE_MAKE_SWARM,
    CONTENT_RECIPE_MAKE_HYDRA,
    CONTENT_RECIPE_MAKE_MONKEY_BRANCH,
    CONTENT_RECIPE_MAKE_BRIDGE,
    CONTENT_RECIPE_MAKE_GOLDEN_GATE,
    CONTENT_RECIPE_MAKE_CARDANO,
    CONTENT_RECIPE_MAKE_BEER,
    CONTENT_RECIPE_MAKE_LOCK,
    CONTENT_RECIPE_MAKE_SUPER_MARMALADE,
    CONTENT_RECIPE_MAKE_HYPER_MARMALADE,
];
/** End generated content items */
