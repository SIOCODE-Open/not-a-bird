import { createRoot } from "react-dom/client";
import { NotABirdApp } from "./NotABirdApp";

async function startGame() {
  const rootEl = document.createElement("div");
  rootEl.setAttribute("style", "overflow-y: auto;");
  document.body.appendChild(rootEl);

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
