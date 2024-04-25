import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { BN } from "@polkadot/util";
import { CodePromise } from "@polkadot/api-contract";
import fs from "fs";

async function main() {
  console.log(`⚙️ Deploying contract code to chain ...`);

  const wsProvider = new WsProvider("ws://127.0.0.1:9944");
  const api = await ApiPromise.create({ provider: wsProvider });
  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("2000000000"),
    proofSize: new BN("200000"),
  });
  const storageDepositLimit = null;
  const abi = fs.readFileSync("./target/ink/contracts.json", "utf-8");
  const wasm = fs.readFileSync("./target/ink/contracts.wasm");

  const codeObject = new CodePromise(api, abi, wasm);
  const newCodeTx = codeObject.tx.new({
    gasLimit: gasLimit,
    storageDepositLimit,
  });

  const keyring = new Keyring({ type: "sr25519" });
  const user = keyring.addFromUri("//Alice");
  const unsub = await newCodeTx.signAndSend(user, ({ contract, status }) => {
    if (status.isInBlock) {
      console.log(`⚙️ In block!`);
      console.log(
        `⚙️ Code deployed to chain, address is ${contract.address.toString()}`,
      );
      unsub();
    }
  });
}

main().catch(console.error);
