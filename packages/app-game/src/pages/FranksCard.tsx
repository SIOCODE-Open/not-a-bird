import { BulmaButton } from "../components/BulmaButton";
import { CanvasImage } from "../components/CanvasImage";
import { EmojioneMonotonePistol } from "../components/EmojioneMonotonePistol";
import { EmojioneMonotoneDollarBanknote } from "../components/EmojioneMonotoneDollarBanknote";
import { EmojioneMonotoneAirplane } from "../components/EmojioneMonotoneAirplane";

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
        <br />
        <p>
          Artists: <code>Mark</code>
        </p>
        <p>
          Tier: <code>1</code>
        </p>
        <p>
          Dependened Art: <code>5</code>
        </p>
        <p>
          Total Mint: <code>523</code>
        </p>
        <p>
          Owned by you: <code>5</code>
        </p>
      </div>
      <div className="column">
        <div className="select is-rounded is-large is-fullwidth">
          <select className="letterspacing-2">
            <option disabled selected value="">
              Craft
            </option>
            <option>Element B</option>
            <option>Element A</option>
          </select>
        </div>
        <BulmaButton className="letterspacing-2 is-large is-fullwidth">
          <EmojioneMonotoneDollarBanknote className="mr-2" />
          Gain
        </BulmaButton>
        <BulmaButton className="letterspacing-2 is-large is-fullwidth">
          <EmojioneMonotonePistol className="mr-2" /> Sacrifice
        </BulmaButton>
        <BulmaButton className="letterspacing-2 is-large is-fullwidth">
          <EmojioneMonotoneAirplane className="mr-2 " />
          Transfer
        </BulmaButton>
      </div>
    </div>
  );
};

export { FranksCard };
