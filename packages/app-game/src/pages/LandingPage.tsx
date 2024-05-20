import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";

export function LandingPage(props: { navigate: (path: string) => void }) {
  const onV2Click = () => {
    props.navigate("/landing-page-v2");
  };
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
  const onStartPlayingPOC = () => {
    props.navigate("/pocgame");
  };
  const onStartPlayground = () => {
    props.navigate("/playground");
  };

  const onStartFranksCard = () => {
    props.navigate("/franks-card");
  };

  return (
    <CenteredLayout>
      <Card>
        <Button onClick={onV2Click}>V2</Button>
      </Card>
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
      <Card>
        <Button onClick={onStartPlayingPOC}>Play the POC</Button>
      </Card>
      <Card>
        <Button onClick={onStartPlayground}>Got to Franks Playground</Button>
      </Card>
      <Card>
        <Button onClick={onStartFranksCard}>Got to Franks Card</Button>
      </Card>
    </CenteredLayout>
  );
}
