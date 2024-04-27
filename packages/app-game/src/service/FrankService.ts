import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import type { WeightV2 } from "@polkadot/types/interfaces";
import { BN } from "@polkadot/util";

export const rockContractAdress =
  "5G8tYCMLZQYgwE9hkYNq5orJXEDhTCMu6kRa5frW4nY6bVsS";
export const stoneContractAdress =
  "5GexZHnN2FpPD91324YFT1K7oUxugdqycmhRo4irX9CsD8XS";
export const gemCreatorContractAdress =
  "5EM2cVurGbt9otLcnqoSw348wJSSN4keCXGZZzjb3qwzwTNJ";

export function useFrank() {
  async function getRockOwnerOf(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");
    // const rockContractAdress = "";
    const res = await fetch("./rock.json");
    const abi = await res.json();

    const contract = new ContractPromise(api, abi, rockContractAdress);
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

    console.log(
      `Rock (${mintNumber.toString()}) is owned by ${output.toJSON()["ok"]}`,
    );
  }

  async function mintRock(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./rock.json");
    const abi = await res.json();
    // const rockContractAdress = "";
    const contract = new ContractPromise(api, abi, rockContractAdress);

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

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
    console.log(
      `Rock (${mintNumber.toString()}) is minted by ${output.toJSON()["ok"]}`,
    );
  }

  async function getStoneOwnerOf(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");
    // const stoneContractAdress = "";
    const res = await fetch("./rock.json");
    const abi = await res.json();

    const contract = new ContractPromise(api, abi, stoneContractAdress);
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

    console.log(
      `Stone (${mintNumber.toString()}) is owned by ${output.toJSON()["ok"]}`,
    );
  }

  async function mintStone(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./stone.json");
    const abi = await res.json();
    // const stoneContractAdress = "";
    const contract = new ContractPromise(api, abi, stoneContractAdress);

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

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
    console.log(
      `Stone (${mintNumber.toString()}) is minted by ${output.toJSON()["ok"]}`,
    );
  }

  async function createGem() {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./gem_creator.json");
    const abi = await res.json();
    // const gemCreatorContractAdress = "";
    const contract = new ContractPromise(api, abi, gemCreatorContractAdress);

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("200000000000"),
      proofSize: new BN("20000000"),
    });
    const storageDepositLimit = null;

    await contract.tx
      .createGem({ gasLimit, storageDepositLimit })
      .signAndSend(alicePair, (result) => {});

    const { output, result } = await contract.query.getGemNumber(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
    );
    console.log(`The gemnumber is now ${output} `);
    console.log(`The gemnumber is now ${result} `);
  }

  return { getRockOwnerOf, mintRock, getStoneOwnerOf, mintStone, createGem };
}
