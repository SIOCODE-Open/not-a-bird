import { ALL_GAMES, IGameContent, IGameWallet, IOnChainGame, IPool, IWorld } from "@not-a-bird/model";
import { BulmaButton } from "../../components/BulmaButton";
import { $modals } from "../../service/Modals";

async function showGameChangeDialog(
    selectableGames: Array<IGameContent>,
): Promise<IGameContent | null> {
    const gameNames = selectableGames.map(game => game.name);
    const selectedGame = await new Promise(
        (resolve, reject) => {
            $modals.openModal({
                title: "Select game",
                message: "Select the game you want to play",
                actions: [
                    {
                        label: "Cancel",
                        onAction: ({ closeModal }) => {
                            closeModal(); resolve(null);
                        }
                    }
                ]
            })
        }
    );
    if (!selectedGame) {
        return null;
    }
    return selectableGames.find(game => game.name === selectedGame) || null;
}

export function GameHeader(
    props: {
        world: IWorld,
        wallet: IGameWallet,
        pool: IPool,
        onChainGame: IOnChainGame,
        onChangeGame?: (newContent: IGameContent) => any,
    }
) {
    const onStartChangeGame = async () => {
        const newGame = await showGameChangeDialog(ALL_GAMES);
        if (newGame) {
            props.onChangeGame?.(newGame);
        }
    };

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
                <div className="heading">
                    <BulmaButton color="ghost" onClick={onStartChangeGame}>
                        {props.onChainGame.name}
                    </BulmaButton>
                </div>
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