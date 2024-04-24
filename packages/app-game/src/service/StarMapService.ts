import { ISpaceRegion, IStarSystem } from "@not-a-bird/model";
import { generateRegion } from "@not-a-bird/region-generator";
import { $starMapChangesService } from "./StarMapChangesService";

export interface IStarMapService {
  getRegion(x: number, y: number): ISpaceRegion;
  readonly regionCoordinates: [number, number];
  readonly selectedStarSystemCoordinates: [number, number, number];
  selectRegion(x: number, y: number): void;
  selectStarSystem(n: number): void;
}

class StarMapServiceImpl implements IStarMapService {
  private _regionCoordinates: [number, number] = [0, 0];
  private _selectedStarSystemCoordinates: [number, number, number] = [0, 0, 0];

  constructor() { }

  public get selectedStarSystemCoordinates(): [number, number, number] {
    return this._selectedStarSystemCoordinates;
  }

  public get regionCoordinates(): [number, number] {
    return this._regionCoordinates;
  }

  getRegion(x: number, y: number): ISpaceRegion {
    return generateRegion(x, y);
  }

  selectRegion(x: number, y: number): void {
    this._regionCoordinates = [x, y];
    $starMapChangesService.triggerRegionCoordinatesChanged(this._regionCoordinates);
  }

  selectStarSystem(n: number): void {
    this._selectedStarSystemCoordinates = [...this._regionCoordinates, n];
    $starMapChangesService.triggerSelectedStarSystemCoordinatesChanged(this._selectedStarSystemCoordinates);
  }
}

export const $starMapService = new StarMapServiceImpl();
