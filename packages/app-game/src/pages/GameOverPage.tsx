import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";

export function GameOverPage(props: { navigate: (path: string) => void }) {
  return (
    <CenteredLayout>
      <Card>
        <h1>Game over</h1>
        <Button onClick={() => props.navigate("/landing-page")}>
          Better luck next time!
        </Button>
      </Card>
    </CenteredLayout>
  );
}
