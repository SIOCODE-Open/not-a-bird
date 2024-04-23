export type PlanetType = 'M' | 'T' | 'R' | 'H' | 'O' | 'A' | 'G' | 'I';
export type ItemType = 'material' | 'tool' | 'building';

export interface IItem {
    name: string;
    type: ItemType;
    description: string;
    marketValue: number;
}

export interface IInventorySlot {
    coordinates: [number, number, number, number, number];
    item?: IItem;
    quantity: number;
}

export interface IPlanet {
    coordinates: [number, number, number, number];
    name: string;
    type: PlanetType;
    size: number;
}

export interface IStarSystem {
    coordinates: [number, number, number];
    name: string;
    numPlanets: number;
}

export interface ISpaceRegion {
    coordinates: [number, number];
    name: string;
    numStarSystems: number;
}
