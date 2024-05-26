import {
  ALL_GAMES,
  IGameContent,
  IGameWallet,
  IOnChainGame,
  IPool,
  IWorld,
} from "@not-a-bird/model";
import { BulmaButton } from "../../components/BulmaButton";
import { EmojioneMonotoneFire } from "../../components/EmojioneMonotoneFire.tsx";
import { IAchievementService, ILoadableGame } from "@not-a-bird/on-chain-game";
import { $gameService } from "../../service/GameService";
import {
  showGameChangeDialog
} from "../../modals/game-change.dialog";
import {
  showWalletDialog
} from "../../modals/wallet.dialog";
import { useEffect, useState } from "react";

export function GameHeader(props: {
  world: IWorld;
  wallet: IGameWallet;
  pool: IPool;
  onChainGame: IOnChainGame;
  availableGames?: Array<ILoadableGame>;
  achievementService?: IAchievementService | null;
}) {
  const [achievementCount, setAchievementCount] = useState(0);
  const [awardedAchievementCount, setAwardedAchievementCount] = useState(0);
  const [mintedAchievementCount, setMintedAchievementCount] = useState(0);


  const onStartChangeGame = async () => {
    const newGame = await showGameChangeDialog(
      props.availableGames || [],
    );
    if (newGame) {
      await $gameService.loadGame(newGame.id);
    }
  };


  /// Fetch achievements count
  useEffect(
    () => {
      const fetcher = async () => {
        const allAchievements = await props.achievementService?.all();
        if (allAchievements) {
          setAchievementCount(allAchievements.length);
          setAwardedAchievementCount(
            allAchievements.filter((a) => !!a.awarded).length
          );
          setMintedAchievementCount(
            allAchievements.filter((a) => !!a.minted).length
          );
        }
      };
      fetcher();
    },
    []
  );

  /// Subscribe to awards and mints
  useEffect(
    () => {
      const awardsSub = props.achievementService?.awards.subscribe(
        async (a) => {
          setAwardedAchievementCount((c) => c + 1);
        }
      );
      const mintsSub = props.achievementService?.mints.subscribe(
        async (a) => {
          setMintedAchievementCount((c) => c + 1);
        }
      );
      return () => {
        awardsSub?.unsubscribe();
        mintsSub?.unsubscribe();
      };
    },
    []
  );

  return (<>
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">
            <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
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
            </span>,{" "}
            <span className="has-text-success">
              {achievementCount} A
            </span>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">
            <BulmaButton color="ghost" onClick={() => showWalletDialog(props.wallet)}>
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
      <div className="level-item has-text-centered">
        <div>
          <div className="heading">Achievements</div>
          <div className="title">
            <span className="has-text-success">
              {awardedAchievementCount} A
            </span>
            ,{" "}
            <span className="has-text-info">
              {mintedAchievementCount} M
            </span>
          </div>
        </div>
      </div>
    </div>
    <progress className="progress" value={props.pool.total} max={props.pool.target}></progress>
  </>);
}
