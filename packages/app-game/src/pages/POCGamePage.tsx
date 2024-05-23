import { useEffect, useRef, useState } from "react";
import { ALL_GAMES, IGameContent, IGameWallet, IOnChainGame, IPool, IWorld } from "@not-a-bird/model";
import { BulmaButton } from "../components/BulmaButton";
import { $gameService } from "../service/GameService";
import { ElementCard } from "./game/ElementCard";
import { GameHeader } from "./game/GameHeader";
import { FranksCard } from './FranksCard.tsx'
import { ILoadableGame, SinglePlayerGame, createSinglePlayerGame } from "@not-a-bird/on-chain-game";


export function POCGamePage(props: { navigate: (path: string) => void }) {
    const [isLoadingGame, setIsLoadingGame] = useState(false);
    const selectedGameRef = useRef<IGameContent | null>(ALL_GAMES[0]);
    const [selectedGameName, setSelectedGameName] = useState<string>(ALL_GAMES[0].name);
    const [availableGames, setAvailableGames] = useState<Array<ILoadableGame>>([]);
    const [world, setWorld] = useState<IWorld>(
        SinglePlayerGame.initialWorld()
    );
    const [wallet, setWallet] = useState<IGameWallet>(
        SinglePlayerGame.initialWallet()
    );
    const [pool, setPool] = useState<IPool>(
        SinglePlayerGame.initialPool()
    );
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [initialLoadingError, setInitialLoadingError] = useState<Error | string | null>(null);
    const onChainGameRef = useRef<IOnChainGame>(
        createSinglePlayerGame(selectedGameRef.current || ALL_GAMES[0])
    );
    const intervalWorldUpdateRef = useRef<any>(null);

    /// Reloads the world from the on-chain game
    const populateWorld = async () => {
        if (!onChainGameRef.current) return;

        const newWorld = await onChainGameRef.current.world();
        const newWallet = await onChainGameRef.current.wallet();
        const newPool = await onChainGameRef.current.pool();
        setWorld(newWorld);
        setWallet(newWallet);
        setPool(newPool);
    };

    /// Subscribes to $gameService changes
    useEffect(
        () => {
            const isLoadingSub = $gameService.isLoading.subscribe(
                (l) => setIsLoadingGame(l)
            );
            const availableGamesSub = $gameService.availableGames.subscribe(
                (g) => setAvailableGames(g)
            );
            let worldUpdatesSub = null;
            let walletUpdatesSub = null;
            let poolUpdatesSub = null;
            const currentGameSub = $gameService.currentGame.subscribe(
                async (g) => {
                    onChainGameRef.current = g;
                    if (worldUpdatesSub) worldUpdatesSub.unsubscribe();
                    if (walletUpdatesSub) walletUpdatesSub.unsubscribe();
                    if (poolUpdatesSub) poolUpdatesSub.unsubscribe();
                    worldUpdatesSub = g.worldUpdates.subscribe(
                        (w) => setWorld(w)
                    );
                    walletUpdatesSub = g.walletUpdates.subscribe(
                        (w) => setWallet(w)
                    );
                    poolUpdatesSub = g.poolUpdates.subscribe(
                        (p) => setPool(p)
                    );
                    await populateWorld();
                }
            );
            return () => {
                isLoadingSub.unsubscribe();
                availableGamesSub.unsubscribe();
                currentGameSub.unsubscribe();
                if (worldUpdatesSub) worldUpdatesSub.unsubscribe();
                if (walletUpdatesSub) walletUpdatesSub.unsubscribe();
                if (poolUpdatesSub) poolUpdatesSub.unsubscribe();
            };
        },
        []
    );

    // Loads the unifiers single player game initially
    useEffect(
        () => {
            $gameService.loadGame("unifiers.singleplayer");
            setIsInitialLoading(false);
        },
        []
    );

    /// Start the world update interval
    useEffect(
        () => {
            intervalWorldUpdateRef.current = setInterval(
                populateWorld,
                10000
            );
            return () => {
                clearInterval(intervalWorldUpdateRef.current);
            };
        },
        []
    );

    /// Finds elements that can be crafted with the given element
    const onBeginCrafting = (elementId: number) => {
        console.log("onBeginCrafting: ", elementId);
    };

    /// Executes the crafting of two elements
    const onExecuteCraft = async (a: number, b: number) => {
        await onChainGameRef.current.craft(a, b);
        console.log("Crafted elements: ", a, b);
    };

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
    } else if (isLoadingGame) {
        return <>
            <p>Loading game ...</p>
        </>;
    } else {

        const elementCards = Object.keys(world.inventory.balances).map(
            (k: string) => (
                // <FranksCard />
                <ElementCard key={k}
                    world={world}
                    wallet={wallet}
                    elementId={parseInt(k)}
                    onChainGame={onChainGameRef.current}
                    onPopulateWorld={populateWorld}
                    isActiveDropTarget={false}
                    onBeginCrafting={() => {
                        onBeginCrafting(parseInt(k));
                    }}
                    onExecuteCraft={onExecuteCraft}
                />
            )
        );

        /// Displays the actual game when it is fully loaded and running
        return <>
            <section className="container is-fluid my">
                <GameHeader world={world}
                    wallet={wallet}
                    pool={pool}
                    onChainGame={onChainGameRef.current}
                    availableGames={availableGames}
                />
                <hr />
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
