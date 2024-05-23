import {
  ALL_GAMES,
  IGameContent,
  IGameWallet,
  IOnChainGame,
  IPool,
  IWorld,
} from "@not-a-bird/model";
import { BulmaButton } from "../../components/BulmaButton";
import { $modals } from "../../service/Modals";
import { EmojioneMonotoneFire } from "../../components/EmojioneMonotoneFire.tsx";
import { ILoadableGame } from "@not-a-bird/on-chain-game";
import { IModalContext } from "../../modals/IModalContext";
import { $gameService } from "../../service/GameService";

async function showGameChangeDialog(
  selectableGames: Array<ILoadableGame>,
): Promise<ILoadableGame | null> {
  const playGame = (ctx: IModalContext, game: ILoadableGame) => {
    ctx.closeModal();
    $gameService.loadGame(game.id);
  };
  const selectedGame = await new Promise<ILoadableGame>((resolve, reject) => {
    $modals.openModal({
      title: "Select game",
      message: "Select the game you want to play",
      content: (ctx: IModalContext) => {
        const gameButtons = selectableGames.map((game) => (<>
          <BulmaButton color="ghost" onClick={() => { ctx.closeModal(); resolve(game) }}>
            {game.metadata.name} <span className="tag is-info">{game.metadata.chainInfo}</span>
          </BulmaButton>
        </>
        ));
        return (<>
          {gameButtons}
        </>);
      },
      actions: [
        {
          label: "Cancel",
          onAction: ({ closeModal }) => {
            closeModal();
            resolve(null);
          },
        },
      ],
    });
  });
  return selectedGame;
}

export function GameHeader(props: {
  world: IWorld;
  wallet: IGameWallet;
  pool: IPool;
  onChainGame: IOnChainGame;
  availableGames?: Array<ILoadableGame>;
}) {
  const onStartChangeGame = async () => {
    const newGame = await showGameChangeDialog(
      props.availableGames || [],
    );
    if (newGame) {
      await $gameService.loadGame(newGame.id);
    }
  };

  return (
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">
            <div className="is-flex is-flex-direction-row is-justify-content-flex-start is-align-items-center">
              <EmojioneMonotoneFire />
              <BulmaButton color="ghost" onClick={onStartChangeGame}>
                {props.onChainGame.name}
              </BulmaButton>
            </div>
          </div>
          <div className="title">
            <span className="has-text-danger">
              {Object.keys(props.world.inventory.balances).reduce(
                (acc, key) => acc + props.world.inventory.balances[key],
                0,
              )}{" "}
              E
            </span>
            ,{" "}
            <span className="has-text-primary">
              {props.world.items.length} I
            </span>
            ,{" "}
            <span className="has-text-link">
              {props.world.recipes.length} R
            </span>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">Balance</div>
          <div className="title">
            <span className="has-text-primary">
              {(
                props.wallet.balance / Math.pow(10, props.wallet.token.decimals)
              ).toFixed(4)}
            </span>{" "}
            {props.wallet.token.symbol}
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">Pool</div>
          <div className="title">
            <span className="has-text-primary">{props.pool.total}</span> /{" "}
            {props.pool.target}
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">Prize</div>
          <div className="title">
            <span className="has-text-primary">
              {(
                props.pool.value / Math.pow(10, props.wallet.token.decimals)
              ).toFixed(4)}
            </span>{" "}
            {props.wallet.token.symbol}
          </div>
        </div>
      </div>
    </div>
  );
}
