import { Keyring, ApiPromise, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { BN } from "@polkadot/util";
import fs from "fs";

async function main() {
  const wsProvider = new WsProvider("ws://127.0.0.1:9944");
  const api = await ApiPromise.create({ provider: wsProvider });
  const abi = fs.readFileSync("./target/ink/contracts.json", "utf-8");
  const contractAdress = "5GHc4V2eg2SJw2c2ZqTpxWn8fEVVczqJd9bJ2nPWiXrcChfE";
  const contract = new ContractPromise(api, abi, contractAdress);

  const keyring = new Keyring({ type: "sr25519" });
  const alicePair = keyring.addFromUri("//Bob");

  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("2000000000"),
    proofSize: new BN("200000"),
  });
  const storageDepositLimit = null;

  const mintNumber = new BN(Math.floor(Math.random() * 100 + 1));

  console.log(`Token Number ${mintNumber.toString()} will get minted`);
  await contract.tx
    .mint({ gasLimit, storageDepositLimit }, mintNumber)
    .signAndSend(alicePair, (result) => {});

  const { output } = await contract.query.ownerOf(
    alicePair.address,
    {
      gasLimit,
      storageDepositLimit,
    },
    mintNumber,
  );
  console.log(
    `Token ${mintNumber.toString()} is owned by ${output.toJSON().ok} `,
  );
}

main().catch(console.error);
