export interface IPlanet {
    name: string;
    type: 'earthlike';
}

export interface IStarSystem {
    coordinates: [number, number, number];
    name: string;
    planets: Array<IPlanet>;
}

export interface ISpaceRegion {
    coordinates: [number, number];
    starSystems: Array<IStarSystem>;
}
