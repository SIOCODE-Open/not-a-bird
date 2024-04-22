import { useRef, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { GamePage } from "./pages/GamePage";
import { GameOverPage } from "./pages/GameOverPage";
import { StarMapPage } from "./pages/StarMapPage";
import { StarSystemPage } from "./pages/StarSystemPage";

const pages: Array<{ path: string, component: any }> = [
    { path: "/landing-page", component: LandingPage },
    { path: "/star-map", component: StarMapPage },
    { path: "/star-system", component: StarSystemPage },
    { path: "/game", component: GamePage },
    { path: "/game-over", component: GameOverPage }
];

export function NotABirdApp() {
    const [currentPage, setCurrentPage] = useState("/landing-page");
    const currentCompRef = useRef(LandingPage);

    const navigate = (path: string) => {
        if (path === currentPage) {
            return;
        }

        let foundPage = pages.find(page => page.path === path);
        if (foundPage) {
            setCurrentPage(path);
            currentCompRef.current = foundPage.component;
        } else {
            alert(`Page not found: ${path}`);
        }
    };

    return <>
        <currentCompRef.current navigate={navigate} />
    </>
}