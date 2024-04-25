import { BN } from "@polkadot/util";
import { useState } from "react";
import { useFrank } from "../service/FrankService";

export function FrankPage(props: { navigate: (path: string) => void }) {
  const [mintNumber, setMintNumber] = useState(new BN(2));
  const { mintRock, getRockOwnerOf } = useFrank();

  return (
    <>
      <div className="flex justify-content column align-center">
        <h1>This is a frank Page</h1>
        <button onClick={async () => getRockOwnerOf(mintNumber)}>
          Get Stone({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintRock(mintNumber)}>Mint Stone</button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>
        <button>Mint Rock</button>
        <br />
        <button>Create Gem</button>
      </div>
    </>
  );
}
