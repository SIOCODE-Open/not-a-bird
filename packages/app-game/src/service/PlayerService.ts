import { $playerChangesService } from "./PlayerChangesService";

export interface IPlayerService {
    readonly money: number;
    spendMoney(amount: number, notes?: string): void;
    earnMoney(amount: number, notes?: string): void;
}

class PlayerServiceImpl implements IPlayerService {
    private _money: number = 1000;

    constructor() { }

    public get money(): number {
        return this._money;
    }

    spendMoney(amount: number, notes?: string): void {
        this._money -= amount;
        $playerChangesService.triggerMoneyChanged(this._money);
    }

    earnMoney(amount: number, notes?: string): void {
        this._money += amount;
        $playerChangesService.triggerMoneyChanged(this._money);
    }
}

export const $playerService = new PlayerServiceImpl();
