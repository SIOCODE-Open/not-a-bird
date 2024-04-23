import { IPlanet } from "@not-a-bird/model";
import { generatePlanet } from "@not-a-bird/planet-generator";

export interface IPlanetService {
    getPlanet(x: number, y: number, nSystem: number, nPlanet: number): IPlanet;
}

class PlanetServiceImpl implements IPlanetService {

    constructor() { }

    getPlanet(x: number, y: number, nSystem: number, nPlanet: number): IPlanet {
        return generatePlanet(x, y, nSystem, nPlanet);
    }
}

export const $planetService = new PlanetServiceImpl();
