import { Tutorial } from "../components/Tutorial";

export function StarSystemTutorial() {
    return <Tutorial steps={[
        {
            title: "The Star System",
            content: (<>
                <p>Welcome to the Star System!</p>
                <p>The Star System view allows you to see one <b>star system</b> at a time.</p>
            </>)
        },
        {
            title: "Planets",
            content: (<>
                <p>Each star system contains <b>planets</b>.</p>
                <p>Each planet has its own <b>inventory slots</b>, and <b>resources</b>.</p>
                <p>You can learn more about planets, by clicking on them.</p>
            </>)
        },
        {
            title: "Onwards ...",
            content: (<>
                <p>To continue, click the button of the planet you want to start on.</p>
                <p>This will begin the game.</p>
            </>)
        }
    ]} />
}