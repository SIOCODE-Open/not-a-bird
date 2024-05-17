import { IOnChainGame } from "./IOnChainGame";

const REGISTERED_GAMES = {};

export function registerUsableGame(
    env: 'prod' | 'dev',
    game: IOnChainGame
) {
    REGISTERED_GAMES[env] = game;
}

export function useGame(
    env?: 'prod' | 'dev'
): IOnChainGame {
    const realEnv = env || 'dev';
    return REGISTERED_GAMES[realEnv];
}
