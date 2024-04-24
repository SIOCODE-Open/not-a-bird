import { Observable, Subject } from "rxjs";

export type StarMapRegionCoordinatesChangedObservable = Observable<[number, number]>;
export type StarMapSelectedStarSystemCoordinatesChangedObservable = Observable<[number, number, number]>;

export interface IStarMapChangesService {
    readonly regionCoordinatesChanged: StarMapRegionCoordinatesChangedObservable;
    triggerRegionCoordinatesChanged(newCoordinates: [number, number]);
    readonly selectedStarSystemCoordinatesChanged: StarMapSelectedStarSystemCoordinatesChangedObservable;
    triggerSelectedStarSystemCoordinatesChanged(newCoordinates: [number, number, number]);
}

class StarMapChangesServiceImpl implements IStarMapChangesService {
    private _starMapRegionCoordinatesChangedSubject: Subject<[number, number]> = new Subject<[number, number]>();
    private _selectedStarSystemCoordinatesChangedSubject: Subject<[number, number, number]> = new Subject<[number, number, number]>();

    constructor() {

    }

    public get regionCoordinatesChanged(): StarMapRegionCoordinatesChangedObservable {
        return this._starMapRegionCoordinatesChangedSubject.asObservable();
    }

    triggerRegionCoordinatesChanged(newCoordinates: [number, number]) {
        this._starMapRegionCoordinatesChangedSubject.next(newCoordinates);
    }

    public get selectedStarSystemCoordinatesChanged(): StarMapSelectedStarSystemCoordinatesChangedObservable {
        return this._selectedStarSystemCoordinatesChangedSubject.asObservable();
    }

    triggerSelectedStarSystemCoordinatesChanged(newCoordinates: [number, number, number]) {
        this._selectedStarSystemCoordinatesChangedSubject.next(newCoordinates);
    }
}

export const $starMapChangesService = new StarMapChangesServiceImpl();
