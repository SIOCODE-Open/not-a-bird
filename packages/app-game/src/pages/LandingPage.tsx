import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CenteredLayout } from "../layout/CenteredLayout"

export function LandingPage(
    props: {
        navigate: (path: string) => void
    }
) {
    const onStartPlaying = () => {
        props.navigate('/star-map');
    };

    return <CenteredLayout>
        <Card>
            <Button onClick={onStartPlaying}>Play the game</Button>
        </Card>
    </CenteredLayout>
}