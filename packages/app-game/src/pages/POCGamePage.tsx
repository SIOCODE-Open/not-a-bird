import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";
import { ALL_ITEMS, ALL_RECIPES, IGameWallet, IRecipe, IWorld } from "@not-a-bird/model";
import { IOnChainGame } from "@not-a-bird/on-chain-game";

class MockedOnChainGame implements IOnChainGame {
    private _world: IWorld;
    private _buyOffer = [
        1_000_000_000_000,
        1
    ];
    private _nativeTokens = 1_000 * 1_000_000_000_000;

    constructor() {
        this._world = MockedOnChainGame.initialWorld();
    }

    public static initialWorld(): IWorld {
        return {
            assets: [],
            inventory: {
                balances: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                }
            },
            items: ALL_ITEMS,
            recipes: ALL_RECIPES,
        };
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
        onChainGame: IOnChainGame
    }
) {
    return <div className="game-header">
        <div className="flex row j-center a-center">
            <div className="mx">
                Balance: {(props.wallet.balance / Math.pow(10, props.wallet.token.decimals)).toFixed(4)} {props.wallet.token.symbol}
            </div>
            <div className="mx">
                Total elements: {
                    Object.keys(props.world.inventory.balances).reduce(
                        (acc, key) => acc + props.world.inventory.balances[key],
                        0
                    )
                }
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
    const elementItem = ALL_ITEMS.find((item) => item.id === props.elementId);

    if (!elementItem) {
        return <Card className="my">
            <p>Element not found: {props.elementId}</p>
        </Card>;
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

    return <Card className={"my"
        + (isBeingDragged ? " dragged" : "")
        + (props.isActiveDropTarget ? " drop-target" : "")
    } draggable onDragStart={onStartDraggingElement}
        onDragEnd={onEndDraggingElement}
        onDrop={onDropElement}
        onDragOver={(ev) => ev.preventDefault()}
    >
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
        <div className="flex row j-center a-center">
            <Button onClick={onBuyElement}>
                Buy
            </Button>
            <Button onClick={onSacrificeElement}>
                Sacrifice
            </Button>
            <Button onClick={onSendElement}>
                Send
            </Button>
        </div>
    </Card>
}

export function POCGamePage(props: { navigate: (path: string) => void }) {
    const [world, setWorld] = useState<IWorld>(
        MockedOnChainGame.initialWorld()
    );
    const [wallet, setWallet] = useState<IGameWallet>(
        MockedOnChainGame.initialWallet()
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
        setWorld(newWorld);
        setWallet(newWallet);
    };

    /// Finds elements that can be crafted with the given element
    const onBeginCrafting = (elementId: number) => {
        const foundRecipes = world.recipes.filter(
            (recipe) => recipe.a.id === elementId || recipe.b.id === elementId
        );
        const activeElementIdsSet = new Set<number>();
        foundRecipes.forEach((recipe) => {
            activeElementIdsSet.add(recipe.a.id);
            activeElementIdsSet.add(recipe.b.id);
        });
        activeElementIdsSet.delete(elementId);
        setActiveElementDropTargets(Array.from(activeElementIdsSet));
        console.log("Active element drop targets: ", activeElementDropTargets);
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
        return <CenteredLayout>
            <h1>POC Game Page</h1>
            <p>Loading ...</p>
            <Button onClick={() => props.navigate("/landing-page")}>Back</Button>
        </CenteredLayout>;
    } else if (initialLoadingError) {
        /// Displays an error message with a back button to the landing page and a refresh button
        return <CenteredLayout>
            <h1>POC Game Page</h1>
            <p>Error: {initialLoadingError.toString()}</p>
            <Button onClick={() => props.navigate("/landing-page")}>Back</Button>
            <Button onClick={() => location.reload()}>Refresh</Button>
        </CenteredLayout>;
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
        return <CenteredLayout>
            <h1>POC Game Page</h1>
            <GameHeader world={world} wallet={wallet} onChainGame={onChainGameRef.current} />
            <p>
                Number of items: {world.items.length}
            </p>
            <p>
                Number of recipes: {world.recipes.length}
            </p>
            {elementCards}
            <Button onClick={() => props.navigate("/landing-page")}>Back</Button>
        </CenteredLayout>
    }
}
