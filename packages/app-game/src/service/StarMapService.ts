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

  private dummyStarSystem(x: number, y: number): IStarSystem {
    return {
      coordinates: [x, y, 0],
      name: "Dummy Star System",
      planets: [
        {
          name: "Dummy Planet",
          type: "M",
          inventorySlots: [
            {
              quantity: 0
            },
            {
              quantity: 0
            },
            {
              quantity: 0
            },
            {
              quantity: 0
            },
          ],
          size: 2
        },
      ],
    };
  }

  getRegion(x: number, y: number): ISpaceRegion {
    const generatedRegion = generateRegion(x, y);
    const starSystems: Array<IStarSystem> = [];

    for (let i = 0; i < generatedRegion.numStarSystems; i++) {
      starSystems.push(this.dummyStarSystem(x, y));
    }

    return {
      coordinates: [x, y],
      name: generatedRegion.name,
      starSystems,
    };
  }
}

export const $starMapService = new StarMapServiceImpl();
