import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";
import { ALL_ITEMS, ALL_RECIPES, IGameWallet, IPool, IRecipe, IWorld } from "@not-a-bird/model";
import { IOnChainGame } from "@not-a-bird/on-chain-game";
import { BulmaButton } from "../components/BulmaButton";
import { BulmaCard } from "../components/BulmaCard";

class MockedOnChainGame implements IOnChainGame {
    private _world: IWorld;
    private _buyOffer = [
        1_000_000_000_000,
        1
    ];
    private _nativeTokens = 1_000 * 1_000_000_000_000;
    private _poolTarget = 100;
    private _poolPoints = 0;
    private _totalSpentNativeTokens = 0;

    constructor() {
        this._world = MockedOnChainGame.initialWorld();
    }

    private async _checkPoolSaturation() {
        if (this._poolPoints >= this._poolTarget) {
            this._poolPoints = 0;
            this._poolTarget += 100;
            this._nativeTokens += this._totalSpentNativeTokens;
            this._totalSpentNativeTokens = 0;
        }
    }

    public static initialWorld(): IWorld {
        const rootElements = ALL_ITEMS.filter(
            item => !ALL_RECIPES.some(
                recipe => recipe.result.id === item.id
            )
        );
        const w = {
            assets: [],
            inventory: {
                balances: {}
            },
            items: ALL_ITEMS,
            recipes: ALL_RECIPES,
        };
        rootElements.forEach(
            (item) => {
                w.inventory.balances[item.id] = 1;
            }
        );
        return w;
    }

    public static initialWallet(): IGameWallet {
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

    public static initialPool(): IPool {
        return {
            target: 100,
            total: 0,
            value: 0,
            participants: 1
        };
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
                this._poolPoints += ALL_ITEMS.find((item) => item.id === itemId)?.tier || 1;
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
const createMockedOnChainGame = () => new MockedOnChainGame();

/// Parts of the game:
/// * Element cards
/// * Element card drag and drop crafting
/// * Element buy button
/// * Element card drag and drop sacrificing
/// * Header showing balance
/// * Header showing number of assets
/// * Element send button
/// * Receive button

function GameHeader(
    props: {
        world: IWorld,
        wallet: IGameWallet,
        pool: IPool,
        onChainGame: IOnChainGame
    }
) {
    return <div className="level">

        <div className="level-item has-text-centered">
            <div>
                <div className="heading">Balance</div>
                <div className="title">
                    <span className="has-text-primary">
                        {(props.wallet.balance / Math.pow(10, props.wallet.token.decimals)).toFixed(4)}
                    </span> {props.wallet.token.symbol}
                </div>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <div className="heading">Game data</div>
                <div className="title">
                    <span className="has-text-danger">
                        {
                            Object.keys(props.world.inventory.balances).reduce(
                                (acc, key) => acc + props.world.inventory.balances[key],
                                0
                            )
                        } E</span>, <span className="has-text-primary">{props.world.items.length} I</span>, <span className="has-text-link">{props.world.recipes.length} R</span>
                </div>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <div className="heading">Pool</div>
                <div className="title">
                    <span className="has-text-primary">
                        {props.pool.total}
                    </span> / {props.pool.target}
                </div>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <div className="heading">Prize</div>
                <div className="title">
                    <span className="has-text-primary">
                        {(props.pool.value / Math.pow(10, props.wallet.token.decimals)).toFixed(4)}
                    </span> {props.wallet.token.symbol}
                </div>
            </div>
        </div>

    </div>;
}

function ElementCard(
    props: {
        world: IWorld,
        wallet: IGameWallet,
        elementId: number,
        onChainGame: IOnChainGame,
        onPopulateWorld: () => any,
        isActiveDropTarget?: boolean,
        onBeginCrafting?: () => any,
        onExecuteCraft?: (a: number, b: number) => any
    }
) {
    const [isBeingDragged, setIsBeingDragged] = useState(false);
    const craftSelectRef = useRef<HTMLSelectElement>(null);

    const elementItem = ALL_ITEMS.find((item) => item.id === props.elementId);

    if (!elementItem) {
        return <BulmaCard>
            <p>Element not found: {props.elementId}</p>
        </BulmaCard>;
    }

    const onBuyElement = async () => {
        await props.onChainGame.buy(props.elementId, 1);
        await props.onPopulateWorld();
    };

    const onSacrificeElement = async () => {
        await props.onChainGame.sacrifice(props.elementId);
        await props.onPopulateWorld();
    };

    const onSendElement = async () => {
        alert("Not implemented");
    };

    const onStartDraggingElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Dragging element: ", props.elementId);
        setIsBeingDragged(true);
        ev.dataTransfer.setData("elementId", props.elementId.toString());
        props.onBeginCrafting?.();
    };

    const onEndDraggingElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Ended dragging of element: ", props.elementId);
        setIsBeingDragged(false);
    };

    const onDropElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Dropped element: ", ev.dataTransfer.getData("elementId"));
        props.onExecuteCraft?.(parseInt(ev.dataTransfer.getData("elementId")), props.elementId);
    };

    const onCraftElement = () => {
        props.onBeginCrafting?.();
    };

    const foundRecipes = props.world.recipes.filter(
        (recipe) => recipe.a.id === props.elementId || recipe.b.id === props.elementId
    );
    const activeElementIdsSet = new Set<number>();
    let craftableWithSelf = false;
    foundRecipes.forEach((recipe) => {
        activeElementIdsSet.add(recipe.a.id);
        activeElementIdsSet.add(recipe.b.id);
        if (recipe.a.id === props.elementId && recipe.b.id === props.elementId) {
            craftableWithSelf = true;
        }
    });
    if (!craftableWithSelf) {
        activeElementIdsSet.delete(props.elementId);
    }
    const craftableWith = props.world.items.filter(
        (item) => activeElementIdsSet.has(item.id) && props.world.inventory.balances[item.id] > 0
    );

    const onSelectChanged = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(ev.target.value);
        console.log("Selected: ", selectedId);
        if (selectedId < 0) {
            return;
        }
        props.onExecuteCraft?.(props.elementId, selectedId);
        ev.target.options[0].selected = true;
    }

    return <BulmaCard footer={[
        <BulmaButton onClick={onBuyElement}>
            Buy
        </BulmaButton>,
        <BulmaButton onClick={onSacrificeElement}>
            Sacrifice
        </BulmaButton>,
        <BulmaButton onClick={onSendElement}>
            Send
        </BulmaButton>,
        <div className="select is-rounded">
            <select title="Craft ..." ref={craftSelectRef} onChange={onSelectChanged}>
                <option value={-1}>Craft ...</option>
                {
                    craftableWith.map(
                        (item) => (
                            <option value={item.id}>
                                {item.name}
                            </option>
                        )
                    )
                }
            </select>
        </div>
    ]}>
        <h1>
            {elementItem.name}
        </h1>
        <p>
            <i>
                {elementItem.description}
            </i>
        </p>
        <p>
            You have: {props.world.inventory.balances[props.elementId]}
        </p>
    </BulmaCard>
}

export function POCGamePage(props: { navigate: (path: string) => void }) {
    const [world, setWorld] = useState<IWorld>(
        MockedOnChainGame.initialWorld()
    );
    const [wallet, setWallet] = useState<IGameWallet>(
        MockedOnChainGame.initialWallet()
    );
    const [pool, setPool] = useState<IPool>(
        MockedOnChainGame.initialPool()
    );
    const [activeElementDropTargets, setActiveElementDropTargets] = useState<number[]>([]);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [initialLoadingError, setInitialLoadingError] = useState<Error | string | null>(null);
    const onChainGameRef = useRef<IOnChainGame>(
        createMockedOnChainGame()
    );

    /// Reloads the world from the on-chain game
    const populateWorld = async () => {
        const newWorld = await onChainGameRef.current.world();
        const newWallet = await onChainGameRef.current.wallet();
        const newPool = await onChainGameRef.current.pool();
        setWorld(newWorld);
        setWallet(newWallet);
        setPool(newPool);
    };

    /// Finds elements that can be crafted with the given element
    const onBeginCrafting = (elementId: number) => {
        console.log("onBeginCrafting: ", elementId);
    };

    /// Executes the crafting of two elements
    const onExecuteCraft = async (a: number, b: number) => {
        await onChainGameRef.current.craft(a, b);
        await populateWorld();
        setActiveElementDropTargets([]);
        console.log("Crafted elements: ", a, b);
    };

    /// Populates the world on first render
    useEffect(
        () => {
            populateWorld()
                .then(() => setIsInitialLoading(false))
                .catch((error) => {
                    setInitialLoadingError(error);
                    setIsInitialLoading(false);
                });
        },
        []
    );

    if (isInitialLoading) {
        /// Displays a loading message with a back button to the landing page
        return <>
            <p>Loading ...</p>
        </>;
    } else if (initialLoadingError) {
        /// Displays an error message with a back button to the landing page and a refresh button
        return <>
            <p>Error: {initialLoadingError.toString()}</p>
            <BulmaButton color="primary" outlined onClick={() => props.navigate("/landing-page")}>Back</BulmaButton>
            <BulmaButton color="link" outlined onClick={() => location.reload()}>Refresh</BulmaButton>
        </>;
    } else {

        const elementCards = Object.keys(world.inventory.balances).map(
            (k: string) => (
                <ElementCard key={k}
                    world={world}
                    wallet={wallet}
                    elementId={parseInt(k)}
                    onChainGame={onChainGameRef.current}
                    onPopulateWorld={populateWorld}
                    isActiveDropTarget={
                        activeElementDropTargets.includes(parseInt(k))
                    }
                    onBeginCrafting={() => {
                        onBeginCrafting(parseInt(k));
                    }}
                    onExecuteCraft={onExecuteCraft}
                />
            )
        );

        /// Displays the actual game when it is fully loaded and running
        return <>
            <section className="container is-fluid">
                <GameHeader world={world}
                    wallet={wallet}
                    pool={pool}
                    onChainGame={onChainGameRef.current}
                />
                <div className="columns is-multiline">
                    {
                        elementCards.map(
                            (card, index) => (
                                <div className="column is-12 is-6-tablet is-6-desktop is-6-widescreen is-4-fullhd" key={index}>
                                    {card}
                                </div>
                            )
                        )
                    }
                </div>
                <BulmaButton color="link" outlined onClick={() => props.navigate("/landing-page")}>Back</BulmaButton>
            </section>
        </>
    }
}
