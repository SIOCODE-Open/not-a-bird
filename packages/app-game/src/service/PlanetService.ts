import { IPlanet } from "@not-a-bird/model";
import { generatePlanet } from "@not-a-bird/planet-generator";

export interface IPlanetService {
    getPlanet(x: number, y: number, nSystem: number, nPlanet: number): IPlanet;
    selectedPlanetCoordinates: [number, number, number, number];
}

class PlanetServiceImpl implements IPlanetService {
    private _selectedPlanetCoordinates: [number, number, number, number] = [0, 0, 0, 0];

    constructor() { }

    public get selectedPlanetCoordinates(): [number, number, number, number] {
        return this._selectedPlanetCoordinates;
    }

    public set selectedPlanetCoordinates(value: [number, number, number, number]) {
        this._selectedPlanetCoordinates = value;
    }

    getPlanet(x: number, y: number, nSystem: number, nPlanet: number): IPlanet {
        return generatePlanet(x, y, nSystem, nPlanet);
    }
}

export const $planetService = new PlanetServiceImpl();
