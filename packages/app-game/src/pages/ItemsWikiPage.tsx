import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";

export function ItemsWikiPage(
    props: {
        navigate: (path: string) => void;
    }
) {
    return <>
        <CenteredLayout>
            <Card>
                <h1>Items wiki</h1>
                <Button onClick={() => props.navigate("/game")}>Back</Button>
            </Card>
        </CenteredLayout>
    </>;
}
