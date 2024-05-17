import { IOnChainGame } from './IOnChainGame';
import {
    registerUsableGame
} from './use-game';
import {
    createGame,
    createNonDeployedGame
} from './create-game';

export const $GAME_PROD: IOnChainGame = createNonDeployedGame();

registerUsableGame('prod', $GAME_PROD);
