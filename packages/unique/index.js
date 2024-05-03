import Sdk from "@unique-nft/sdk";
import { KeyringProvider } from "@unique-nft/accounts/keyring";

async function main() {
  const account = await KeyringProvider.fromMnemonic(
    "INSERT YOUR POLKADOTJS WALLET MENOMIC",
  );
  const address = account.getAddress();

  const sdk = new Sdk({
    baseUrl: "https://rest.unique.network/opal/v1",
    signer: account,
  });

  ////////////////////////////////////
  // Create collection - quick simple way
  ////////////////////////////////////
  // const { parsed, error } = await sdk.collection.create.submitWaitResult({
  //   address,
  //   name: "Test collection",
  //   description: "My test collection",
  //   tokenPrefix: "TST",
  // });
  //
  // if (error) {
  //   console.log("create collection error", error);
  //   process.exit();
  // }
  // const collectionId = parsed?.collectionId; /*as number*/
  // console.log(`Collection created. Id: ${collectionId}`);

  ////////////////////////////////////
  // Burn token
  ////////////////////////////////////
  const collectionId = 2716;
  const burnResult = await sdk.token.burn.submitWaitResult({
    address,
    collectionId,
    tokenId: 2,
  });
  const tokenIdBurned = burnResult.parsed?.tokenId; /*as number*/
  console.log(`Burned token ${tokenIdBurned} in collection ${collectionId}`);

  console.log("-------------------------------------------");

  ////////////////////////////////////
  // Mint token
  ////////////////////////////////////
  const result = await sdk.token.create.submitWaitResult({
    address,
    collectionId,
    data: {
      image: {
        ipfsCid: "QmcAcH4F9HYQtpqKHxBFwGvkfKb8qckXj2YWUrcc8yd24G/image1.png",
      },
      name: {
        _: "My token",
      },
      description: {
        _: "Sample token",
      },
    },
  });

  const tokenId = result.parsed?.tokenId; /*as number*/

  console.log(`Created token ${tokenId} in collection ${collectionId}`);
}

main().catch((error) => {
  console.error(error);
});
