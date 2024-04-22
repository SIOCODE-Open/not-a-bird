import {
    ISpaceRegion,
    IStarSystem
} from "@not-a-bird/model";

export interface IStarMapService {
    getRegion(x: number, y: number): ISpaceRegion;
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
                    type: "earthlike",
                }
            ]
        }
    }

    getRegion(x: number, y: number): ISpaceRegion {
        return {
            coordinates: [x, y],
            starSystems: [this.dummyStarSystem(x, y)]
        }
    }

}

export const $starMapService = new StarMapServiceImpl();
