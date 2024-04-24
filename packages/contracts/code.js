/**
 * DOESNT WORK
 * https://polkadot.js.org/docs/api-contract/start/code
 * the goal would be to instaniate a contract without writng
 *`cargo contract instaniate --suri //Alice --execute`
 */

import { ApiPromise } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { CodePromise } from "@polkadot/api-contract";
import fs from "fs";

async function main() {
  const api = await ApiPromise.create({ rpc: "127.0.0.1:9944" });
  const keyring = new Keyring({ type: "sr25519" });
  const alicePair = keyring.addFromUri("//Alice");

  const contractJson = JSON.parse(
    fs.readFileSync("./target/ink/contracts.json", "utf8"),
  );
  const wasm = fs.readFileSync("./target/ink/contracts.wasm");
  const code = new CodePromise(api, contractJson, wasm);

  const gasLimit = 100000n * 1000000n;
  const storageDepositLimit = null;

  const tx = code.tx.new({ gasLimit, storageDepositLimit });

  let address;

  const unsub = await tx.signAndSend(alicePair, ({ contract, status }) => {
    if (status.isInBlock || status.isFinalized) {
      address = contract.address.toString();
      unsub();
    }
  });
}

main().catch(console.error);
