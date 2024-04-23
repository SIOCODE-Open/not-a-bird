import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Group } from "../components/Group";
import { CenteredLayout } from "../layout/CenteredLayout";
import { GameTutorial } from "../tutorials/GameTutorial";
import { $planetService } from "../service/PlanetService";
import { $starSystemService } from "../service/StarSystemService";

function GameToolbar(
  props: {
    navigate: (path: string) => void;
  }
) {
  const [currentPlanetName, setCurrentPlanetName] = useState("");

  useEffect(
    () => {
      const perform = async () => {
        const generatedPlanet = await $planetService.getPlanet(
          ...$starSystemService.selectedPlanetCoordinates
        );
        setCurrentPlanetName(generatedPlanet.name);
      };
      perform();
    },
    []
  );

  return <Group>
    <Button onClick={() => props.navigate("/items-wiki")}>Items Wiki</Button>
    <Button onClick={() => props.navigate("/game-over")}>Give up</Button>
    <span className="mx">
      {currentPlanetName}
    </span>
  </Group>
}

export function GamePage(props: { navigate: (path: string) => void }) {
  const onGiveUp = () => {
    props.navigate("/game-over");
  };

  return (<>
    <CenteredLayout>
      <Card>
        <GameToolbar navigate={props.navigate} />
      </Card>
    </CenteredLayout>
    <GameTutorial />
  </>);
}
