import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import type { WeightV2 } from "@polkadot/types/interfaces";
import { BN } from "@polkadot/util";

export const metalContractAdress =
  "5DivQJzBkaLJJNVUiSdJs4aWQM7MepJk5MdRZwonH9w2T9PB";
export const crystalContractAdress =
  "5C5bQbCjtHU4VgatZucseJMV3uWAW4SrS3T635MUpAbWWrGR";
export const metcrysCreatorContractAdress =
  "5EgJWjqMxMaWe4KaJU2jTfpteRnr2NkFV65687iPkjf1A58z";

export function useFrank() {
  async function getMetalOwnerOf(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");
    const res = await fetch("./metal.json");
    const abi = await res.json();

    const metalContract = new ContractPromise(api, abi, metalContractAdress);
    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

    const { output } = await metalContract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      new BN(mintNumber),
    );

    console.log(
      `Metal (${mintNumber.toString()}) is owned by ${output.toJSON()["ok"]}`,
    );
  }

  async function mintMetal(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./metal.json");
    const abi = await res.json();
    // const rockContractAdress = "";
    const metalContract = new ContractPromise(api, abi, metalContractAdress);

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

    await metalContract.tx
      .mint({ gasLimit, storageDepositLimit }, mintNumber)
      .signAndSend(alicePair, () => {});

    const { output } = await metalContract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      mintNumber,
    );
    console.log(
      `Metal (${mintNumber.toString()}) is minted by ${output.toJSON()["ok"]}`,
    );
  }

  async function getCrystalOwnerOf(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");
    const res = await fetch("./metal.json");
    const abi = await res.json();

    const crystalContract = new ContractPromise(
      api,
      abi,
      crystalContractAdress,
    );
    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

    const { output } = await crystalContract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      new BN(mintNumber),
    );

    console.log(
      `Crystal (${mintNumber.toString()}) is owned by ${output.toJSON()["ok"]}`,
    );
  }

  async function mintCrystal(mintNumber: BN) {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./crystal.json");
    const abi = await res.json();

    const crystalContract = new ContractPromise(
      api,
      abi,
      crystalContractAdress,
    );

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("2000000000"),
      proofSize: new BN("200000"),
    });
    const storageDepositLimit = null;

    await crystalContract.tx
      .mint({ gasLimit, storageDepositLimit }, mintNumber)
      .signAndSend(alicePair, () => {});

    const { output } = await crystalContract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      mintNumber,
    );
    console.log(
      `Crystal (${mintNumber.toString()}) is minted by ${output.toJSON()["ok"]}`,
    );
  }

  async function createMetcrys() {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./metcrys_creator.json");
    const abi = await res.json();

    const metcrysCreatorContract = new ContractPromise(
      api,
      abi,
      metcrysCreatorContractAdress,
    );

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("200000000000"),
      proofSize: new BN("20000000"),
    });
    const storageDepositLimit = null;

    await metcrysCreatorContract.tx
      .createGem({ gasLimit, storageDepositLimit })
      .signAndSend(alicePair, (result) => {});

    const { output, result } = await metcrysCreatorContract.query.getGemNumber(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
    );
    console.log(`The metcrys is minted`);
    console.log(`The metcrys count is now ${output.toJSON()["ok"]} `);
  }

  async function getMetcrysCount() {
    const wsProvider = new WsProvider("ws://127.0.0.1:9944");
    const api = await ApiPromise.create({ provider: wsProvider });
    const res = await fetch("./metcrys_creator.json");
    const abi = await res.json();

    const metcrysCreatorContract = new ContractPromise(
      api,
      abi,
      metcrysCreatorContractAdress,
    );

    const keyring = new Keyring({ type: "sr25519" });
    const alicePair = keyring.addFromUri("//Alice");

    const gasLimit: WeightV2 = api.registry.createType("WeightV2", {
      refTime: new BN("200000000000"),
      proofSize: new BN("20000000"),
    });
    const storageDepositLimit = null;

    const { output, result } = await metcrysCreatorContract.query.getGemNumber(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
    );
    console.log(`The metcrys count is now ${output.toJSON()["ok"]} `);
    return `${output.toJSON()["ok"]}`;
  }

  return {
    getMetalOwnerOf,
    mintMetal,
    getCrystalOwnerOf,
    mintCrystal,
    createMetcrys,
    getMetcrysCount,
  };
}
