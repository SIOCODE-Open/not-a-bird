import { IStarSystem } from "@not-a-bird/model";
import { generateStarSystem } from "@not-a-bird/star-system-generator";

export interface IStarSystemService {
  getStarSystem(x: number, y: number, n: number): IStarSystem;
  selectedPlanetCoordinates: [number, number, number, number];
}

class StarSystemServiceImpl implements IStarSystemService {
  private _selectedPlanetCoordinates: [number, number, number, number] = [
    0, 0, 0, 0,
  ];

  constructor() {}

  public get selectedPlanetCoordinates(): [number, number, number, number] {
    return this._selectedPlanetCoordinates;
  }

  public set selectedPlanetCoordinates(
    value: [number, number, number, number],
  ) {
    this._selectedPlanetCoordinates = value;
  }

  getStarSystem(x: number, y: number, n: number): IStarSystem {
    return generateStarSystem(x, y, n);
  }
}

export const $starSystemService = new StarSystemServiceImpl();
