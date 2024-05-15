import { IItem, IRecipe } from "@not-a-bird/model";

/** Begin generated content items */
export const CONTENT_ITEM_WATER: IItem = {
    "name": "water",
    "description": "Water is a liquid with formula H~2~O"
};
export const CONTENT_ITEM_FIRE: IItem = {
    "name": "fire",
    "description": "Fire is a chemical reaction that releases heat and light"
};
export const CONTENT_ITEM_EARTH: IItem = {
    "name": "earth",
    "description": "Earth is the solid material that makes up the surface of the planet"
};
export const CONTENT_ITEM_AIR: IItem = {
    "name": "air",
    "description": "Air is a mixture of gases that make up the atmosphere"
};
export const CONTENT_ITEM_STEAM: IItem = {
    "name": "steam",
    "description": "Steam is the gaseous form of water with formula H~2~O"
};
export const CONTENT_ITEM_LAVA: IItem = {
    "name": "lava",
    "description": "Lava is molten rock that flows from a volcano"
};
export const CONTENT_ITEMS: Array<IItem> = [
    CONTENT_ITEM_WATER,
    CONTENT_ITEM_FIRE,
    CONTENT_ITEM_EARTH,
    CONTENT_ITEM_AIR,
    CONTENT_ITEM_STEAM,
    CONTENT_ITEM_LAVA,
];


export const CONTENT_RECIPE_CREATE_STEAM: IRecipe = {
    a: CONTENT_ITEM_WATER,
    b: CONTENT_ITEM_FIRE,
    result: CONTENT_ITEM_STEAM,
};
export const CONTENT_RECIPE_CREATE_LAVA: IRecipe = {
    a: CONTENT_ITEM_EARTH,
    b: CONTENT_ITEM_FIRE,
    result: CONTENT_ITEM_LAVA,
};
export const CONTENT_RECIPES: Array<IRecipe> = [
    CONTENT_RECIPE_CREATE_STEAM,
    CONTENT_RECIPE_CREATE_LAVA,
];
/** End generated content items */
