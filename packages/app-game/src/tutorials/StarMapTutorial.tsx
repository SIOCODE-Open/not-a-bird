import { Tutorial } from "../components/Tutorial";

export function StarMapTutorial() {
    return <Tutorial steps={[
        {
            title: "The Star Map",
            content: (<>
                <p>Welcome to the Star Map!</p>
                <p>The Star Map allows you to see one <b>region</b> of space at a time.</p>
            </>)
        },
        {
            title: "Regions",
            content: (<>
                <p>Before starting the game, you must select the <b>region</b> of space you want to start in.</p>
                <p>Each region contains <b>star systems</b>, and each star system contains <b>planets</b>.</p>
                <p>Click the various star systems, to preview their attributes.</p>
            </>)
        },
        {
            title: "Onwards ...",
            content: (<>
                <p>To continue, click the <b>Select</b> button on one of the star system's panels.</p>
            </>)
        }
    ]} />
}