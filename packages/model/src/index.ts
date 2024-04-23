export type PlanetType = 'M' | 'T' | 'R' | 'H' | 'O' | 'A' | 'G' | 'I';
export type ItemType = 'material' | 'tool' | 'building';

export interface IItem {
    name: string;
    type: ItemType;
    description: string;
    marketValue: number;
}

export interface IInventorySlot {
    item?: IItem;
    quantity: number;
}

export interface IPlanet {
    name: string;
    type: PlanetType;
    size: number;
    inventorySlots: Array<IInventorySlot>;
}

export interface IGeneratedPlanet {
    name: string;
    type: PlanetType;
    size: number;
    numInventorySlots: number;
}

export interface IStarSystem {
    coordinates: [number, number, number];
    name: string;
    planets: Array<IPlanet>;
}

export interface IGeneratedStarSystem {
    coordinates: [number, number, number];
    name: string;
    numPlanets: number;
}

export interface ISpaceRegion {
    coordinates: [number, number];
    name: string;
    starSystems: Array<IStarSystem>;
}

export interface IGeneratedSpaceRegion {
    coordinates: [number, number];
    name: string;
    numStarSystems: number;
}
