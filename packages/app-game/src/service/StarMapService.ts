import { ISpaceRegion, IStarSystem } from "@not-a-bird/model";
import { generateRegion } from "@not-a-bird/region-generator";

export interface IStarMapService {
  getRegion(x: number, y: number): ISpaceRegion;
  selectedStarSystemCoordinates: [number, number, number];
}

class StarMapServiceImpl implements IStarMapService {
  private _selectedStarSystemCoordinates: [number, number, number] = [0, 0, 0];

  constructor() { }

  public get selectedStarSystemCoordinates(): [number, number, number] {
    return this._selectedStarSystemCoordinates;
  }

  public set selectedStarSystemCoordinates(value: [number, number, number]) {
    this._selectedStarSystemCoordinates = value;
  }

  getRegion(x: number, y: number): ISpaceRegion {
    return generateRegion(x, y);
  }
}

export const $starMapService = new StarMapServiceImpl();
