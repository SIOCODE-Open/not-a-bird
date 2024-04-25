import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import type { WeightV2 } from "@polkadot/types/interfaces";
import { BN } from "@polkadot/util";
import { useState } from "react";

export function FrankPage(props: { navigate: (path: string) => void }) {
  const [mintNumber, setMintNumber] = useState(new BN(1));
  async function getRock() {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");
    const contractAdress = "5G8tYCMLZQYgwE9hkYNq5orJXEDhTCMu6kRa5frW4nY6bVsS";
    const res = await fetch("./rock.json");
    const abi = await res.json();

    const contract = new ContractPromise(api, abi, contractAdress);
    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

    const { output } = await contract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      new BN(mintNumber),
    );

    console.log("------------------------------------------");
    console.log(
      `Rock(${mintNumber.toString()}) is owned by ${output.toJSON()["ok"]}`,
    );
    console.log("------------------------------------------");
  }

  async function mintRock() {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./rock.json");
    const abi = await res.json();
    const contractAdress = "5G8tYCMLZQYgwE9hkYNq5orJXEDhTCMu6kRa5frW4nY6bVsS";
    const contract = new ContractPromise(api, abi, contractAdress);

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;
    const mintNumber = new BN(Math.floor(Math.random() * 100 + 1));
    setMintNumber(mintNumber);

    await contract.tx
      .mint({ gasLimit, storageDepositLimit }, mintNumber)
      .signAndSend(alicePair, () => {});

    const { output } = await contract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      mintNumber,
    );
    console.log("------------------------------------------");
    console.log(
      `Rock(${mintNumber.toString()}) is minted by ${output.toJSON()["ok"]}`,
    );
    console.log("------------------------------------------");
  }

  return (
    <>
      <div className="flex justify-content column align-center">
        <h1>This is a frank Page</h1>
        <button onClick={async () => getRock()}>
          Get Stone({mintNumber.toString()})
        </button>
        <br />
        <button onClick={async () => mintRock()}>Mint Stone</button>
        <br />
        <hr style={{ borderTop: "1px solid black", width: "200px" }}></hr>
        <button>Mint Rock</button>
        <br />
        <button>Create Gem</button>
      </div>
    </>
  );
}
