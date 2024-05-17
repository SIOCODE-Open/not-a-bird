import * as items from './items';
import { IRecipe } from './IRecipe';

export const RECIPE_CREATE_STEAM: IRecipe = {
    id: 0,
    a: items.ITEM_WATER,
    b: items.ITEM_FIRE,
    result: items.ITEM_STEAM,
};
export const RECIPE_CREATE_LAVA: IRecipe = {
    id: 1,
    a: items.ITEM_EARTH,
    b: items.ITEM_FIRE,
    result: items.ITEM_LAVA,
};

export const ALL_RECIPES: IRecipe[] = [
    RECIPE_CREATE_STEAM,
    RECIPE_CREATE_LAVA,
];