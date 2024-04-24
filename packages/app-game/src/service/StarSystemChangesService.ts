import { Observable, Subject } from "rxjs";

export type StarSystemSelectedPlanetCoordinatesChangedObservable = Observable<[number, number, number, number]>;

export interface IStarSystemChangesService {
    readonly selectedPlanetCoordinatesChanged: StarSystemSelectedPlanetCoordinatesChangedObservable;
    triggerSelectedPlanetCoordinatesChanged(newCoordinates: [number, number, number, number]);
}

class StarSystemChangesServiceImpl implements IStarSystemChangesService {
    private _selectedPlanetCoordinatesChangedSubject: Subject<[number, number, number, number]> = new Subject<[number, number, number, number]>();

    constructor() {

    }

    public get selectedPlanetCoordinatesChanged(): StarSystemSelectedPlanetCoordinatesChangedObservable {
        return this._selectedPlanetCoordinatesChangedSubject.asObservable();
    }

    triggerSelectedPlanetCoordinatesChanged(newCoordinates: [number, number, number, number]) {
        this._selectedPlanetCoordinatesChangedSubject.next(newCoordinates);
    }
}

export const $starSystemChangesService = new StarSystemChangesServiceImpl();
