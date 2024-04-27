import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";

export function LandingPage(props: { navigate: (path: string) => void }) {
  const onStartPlaying = () => {
    props.navigate("/star-map");
  };
  const goToFrankPage = () => {
    props.navigate("/frank");
  };
  const goToMarcelPage = () => {
    props.navigate("/marcel");
  };

  return (
    <CenteredLayout>
      <Card>
        <Button onClick={onStartPlaying}>Play the game</Button>
      </Card>
      <Card>
        <Button onClick={goToFrankPage}>Go to Frank Page</Button>
      </Card>
      <Card>
        <Button onClick={goToMarcelPage}>Go to Marcel Page</Button>
      </Card>
    </CenteredLayout>
  );
}
