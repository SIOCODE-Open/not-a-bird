import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { BN } from "@polkadot/util";
import fs from "fs";

async function main() {
  const wsProvider = new WsProvider("ws://127.0.0.1:9944");
  const api = await ApiPromise.create({ provider: wsProvider });
  const keyring = new Keyring({ type: "sr25519" });
  const alicePair = keyring.addFromUri("//Alice");

  const abi = fs.readFileSync("./target/ink/contracts.json", "utf-8");
  /************************/
  /*Has to be copy pase in*/
  /************************/
  const contractAdress = "5GHc4V2eg2SJw2c2ZqTpxWn8fEVVczqJd9bJ2nPWiXrcChfE";

  const contract = new ContractPromise(api, abi, contractAdress);

  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("2000000000"),
    proofSize: new BN("200000"),
  });
  const storageDepositLimit = null;

  const { gasRequired, storageDeposit, result, output } =
    await contract.query.ownerOf(
      alicePair.address,
      {
        gasLimit,
        storageDepositLimit,
      },
      new BN(1),
    );

  console.log(output.toHuman());
}

main().catch(console.error);
