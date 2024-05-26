import { ILoadableGame } from "@not-a-bird/on-chain-game";
import { IModalContext } from "./IModalContext";
import { $gameService } from "../service/GameService";
import { $modals } from "../service/Modals";

export async function showGameChangeDialog(
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
          <a className="panel-block" onClick={() => { ctx.closeModal(); resolve(game) }}>
            <span className="mx">{game.metadata.name}</span>
            <span className="tag is-info mx-2 px-1 is-rounded">{game.metadata.chainInfo}</span>
          </a>
        </>
        ));
        return (<>
          <div className="panel">
            <p className="panel-heading">Available games</p>
            {gameButtons}
          </div>

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