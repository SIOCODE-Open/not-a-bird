import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";

export function LandingPage(props: { navigate: (path: string) => void }) {
  const onStartPlaying = () => {
    props.navigate("/game");
  };
  const goToFrankPage = () => {
    props.navigate("/frank");
  };
  const goToMarcelPage = () => {
    props.navigate("/marcel");
  };
  const goToMergicankPage = () => {
    props.navigate("/mergican");
  };
  const goToParticlePage = () => {
    props.navigate("/particle");
  };
  const goToImageEffectPage = () => {
    props.navigate("/imageEffect");
  };

  return (
    <CenteredLayout>
      <Card>
        <Button onClick={onStartPlaying}>Play the game</Button>
      </Card>
      <Card>
        <Button onClick={goToMergicankPage}>Go to Mergican Page</Button>
      </Card>
      <Card>
        <Button onClick={goToFrankPage}>Go to Frank Page</Button>
      </Card>
      <Card>
        <Button onClick={goToMarcelPage}>Go to Marcel Page</Button>
      </Card>
      <Card>
        <Button onClick={goToParticlePage}>Go to Particle Page</Button>
      </Card>
      <Card>
        <Button onClick={goToImageEffectPage}>Go to ImageEffect Page</Button>
      </Card>
    </CenteredLayout>
  );
}
