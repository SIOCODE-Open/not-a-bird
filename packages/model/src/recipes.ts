import * as items from './items';
import { IRecipe } from './IRecipe';

export const RECIPE_MAKE_SWARM: IRecipe = {
    id: 0,
    a: items.ITEM_BEE,
    b: items.ITEM_BEE,
    result: items.ITEM_SWARM,
};
export const RECIPE_MAKE_HYDRA: IRecipe = {
    id: 1,
    a: items.ITEM_GIRAFFE,
    b: items.ITEM_GIRAFFE,
    result: items.ITEM_HYDRA,
};
export const RECIPE_MAKE_MONKEY_BRANCH: IRecipe = {
    id: 2,
    a: items.ITEM_MONKEY,
    b: items.ITEM_HYDRA,
    result: items.ITEM_MONKEY_BRANCH,
};
export const RECIPE_MAKE_BRIDGE: IRecipe = {
    id: 3,
    a: items.ITEM_MONKEY_BRANCH,
    b: items.ITEM_MONKEY_BRANCH,
    result: items.ITEM_BRIDGE,
};
export const RECIPE_MAKE_GOLDEN_GATE: IRecipe = {
    id: 4,
    a: items.ITEM_COIN,
    b: items.ITEM_BRIDGE,
    result: items.ITEM_GOLDEN_GATE,
};
export const RECIPE_MAKE_CARDANO: IRecipe = {
    id: 5,
    a: items.ITEM_BLOCKCHAIN,
    b: items.ITEM_PEER_REVIEW,
    result: items.ITEM_CARDANO,
};
export const RECIPE_MAKE_BEER: IRecipe = {
    id: 6,
    a: items.ITEM_BEE,
    b: items.ITEM_BEAR,
    result: items.ITEM_BEER,
};
export const RECIPE_MAKE_LOCK: IRecipe = {
    id: 7,
    a: items.ITEM_SILVER,
    b: items.ITEM_SILVER,
    result: items.ITEM_LOCK,
};
export const RECIPE_MAKE_SUPER_MARMALADE: IRecipe = {
    id: 8,
    a: items.ITEM_MARMALADE,
    b: items.ITEM_MARMALADE,
    result: items.ITEM_SUPER_MARMALADE,
};
export const RECIPE_MAKE_HYPER_MARMALADE: IRecipe = {
    id: 9,
    a: items.ITEM_SUPER_MARMALADE,
    b: items.ITEM_SUPER_MARMALADE,
    result: items.ITEM_HYPER_MARMALADE,
};

export const ALL_RECIPES: IRecipe[] = [
    RECIPE_MAKE_SWARM,
    RECIPE_MAKE_HYDRA,
    RECIPE_MAKE_MONKEY_BRANCH,
    RECIPE_MAKE_BRIDGE,
    RECIPE_MAKE_GOLDEN_GATE,
    RECIPE_MAKE_CARDANO,
    RECIPE_MAKE_BEER,
    RECIPE_MAKE_LOCK,
    RECIPE_MAKE_SUPER_MARMALADE,
    RECIPE_MAKE_HYPER_MARMALADE,
];