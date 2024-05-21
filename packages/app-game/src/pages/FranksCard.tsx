import { BulmaButton } from "../components/BulmaButton";
import { CanvasImage } from "../components/CanvasImage";
import { CSSProperties, ReactNode } from "react";

const FranksCard = (props: { navigate: (path: string) => { void } }) => {
  return (
    <div className="card">
      <div className="card-image">
        <CanvasImage
          width={window.innerWidth}
          height={window.innerWidth}
          /*imagePath=""*/
        />
      </div>
      <div className="card-content">
        <h1 className="title">Monkey</h1>
        <p>
          <i>
            A monekey living in the desert. Got bidden by a Spider. Now he
            glows. That happens when you get bidden by spider. I swear.{" "}
          </i>
        </p>
        <p>
          You have <code>5</code> Monkeys
        </p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <div className="select is-rounded">
            <select className="letterspacing-2" title="Craft ...">
              <option>Craft ...</option>
              <option>Element A</option>
            </select>
          </div>
        </div>
        <div className="card-footer-item">
          <BulmaButton className="letterspacing-2">Gain</BulmaButton>
        </div>
        <div className="card-footer-item">
          <BulmaButton className="letterspacing-2">Sacrifice</BulmaButton>
        </div>
        <div className="card-footer-item">
          <BulmaButton className="letterspacing-2">Transfer</BulmaButton>
        </div>
      </footer>
    </div>
  );
};

export { FranksCard };
