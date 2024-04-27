import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
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
  const keyring = new Keyring({ type: "sr25519" });
  const alicePair = keyring.addFromUri("//Alice");

  const abi = fs.readFileSync("../target/ink/gem_creator.json", "utf-8");

  const contract = new ContractPromise(api, abi, contractAdress);

  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("2000000000"),
    proofSize: new BN("200000"),
  });
  const storageDepositLimit = null;

  const { gasRequired, storageDeposit, result, output } =
    await contract.query.getGemNumber(alicePair.address, {
      gasLimit,
      storageDepositLimit,
    });

  console.log(output.toHuman());
}

main().catch(console.error);
