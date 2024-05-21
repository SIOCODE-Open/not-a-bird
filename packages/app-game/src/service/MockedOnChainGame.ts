import { GAME_UNIFIERS, IGameContent, IGameWallet, IItem, IOnChainGame, IPool, IRecipe, IWorld } from "@not-a-bird/model";

export class MockedOnChainGame implements IOnChainGame {
    private _world: IWorld;
    private _buyOffer = [
        1_000_000_000_000,
        1
    ];
    private _nativeTokens = 1_000 * 1_000_000_000_000;
    private _poolTarget = 100;
    private _poolPoints = 0;
    private _totalSpentNativeTokens = 0;

    constructor(
        private _gameContent?: IGameContent
    ) {
        if (!this._gameContent) {
            this._gameContent = GAME_UNIFIERS;
        }
        this._world = MockedOnChainGame.initialWorld(this._gameContent);
    }

    private async _checkPoolSaturation() {
        if (this._poolPoints >= this._poolTarget) {
            this._poolPoints = 0;
            this._poolTarget += 100;
            this._nativeTokens += this._totalSpentNativeTokens;
            this._totalSpentNativeTokens = 0;
        }
    }

    public static initialWorld(
        gameContent?: IGameContent
    ): IWorld {
        if (!gameContent) {
            gameContent = GAME_UNIFIERS;
        }
        const rootElements = gameContent.items.filter(
            item => !GAME_UNIFIERS.recipes.some(
                recipe => recipe.result.id === item.id
            )
        );
        const w = {
            assets: [],
            inventory: {
                balances: {}
            },
            items: gameContent.items,
            recipes: gameContent.recipes,
        };
        rootElements.forEach(
            (item) => {
                w.inventory.balances[item.id] = 1;
            }
        );
        return w;
    }

    public static initialWallet(
        gameContent?: IGameContent
    ): IGameWallet {
        if (!gameContent) {
            gameContent = GAME_UNIFIERS;
        }
        return {
            balance: 0,
            address: "0x000000000000000000000000000000000000",
            token: {
                name: "Game Money",
                symbol: "GAME",
                decimals: 12
            }
        };
    }

    public static initialPool(
        gameContent?: IGameContent
    ): IPool {
        if (!gameContent) {
            gameContent = GAME_UNIFIERS;
        }
        return {
            target: 100,
            total: 0,
            value: 0,
            participants: 1
        };
    }

    get name() {
        return this._gameContent!.name;
    }
    get description() {
        return this._gameContent!.description;
    }

    async world(): Promise<IWorld> {
        return this._world;
    }

    async buy(itemId: number, N: number): Promise<void> {
        const item = this._world.items.find((item) => item.id === itemId);
        if (item === undefined || item === null) {
            return;
        }

        const cost = this._buyOffer[0] * N;
        if (cost > this._nativeTokens) {
            return;
        }

        if (itemId in this._world.inventory.balances) {
            this._world.inventory.balances[itemId] += this._buyOffer[1] * N;
        } else {
            this._world.inventory.balances[itemId] = this._buyOffer[1] * N;
        }

        this._nativeTokens -= cost;
        this._totalSpentNativeTokens += cost;
    }

    async craft(a: number, b: number): Promise<void> {
        let foundRecipe: IRecipe | undefined = undefined;
        for (let recipe of this._world.recipes) {
            if (recipe.a.id === a && recipe.b.id === b) {
                foundRecipe = recipe;
                break;
            }
            if (recipe.a.id === b && recipe.b.id === a) {
                foundRecipe = recipe;
                break;
            }
        }

        console.log("MockedOnChainGame.craft: ", a, b, foundRecipe, this._world.recipes);

        if (foundRecipe) {
            let hasA = false;
            let hasB = false;

            if (a in this._world.inventory.balances) {
                if (this._world.inventory.balances[a] > 0) {
                    hasA = true;
                }
            }

            if (b in this._world.inventory.balances) {
                if (this._world.inventory.balances[b] > 0) {
                    hasB = true;
                }
            }

            if (!hasA || !hasB) {
                return;
            }

            if (a === b) {
                if (this._world.inventory.balances[a] < 2) {
                    return;
                }
            }

            this._world.inventory.balances[a] -= 1;
            this._world.inventory.balances[b] -= 1;

            if (foundRecipe.result.id in this._world.inventory.balances) {
                this._world.inventory.balances[foundRecipe.result.id] += 1;
            } else {
                this._world.inventory.balances[foundRecipe.result.id] = 1;
            }
        }
    }

    async sacrifice(itemId: number): Promise<void> {
        if (itemId in this._world.inventory.balances) {
            if (this._world.inventory.balances[itemId] > 0) {
                this._world.inventory.balances[itemId] -= 1;
                this._poolPoints += GAME_UNIFIERS.items.find((item) => item.id === itemId)?.tier || 1;
                await this._checkPoolSaturation();
            }
        }
    }

    async wallet(): Promise<IGameWallet> {
        return {
            balance: this._nativeTokens,
            address: "0x000000000000000000000000000000000000",
            token: {
                name: "Game Money",
                symbol: "GAME",
                decimals: 12
            }
        };
    }

    async send(itemId: number, to: string, amount: number): Promise<void> {
        if (to === "0x000000000000000000000000000000000000") {
            return;
        }
        if (itemId in this._world.inventory.balances) {
            if (this._world.inventory.balances[itemId] >= amount) {
                this._world.inventory.balances[itemId] -= amount;
            }
        }
    }

    async pool(): Promise<IPool> {
        return {
            target: this._poolTarget,
            total: this._poolPoints,
            value: this._totalSpentNativeTokens,
            participants: 1
        };
    }
}
export const createMockedOnChainGame = (
    gameContent?: IGameContent
) => new MockedOnChainGame(gameContent);