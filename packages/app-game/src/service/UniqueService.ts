import Sdk from "@unique-nft/sdk";
import { KeyringProvider } from "@unique-nft/accounts/keyring";
import { useState } from "react";

export function useUnique(MENOMIC: string) {
  const [collectionId, setCollectionId] = useState(0);

  async function createCollection() {
    const account = await KeyringProvider.fromMnemonic(MENOMIC);
    const address = account.getAddress();

    const sdk = new Sdk({
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account,
    });
    const { parsed, error } = await sdk.collection.create.submitWaitResult({
      address,
      name: "Test collection",
      description: "My test collection",
      tokenPrefix: "TST",
    });

    if (error) {
      console.log("create collection error", error);
    }
    const collectionId = parsed?.collectionId; /*as number*/
    setCollectionId(collectionId);
    console.log(`Collection created. Id: ${collectionId}`);
  }

  async function mint() {
    const account = await KeyringProvider.fromMnemonic(MENOMIC);
    const address = account.getAddress();

    const sdk = new Sdk({
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account,
    });
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

  async function burn(tokenId: number) {
    const account = await KeyringProvider.fromMnemonic(MENOMIC);
    const address = account.getAddress();

    const sdk = new Sdk({
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account,
    });
    const burnResult = await sdk.token.burn.submitWaitResult({
      address,
      collectionId,
      tokenId: tokenId,
    });
    const tokenIdBurned = burnResult.parsed?.tokenId; /*as number*/
    console.log(`Burned token ${tokenIdBurned} in collection ${collectionId}`);
  }
  return {
    createCollection,
    mint,
    burn,
  };
}
