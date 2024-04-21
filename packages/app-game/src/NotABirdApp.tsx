import { useRef, useState } from "react";
import { LandingPage } from "./pages/LandingPage";

export function NotABirdApp() {
    const [currentPage, setCurrentPage] = useState("/landing-page");
    const currentCompRef = useRef(LandingPage);

    const navigate = (path: string) => {
        if (path === currentPage) {
            return;
        }

        if (path === "/landing-page") {
            setCurrentPage("/landing-page");
            currentCompRef.current = LandingPage;
        } else {
            alert(`Unknown path: ${path}`);
        }
    };

    return <>
        <currentCompRef.current navigate={navigate} />
    </>
}