import { BulmaButton } from "../components/BulmaButton"
import { LandingPageV2_Navbar } from "./LandingPageV2_Navbar"

export function LearnPage(
    props: {
        navigate: (path: string) => void
    }
) {
    return <>
        <section className="hero is-success is-fullheight-with-navbar">
            <div className="hero-head">
                <LandingPageV2_Navbar navigate={props.navigate} />
            </div>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Learn
                    </h1>
                    <h2 className="subtitle">
                        Learn about the game
                    </h2>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h1 className="title">This is the Learn Page</h1>
                <p className="subtitle">This is the subtitle</p>
                <BulmaButton color="primary" outlined onClick={() => props.navigate("/pocgame")}>Now I'm ready to play the game!</BulmaButton>
                <BulmaButton color="link" outlined onClick={() => props.navigate("/landing-page-v2")}>Go back to landing page</BulmaButton>
            </div>
        </section>
    </>
}