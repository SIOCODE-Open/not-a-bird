import { GAME_UNIFIERS } from '@not-a-bird/model';
import {
    registerUsableGame
} from './use-game';
import {
    createSinglePlayerGame
} from './create-game';

registerUsableGame(
    'unifiers.singleplayer',
    createSinglePlayerGame(GAME_UNIFIERS)
);
