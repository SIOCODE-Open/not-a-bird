export function LandingPageV2_Navbar(
    props: {
        navigate: (path: string) => void
    }
) {
    return <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <img src="https://placehold.it/112x28" alt="Logo" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="#">
                    Home
                </a>

                <a className="navbar-item" onClick={() => props.navigate('/learn')}>
                    Learn
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" onClick={() => props.navigate('/pocgame')}>
                            <strong>Play</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}
