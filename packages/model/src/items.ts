import { IItem } from './IItem';

export const ITEM_WATER: IItem = {
    id: 0,
    name: 'Water',
    description: 'Water is a liquid with formula H~2~O',
    tier: 1,
};
export const ITEM_FIRE: IItem = {
    id: 1,
    name: 'Fire',
    description: 'Fire is a chemical reaction that releases heat and light',
    tier: 1,
};
export const ITEM_EARTH: IItem = {
    id: 2,
    name: 'Earth',
    description: 'Earth is the solid material that makes up the surface of the planet',
    tier: 1,
};
export const ITEM_AIR: IItem = {
    id: 3,
    name: 'Air',
    description: 'Air is a mixture of gases that make up the atmosphere',
    tier: 1,
};
export const ITEM_STEAM: IItem = {
    id: 4,
    name: 'Steam',
    description: 'Steam is the gaseous form of water with formula H~2~O',
    tier: 2,
};
export const ITEM_LAVA: IItem = {
    id: 5,
    name: 'Lava',
    description: 'Lava is molten rock that flows from a volcano',
    tier: 2,
};

export const ALL_ITEMS: IItem[] = [
    ITEM_WATER,
    ITEM_FIRE,
    ITEM_EARTH,
    ITEM_AIR,
    ITEM_STEAM,
    ITEM_LAVA,
];