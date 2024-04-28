import { BN } from "@polkadot/util";
import { useState } from "react";
import { useFrank } from "../service/FrankService";

export function FrankPage(props: { navigate: (path: string) => void }) {
  const [mintNumber, setMintNumber] = useState(new BN(1));
  const [crysmetCount, setCrysmetCount] = useState("0");
  const {
    mintMetal,
    getMetalOwnerOf,
    getCrystalOwnerOf,
    mintCrystal,
    createMetcrys,
    getMetcrysCount,
  } = useFrank();

  return (
    <>
      <div className="flex justify-content column align-center">
        <h1>This is a frank Page</h1>

        <button onClick={async () => getMetalOwnerOf(mintNumber)}>
          Get Metal({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintMetal(mintNumber)}>Mint Metal</button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>

        <br />
        <button onClick={async () => getCrystalOwnerOf(mintNumber)}>
          Get Crystal({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintCrystal(mintNumber)}>
          Mint Crystal
        </button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>

        <br />
        <button
          onClick={async () => {
            const counto = await getMetcrysCount();
            setCrysmetCount(counto);
          }}
        >
          Get Crysmet({crysmetCount})
        </button>
        <br />
        <button onClick={async () => createMetcrys()}>Create Crysmet</button>
      </div>
    </>
  );
}
