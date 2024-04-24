import { Observable, Subject } from "rxjs";

export type PlayerMoneyChangedObservable = Observable<number>;

export interface IPlayerChangesService {
    readonly moneyChanged: PlayerMoneyChangedObservable;
    triggerMoneyChanged(newMoney: number);
}

class PlayerChangesServiceImpl implements IPlayerChangesService {
    private _playerMoneyChangedSubject: Subject<number> = new Subject<number>();

    constructor() {

    }

    public get moneyChanged(): PlayerMoneyChangedObservable {
        return this._playerMoneyChangedSubject.asObservable();
    }

    triggerMoneyChanged(newMoney: number) {
        this._playerMoneyChangedSubject.next(newMoney);
    }
}

export const $playerChangesService = new PlayerChangesServiceImpl();
