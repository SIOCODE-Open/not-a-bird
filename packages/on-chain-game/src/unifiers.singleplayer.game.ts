import { GAME_UNIFIERS } from '@not-a-bird/model';
import {
    registerUsableGame
} from './use-game';
import {
    createSinglePlayerGame
} from './create-game';

registerUsableGame(
    'unifiers.singleplayer',
    {
        name: 'Unifiers Singleplayer',
        description: 'A game created with the help of the Unifiers group',
        chainInfo: 'Singleplayer, no chain'
    },
    createSinglePlayerGame(GAME_UNIFIERS)
);