import { IChainDeployment } from "./IChainDeployment";
import { IOnChainGame } from "./IOnChainGame";
import { IElementContract } from "./contracts/IElementContract";
import { IGameContract } from "./contracts/IGameContract";
import { createElementContract } from "./create-element-contract";
import { createGameContract } from "./create-game-contract";
import { ALL_ITEMS, ALL_RECIPES, IWorld } from "@not-a-bird/model";

class NonDeployedOnChainGameImpl implements IOnChainGame {
    async buy(itemId: number, N: number): Promise<void> {
        throw new Error("This game is not deployed on-chain.");
    }

    async craft(a: number, b: number): Promise<void> {
        throw new Error("This game is not deployed on-chain.");
    }

    async sacrifice(itemId: number): Promise<void> {
        throw new Error("This game is not deployed on-chain.");
    }

    async world(): Promise<any> {
        throw new Error("This game is not deployed on-chain.");
    }
}

class OnChainGameImpl implements IOnChainGame {
    private _gameContract: IGameContract;
    private _elementContracts: Record<number, IElementContract> = {};

    constructor(
        private _deployment: IChainDeployment
    ) {
        this._gameContract = createGameContract(_deployment.gameContract);
        for (let i in _deployment.elementContracts) {
            this._elementContracts[i] = createElementContract(_deployment.elementContracts[i]);
        }
    }

    async buy(itemId: number, N: number): Promise<void> {
        await this._gameContract.buy(itemId, N);
    }

    async craft(a: number, b: number): Promise<void> {
        await this._gameContract.craft(a, b);
    }

    async sacrifice(itemId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async world(): Promise<IWorld> {
        const _world: IWorld = {
            assets: [],
            inventory: {
                balances: {}
            },
            items: [],
            recipes: []
        };

        for (let itemType of ALL_ITEMS) {
            /*
            // FIXME: This is not working, because the blockchain API is not passed, and caller user cannot be determined
            _world.inventory.balances[itemType.id] = await this._elementContracts[itemType.id].balanceOf(
                // TODO: Here we need to pass the address of the current user
            );
            */
            _world.items.push(itemType);
            // FIXME: Remove this code when the above is fixed
            _world.inventory.balances[itemType.id] = 0;
        }

        // TODO: Create assets from inventory, take into consideration previous position of each nth token

        for (let recipe of ALL_RECIPES) {
            _world.recipes.push(recipe);
        }

        return _world;
    }
}

export function createGame(
    deployment: IChainDeployment
): IOnChainGame {
    return new OnChainGameImpl(deployment);
}

export function createNonDeployedGame(): IOnChainGame {
    return new NonDeployedOnChainGameImpl();
}
