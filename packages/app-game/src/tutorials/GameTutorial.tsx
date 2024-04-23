import { Tutorial } from "../components/Tutorial";

export function GameTutorial() {
    return <Tutorial steps={[
        {
            title: "The Game",
            content: (<>
                <p>The game is not ready yet, so this tutorial only serves a <b>placeholder</b> purpose.</p>
            </>)
        }
    ]} />
}