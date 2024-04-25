import { BN } from "@polkadot/util";
import { useState } from "react";
import { useFrank } from "../service/FrankService";

export function FrankPage(props: { navigate: (path: string) => void }) {
  const [mintNumber, setMintNumber] = useState(new BN(1));
  const { mintRock, getRockOwnerOf, getStoneOwnerOf, mintStone, createGem } =
    useFrank();

  return (
    <>
      <div className="flex justify-content column align-center">
        <h1>This is a frank Page</h1>

        <button onClick={async () => getRockOwnerOf(mintNumber)}>
          Get Rock({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintRock(mintNumber)}>Mint Rock</button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>

        <br />
        <button onClick={async () => getStoneOwnerOf(mintNumber)}>
          Get Stone({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintStone(mintNumber)}>Mint Stone</button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>

        <br />
        <button onClick={async () => createGem()}>Create Gem</button>
      </div>
    </>
  );
}
