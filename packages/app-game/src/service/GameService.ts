import { IOnChainGame } from '@not-a-bird/model';
import { ILoadableGame, getUsableGames, useGame } from '@not-a-bird/on-chain-game';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IGameService {
    availableGames: Observable<Array<ILoadableGame>>;
    currentGame: Observable<IOnChainGame>;
    isLoading: Observable<boolean>;
    loadGame(gameId: string): Promise<void>;
}

class GameServiceImpl implements IGameService {

    private _availableGames: BehaviorSubject<Array<ILoadableGame>> = new BehaviorSubject([]);
    private _currentGame: BehaviorSubject<IOnChainGame> = new BehaviorSubject(null);
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
        this._availableGames.next(
            getUsableGames()
        );
    }

    get availableGames(): Observable<Array<ILoadableGame>> {
        return this._availableGames.asObservable();
    }

    get currentGame(): Observable<IOnChainGame> {
        return this._currentGame.asObservable();
    }

    get isLoading(): Observable<boolean> {
        return this._isLoading.asObservable();
    }

    async loadGame(gameId: string) {
        this._isLoading.next(true);
        const newGame = await useGame(gameId);
        this._currentGame.next(newGame);
        this._isLoading.next(false);
    }

}

export const $gameService = new GameServiceImpl();
