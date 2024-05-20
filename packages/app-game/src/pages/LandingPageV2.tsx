import { LandingPageV2_Navbar } from "./LandingPageV2_Navbar";

export function LandingPageV2(
    props: {
        navigate: (path: string) => void
    }
) {
    return <>
        <section className="hero is-link is-fullheight-with-navbar">
            <div className="hero-head">
                <LandingPageV2_Navbar navigate={props.navigate} />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="title">Welcome to <b>Unnamed Game</b>!</p>
                    <p className="subtitle">
                        <button className="button is-primary is-small is-rounded my" onClick={() => props.navigate("/pocgame")}>Play</button>
                    </p>
                </div>
            </div>
        </section>
    </>;
}