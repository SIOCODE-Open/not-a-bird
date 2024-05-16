import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Group } from "../components/Group";
import { CenteredLayout } from "../layout/CenteredLayout";
import { GameTutorial } from "../tutorials/GameTutorial";

function GameToolbar(
  props: {
    navigate: (path: string) => void;
  }
) {
  return <Group>
    <Button onClick={() => props.navigate("/items-wiki")}>Items Wiki</Button>
    <Button onClick={() => props.navigate("/game-over")}>Give up</Button>
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
