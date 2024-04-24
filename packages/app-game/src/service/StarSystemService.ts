import { IStarSystem } from "@not-a-bird/model";
import { generateStarSystem } from "@not-a-bird/star-system-generator";
import { $starMapService } from "./StarMapService";
import { $starSystemChangesService } from "./StarSystemChangesService";

export interface IStarSystemService {
  getStarSystem(x: number, y: number, n: number): IStarSystem;
  readonly selectedPlanetCoordinates: [number, number, number, number];
  selectPlanet(n: number);
}

class StarSystemServiceImpl implements IStarSystemService {
  private _selectedPlanetCoordinates: [number, number, number, number] = [
    0, 0, 0, 0,
  ];

  constructor() { }

  public get selectedPlanetCoordinates(): [number, number, number, number] {
    return this._selectedPlanetCoordinates;
  }

  getStarSystem(x: number, y: number, n: number): IStarSystem {
    return generateStarSystem(x, y, n);
  }

  selectPlanet(n: number) {
    this._selectedPlanetCoordinates = [
      ...$starMapService.selectedStarSystemCoordinates,
      n
    ];
    $starSystemChangesService.triggerSelectedPlanetCoordinatesChanged(
      this._selectedPlanetCoordinates
    );
  }
}

export const $starSystemService = new StarSystemServiceImpl();
