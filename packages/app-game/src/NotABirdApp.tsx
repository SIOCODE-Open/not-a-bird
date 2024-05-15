import { useRef, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { GamePage } from "./pages/GamePage";
import { FrankPage } from "./pages/FrankPage";
import { GameOverPage } from "./pages/GameOverPage";
import { StarMapPage } from "./pages/StarMapPage";
import { StarSystemPage } from "./pages/StarSystemPage";
import { ItemsWikiPage } from "./pages/ItemsWikiPage";
import { MergicanPage } from "./pages/MergicanPage";

const pages: Array<{ path: string; component: any }> = [
  { path: "/landing-page", component: LandingPage },
  { path: "/star-map", component: StarMapPage },
  { path: "/star-system", component: StarSystemPage },
  { path: "/game", component: GamePage },
  { path: "/game-over", component: GameOverPage },
  { path: "/frank", component: FrankPage },
  { path: "/items-wiki", component: ItemsWikiPage },
  { path: "/mergican", component: MergicanPage },
];

export function NotABirdApp() {
  const [currentPage, setCurrentPage] = useState("/mergican");
  const currentCompRef = useRef(MergicanPage);

  const navigate = (path: string) => {
    if (path === currentPage) {
      return;
    }

    let foundPage = pages.find((page) => page.path === path);
    if (foundPage) {
      setCurrentPage(path);
      currentCompRef.current = foundPage.component;
    } else {
      alert(`Page not found: ${path}`);
    }
  };

  return (
    <>
      <currentCompRef.current navigate={navigate} />
    </>
  );
}
