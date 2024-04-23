import { IStarSystem } from "@not-a-bird/model";

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

  private dummyStarSystem(x: number, y: number, n: number): IStarSystem {
    return {
      coordinates: [x, y, n],
      name: "Dummy Star System",
      planets: [
        {
          name: "Dummy Planet",
          type: "earthlike",
        },
      ],
    };
  }

  getStarSystem(x: number, y: number, n: number): IStarSystem {
    return this.dummyStarSystem(x, y, n);
  }
}

export const $starSystemService = new StarSystemServiceImpl();
