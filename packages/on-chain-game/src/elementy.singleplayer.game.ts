import { GAME_ELEMENTY } from '@not-a-bird/model';
import {
    registerUsableGame
} from './use-game';
import {
    createSinglePlayerGame
} from './create-game';

registerUsableGame(
    'elementy.singleplayer',
    {
        name: 'Elementy Singleplayer',
        description: 'A game in which you combine elements to create new ones.',
        chainInfo: 'Singleplayer, no chain'
    },
    createSinglePlayerGame(GAME_ELEMENTY)
);