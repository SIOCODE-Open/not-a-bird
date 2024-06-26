import { useRef, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { GamePage } from "./pages/GamePage";
import { FrankPage } from "./pages/FrankPage";
import { MarcelPage } from "./pages/MarcelPage";
import { GameOverPage } from "./pages/GameOverPage";
import { ItemsWikiPage } from "./pages/ItemsWikiPage";
import { MergicanPage } from "./pages/MergicanPage";
import { ParticlePage } from "./pages/ParticlePage";
import { ImageEffectPage } from "./pages/ImageEffectPage";
import { POCGamePage } from "./pages/POCGamePage";
import { LandingPageV2 } from "./pages/LandingPageV2";
import { LearnPage } from "./pages/LearnPage";
import { ParticleImage } from "./pages/Plaground2";
import { FranksCard } from "./pages/FranksCard";
import { ModalContainer } from "./modals/ModalContainer";

const pages: Array<{ path: string; component: any }> = [
  { path: "/landing-page-old", component: LandingPage },
  { path: "/game", component: GamePage },
  { path: "/game-over", component: GameOverPage },
  { path: "/frank", component: FrankPage },
  { path: "/marcel", component: MarcelPage },
  { path: "/items-wiki", component: ItemsWikiPage },
  { path: "/mergican", component: MergicanPage },
  { path: "/particle", component: ParticlePage },
  { path: "/imageEffect", component: ImageEffectPage },
  { path: "/pocgame", component: POCGamePage },
  { path: "/landing-page", component: LandingPageV2 },
  { path: "/learn", component: LearnPage },
  { path: "/playground", component: ParticleImage },
  { path: "/franks-card", component: FranksCard },
];

export function NotABirdApp() {
  const [currentPage, setCurrentPage] = useState("/landing-page");
  const currentCompRef = useRef(LandingPageV2);

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
      <ModalContainer navigate={navigate} />
    </>
  );
}
