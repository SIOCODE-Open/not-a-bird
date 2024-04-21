import { Card } from "../components/Card"
import { CenteredLayout } from "../layout/CenteredLayout"

export function LandingPage(
    opts: {
        navigate: (path: string) => void
    }
) {
    return <CenteredLayout>
        <Card>
            Hello on the landing page!
        </Card>
    </CenteredLayout>
}