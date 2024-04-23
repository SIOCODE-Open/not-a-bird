import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";
import { GameTutorial } from "../tutorials/GameTutorial";

export function GamePage(props: { navigate: (path: string) => void }) {
  const onGiveUp = () => {
    props.navigate("/game-over");
  };

  return (<>
    <CenteredLayout>
      <Card>
        <h1>Game</h1>
        <Button onClick={onGiveUp}>Give up</Button>
      </Card>
    </CenteredLayout>
    <GameTutorial />
  </>);
}
