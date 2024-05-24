import { Observable, Subject } from "rxjs";
import { IBlockchain } from "./IBlockchain";
import { IElementContract } from "./contracts/IElementContract";
import { IGameContract } from "./contracts/IGameContract";
import { createElementContract } from "./create-element-contract";
import { createGameContract } from "./create-game-contract";
import { ALL_ITEMS, ALL_RECIPES, GAME_UNIFIERS, IChainDeployment, IGameContent, IGameWallet, IOnChainGame, IPool, IRecipe, IWorld } from "@not-a-bird/model";
import { PolkadotJSChain } from "./chains/PolkadotJSChain";

const NULL_GAME_CONTENT: IGameContent = {
    name: "Unknown",
    description: "Unknown",
    items: [],
    recipes: []
};

export class SinglePlayerGame implements IOnChainGame {
    private _world: IWorld;
    private _buyOffer = [
        1_000_000_000_000,
        1
    ];
    private _nativeTokens = 1_000 * 1_000_000_000_000;
    private _poolTarget = 100;
    private _poolPoints = 0;
    private _totalSpentNativeTokens = 0;

    private _worldUpdates: Subject<IWorld> = new Subject();
    private _walletUpdates: Subject<IGameWallet> = new Subject();
    private _poolUpdates: Subject<IPool> = new Subject();

    constructor(
        private _gameContent?: IGameContent
    ) {
        if (!this._gameContent) {
            this._gameContent = NULL_GAME_CONTENT;
        }
        this._world = SinglePlayerGame.initialWorld(this._gameContent);
    }

    public get worldUpdates() {
        return this._worldUpdates.asObservable();
    }

    public get walletUpdates() {
        return this._walletUpdates.asObservable();
    }

    public get poolUpdates() {
        return this._poolUpdates.asObservable();
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
            gameContent = NULL_GAME_CONTENT;
        }
        const rootElements = gameContent.items.filter(
            item => !gameContent.recipes.some(
                recipe => recipe.result.id === item.id
            )
        );
        console.log("SinglePlayerGame.initialWorld: ", rootElements);
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
            balance: BigInt(0),
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

        this._worldUpdates.next(this._world);
        const newWallet = await this.wallet();
        this._walletUpdates.next(newWallet);
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

            this._worldUpdates.next(this._world);
        }
    }

    async sacrifice(itemId: number): Promise<void> {
        if (itemId in this._world.inventory.balances) {
            if (this._world.inventory.balances[itemId] > 0) {
                this._world.inventory.balances[itemId] -= 1;
                this._poolPoints += GAME_UNIFIERS.items.find((item) => item.id === itemId)?.tier || 1;
                await this._checkPoolSaturation();

                this._worldUpdates.next(this._world);
                const newPool = await this.pool();
                this._poolUpdates.next(newPool);
            }
        }
    }

    async wallet(): Promise<IGameWallet> {
        return {
            balance: BigInt(this._nativeTokens),
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

                this._worldUpdates.next(this._world);
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

    async wallet(): Promise<any> {
        throw new Error("This game is not deployed on-chain.");
    }

    async send(itemId: number, to: string, amount: number): Promise<any> {
        throw new Error("This game is not deployed on-chain.");
    }

    async pool(): Promise<any> {
        throw new Error("This game is not deployed on-chain.");
    }

    get name(): string {
        return "Non-deployed game";
    }

    get description(): string {
        return "This game is not deployed on-chain.";
    }

    get worldUpdates(): Observable<IWorld> {
        throw new Error("This game is not deployed on-chain.");
    }

    get walletUpdates(): Observable<IGameWallet> {
        throw new Error("This game is not deployed on-chain.");
    }

    get poolUpdates(): Observable<IPool> {
        throw new Error("This game is not deployed on-chain.");
    }
}

class OnChainGameImpl implements IOnChainGame {
    private _gameContract: IGameContract;
    private _elementContracts: Record<number, IElementContract> = {};

    private _worldUpdates: Subject<IWorld> = new Subject();
    private _walletUpdates: Subject<IGameWallet> = new Subject();
    private _poolUpdates: Subject<IPool> = new Subject();

    constructor(
        private _deployment: IChainDeployment,
        private _content: IGameContent,
        private _chain: IBlockchain
    ) {
        this._gameContract = createGameContract(
            _deployment.gameContract,
            _content,
            _chain
        );
        for (let k of Object.keys(_deployment.elementContracts)) {
            const i = parseInt(k);
            this._elementContracts[i] = createElementContract(
                _deployment.elementContracts[i],
                _content.items.find((item) => item.id === i),
                _chain
            );
        }
    }

    async buy(itemId: number, N: number): Promise<void> {
        await this._gameContract.buy(itemId, N);
        await this._updateWorld();
        await this._updateWallet();
    }

    async craft(a: number, b: number): Promise<void> {
        await this._gameContract.craft(a, b);
        await this._updateWorld();
    }

    async sacrifice(itemId: number): Promise<void> {
        await this._gameContract.sacrifice(itemId, 1);
        await this._updateWorld();
        await this._updatePool();
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

        for (let itemType of this._content.items) {
            console.log("OnChainGameImpl.world: ", itemType.id, this._elementContracts[itemType.id])
            _world.inventory.balances[itemType.id] = await this._elementContracts[itemType.id].balanceOf(
                await this._chain.getAddress()
            );
            _world.items.push(itemType);
        }

        // TODO: Create assets from inventory, take into consideration previous position of each nth token

        for (let recipe of ALL_RECIPES) {
            _world.recipes.push(recipe);
        }

        return _world;
    }

    async wallet(): Promise<IGameWallet> {
        return {
            address: await this._chain.getAddress(),
            balance: await this._chain.getNativeTokenBalance() as bigint,
            token: {
                name: "UNKNOWN",
                symbol: "???",
                decimals: 12
            }
        }
    }

    async send(itemId: number, to: string, amount: number): Promise<any> {
        const elementContract = this._elementContracts[itemId];
        await elementContract.transfer(to, amount, "");
        await this._updateWorld();
    }

    async pool(): Promise<IPool> {
        const chainPool = await this._gameContract.pool();
        return {
            participants: 0,
            target: chainPool[1],
            total: chainPool[2],
            value: 0,
        }
    }

    get name(): string {
        return this._content.name;
    }

    get description(): string {
        return this._content.description;
    }

    get worldUpdates(): Observable<IWorld> {
        return this._worldUpdates.asObservable();
    }

    get walletUpdates(): Observable<IGameWallet> {
        return this._walletUpdates.asObservable();
    }

    get poolUpdates(): Observable<IPool> {
        return this._poolUpdates.asObservable();
    }

    private async _updateWorld() {
        const newWorld = await this.world();
        this._worldUpdates.next(newWorld);
    }

    private async _updateWallet() {
        const newWallet = await this.wallet();
        this._walletUpdates.next(newWallet);
    }

    private async _updatePool() {
        const newPool = await this.pool();
        this._poolUpdates.next(newPool);
    }

}

export function createDeployedGame(
    deployment: IChainDeployment,
    content: IGameContent,
    chain: IBlockchain
): IOnChainGame {
    return new OnChainGameImpl(
        deployment,
        content,
        chain
    );
}

export function createPolkadotJSGame(
    deployment: IChainDeployment,
    content: IGameContent,
    suri: string,
): IOnChainGame {
    const chain = new PolkadotJSChain(
        deployment.rpcUrl,
        suri
    );
    return createDeployedGame(
        deployment,
        content,
        chain
    );
}

export function createNonDeployedGame(): IOnChainGame {
    return new NonDeployedOnChainGameImpl();
}

export function createSinglePlayerGame(
    gameContent?: IGameContent
): IOnChainGame {
    return new SinglePlayerGame(gameContent);
}
