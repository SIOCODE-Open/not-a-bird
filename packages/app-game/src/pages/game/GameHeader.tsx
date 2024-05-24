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
import { loadGameChainWallet } from "@not-a-bird/game-chain-wallet";
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
      content: (ctx: IModalContext) => {
        const gameButtons = selectableGames.map((game) => (<>
          <BulmaButton color="ghost" onClick={() => { ctx.closeModal(); resolve(game) }}>
            {game.metadata.name} <span className="tag is-info">{game.metadata.chainInfo}</span>
          </BulmaButton>
        </>
        ));
        return (<>
          <p>
            Select the game you want to play
          </p>
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

async function showBalanceDialog(
  wallet: IGameWallet
) {
  const chainWallet = await loadGameChainWallet();
  await new Promise<void>((resolve, reject) => {
    $modals.openModal({
      title: "Wallet",
      message: "",
      content: (ctx: IModalContext) => {
        return <>
          <p>
            <b>Address: </b><span>{wallet.address}</span>
          </p>
          <p>
            <b>SURI: </b><span>{chainWallet?.suri || 'UNKNOWN'}</span>
          </p>
          <p>
            <b>Balance: </b><span>
              {(
                parseInt(wallet.balance.toString()) / Math.pow(10, wallet.token.decimals)
              ).toFixed(4)}
            </span>
          </p>
        </>
      },
      actions: [
        {
          label: "Close",
          onAction: ({ closeModal }) => {
            closeModal();
            resolve();
          },
        },
      ],
    })
  });
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

  return (<>
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
          <div className="heading">
            <BulmaButton color="ghost" onClick={() => showBalanceDialog(props.wallet)}>
              Wallet
            </BulmaButton>
          </div>
          <div className="title">
            <span className="has-text-primary">
              {(
                parseInt(props.wallet.balance.toString()) / Math.pow(10, props.wallet.token.decimals)
              ).toFixed(4)}
            </span>{" "}
            {props.wallet.token.symbol}
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
    <progress className="progress" value={props.pool.total} max={props.pool.target}></progress>
  </>);
}
