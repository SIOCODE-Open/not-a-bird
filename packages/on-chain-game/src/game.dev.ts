import { IOnChainGame } from './IOnChainGame';
import {
    registerUsableGame
} from './use-game';
import {
    createGame,
    createNonDeployedGame
} from './create-game';

export const $GAME_DEV: IOnChainGame = createNonDeployedGame();

registerUsableGame('dev', $GAME_DEV);
