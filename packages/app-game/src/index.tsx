import { createRoot } from "react-dom/client";
import { NotABirdApp } from "./NotABirdApp";

async function startGame() {
  const body = document.body;
  const rootEl = body;
  // body.appendChild(rootEl);

  const root = createRoot(rootEl);
  root.render(<NotABirdApp />);
}

startGame()
  .then(() => {
    console.log("Game started");
  })
  .catch((error) => {
    console.error(error);
  });
