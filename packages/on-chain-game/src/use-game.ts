import { IOnChainGame } from "@not-a-bird/model";
import { ILoadableGame } from "./ILoadableGame";
import { ILoadableGameMetadata } from "./ILoadableGameMetadata";

const REGISTERED_GAMES: Record<string, ILoadableGame> = {};

export function registerUsableGame(
    id: string,
    metadata: ILoadableGameMetadata,
    game: IOnChainGame
) {
    REGISTERED_GAMES[id] = {
        id,
        metadata,
        async load() {
            return game;
        }
    };
}

export function registerLazyGame(
    id: string,
    metadata: ILoadableGameMetadata,
    load: () => Promise<IOnChainGame>
) {
    REGISTERED_GAMES[id] = {
        id,
        metadata,
        load
    };
}

export async function useGame(
    id?: string,
): Promise<IOnChainGame> {
    const realId = id ?? 'unifiers.singleplayer';
    const g = REGISTERED_GAMES[realId];
    if (g) {
        return await g.load();
    } else {
        throw new Error(`Game ${realId} not found`)
    }
}

export function getUsableGames(): Array<ILoadableGame> {
    return Object.entries(REGISTERED_GAMES).map(([id, game]) => game);
}
