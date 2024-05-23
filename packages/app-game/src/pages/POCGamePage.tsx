import { useEffect, useRef, useState } from "react";
import { ALL_GAMES, IGameContent, IGameWallet, IOnChainGame, IPool, IWorld } from "@not-a-bird/model";
import { BulmaButton } from "../components/BulmaButton";
import { MockedOnChainGame, createMockedOnChainGame } from "../service/MockedOnChainGame";
import { ElementCard } from "./game/ElementCard";
import { GameHeader } from "./game/GameHeader";
import {FranksCard} from './FranksCard.tsx'

interface SelectableGameContent {
    name: string;
    gameContent: IGameContent;
}

export function POCGamePage(props: { navigate: (path: string) => void }) {
    const [selectableGames, setSelectableGames] = useState<SelectableGameContent[]>(
        ALL_GAMES.map(
            game => ({
                name: game.name,
                gameContent: game
            })
        )
    );
    const selectedGameRef = useRef<IGameContent | null>(ALL_GAMES[0]);
    const [selectedGameName, setSelectedGameName] = useState<string>(ALL_GAMES[0].name);
    const [world, setWorld] = useState<IWorld>(
        MockedOnChainGame.initialWorld()
    );
    const [wallet, setWallet] = useState<IGameWallet>(
        MockedOnChainGame.initialWallet()
    );
    const [pool, setPool] = useState<IPool>(
        MockedOnChainGame.initialPool()
    );
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [initialLoadingError, setInitialLoadingError] = useState<Error | string | null>(null);
    const onChainGameRef = useRef<IOnChainGame>(
        createMockedOnChainGame(selectedGameRef.current || ALL_GAMES[0])
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
            <FranksCard/>
                // <ElementCard key={k}
                //     world={world}
                //     wallet={wallet}
                //     elementId={parseInt(k)}
                //     onChainGame={onChainGameRef.current}
                //     onPopulateWorld={populateWorld}
                //     isActiveDropTarget={false}
                //     onBeginCrafting={() => {
                //         onBeginCrafting(parseInt(k));
                //     }}
                //     onExecuteCraft={onExecuteCraft}
                // />
            )
        );

        /// Displays the actual game when it is fully loaded and running
        return <>
            <section className="container is-fluid my">
                <GameHeader world={world}
                    wallet={wallet}
                    pool={pool}
                    onChainGame={onChainGameRef.current}
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
