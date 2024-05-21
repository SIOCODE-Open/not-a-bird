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
        <h1 className="title">Monkey </h1>
        <p>
          <i>
            This is monkey. Monkey is his name. When he was a little, monkey he
            had an awfull expirience. He got bidden by spider. A radioactive
            spider. Since then, he is glowing and shining in the dark. Other
            Monkeys excluded him. That just made him stronger. Now he fights for
            Anarchy in the forest of his being. Get appreciated from all other
            monkeys. He never steps back, because he is THE glowing monkey.
          </i>
        </p>
        {/*-------------------TABLE-------------*/}

        <br />

        <details>
          <summary>More Information</summary>
          <div className="column is-4">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <th>Artist</th>
                  <td>
                    <code>Frank</code>
                  </td>
                </tr>
                <tr>
                  <th>Tier</th>
                  <td>
                    <code>1</code>
                  </td>
                </tr>
                <tr>
                  <th>Dependened Art</th>
                  <td>
                    <code>5</code>
                  </td>
                </tr>
                <tr>
                  <th>Total Mint</th>
                  <td>
                    <code>523</code>
                  </td>
                </tr>
                <tr>
                  <th>Owned by you</th>
                  <td>
                    <code>8</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
        {/*-------------------TABLE-------------*/}
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
          Mint
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
