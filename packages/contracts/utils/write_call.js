import { Keyring, ApiPromise, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { BN } from "@polkadot/util";
import fs from "fs";

/************************/
/*HAS TO be copy pase in*/
/************************/
const contractAdress = "5EM2cVurGbt9otLcnqoSw348wJSSN4keCXGZZzjb3qwzwTNJ";

async function main() {
  const wsProvider = new WsProvider("ws://127.0.0.1:9944");
  const api = await ApiPromise.create({ provider: wsProvider });
  const abi = fs.readFileSync("../target/ink/gem_creator.json", "utf-8");
  const contractAdress = "5EM2cVurGbt9otLcnqoSw348wJSSN4keCXGZZzjb3qwzwTNJ";
  const contract = new ContractPromise(api, abi, contractAdress);

  const keyring = new Keyring({ type: "sr25519" });
  const alicePair = keyring.addFromUri("//Bob");

  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("200000000000"),
    proofSize: new BN("20000000"),
  });
  const storageDepositLimit = null;

  const mintNumber = new BN(Math.floor(Math.random() * 100 + 1));
  console.log(`Token Number ${mintNumber.toString()} will get minted`);
  const unsub = await contract.tx
    .createGem({ gasLimit, storageDepositLimit })
    .signAndSend(alicePair, { alicePair }, async (result) => {});

  const { output } = await contract.query.getGemNumber(alicePair.address, {
    gasLimit,
    storageDepositLimit,
  });
  console.log(`The gemnumber is now ${output.toJSON().ok} `);
}

main().catch(console.error);
