import { IBlockchain } from "./IBlockchain";
import { IContractDeployment, IGameContent, IRecipe } from "@not-a-bird/model";
import { IGameContract } from "./contracts/IGameContract";
import { BN } from "@polkadot/util";

class GameContractImpl implements IGameContract {
    constructor(
        private _deployment: IContractDeployment,
        private _content: IGameContent,
        private _chain: IBlockchain
    ) {
        this._chain.loadContract({
            address: this._deployment.address,
            name: "game",
            abi: this._content.contractAbi!
        });
    }

    async buy(itemId: number, N: number): Promise<void> {
        const buyOffer = await this.buyOffer();
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        const transferValue = N * buyOffer[0];
        // console.log("GameContractImpl.buy", itemId, N, buyOffer, transferValue);
        const callResult = await this._chain.signAndSend(
            contractApi.tx.buy(
                { gasLimit, storageDepositLimit: null, value: `1000000000000` },
                itemId,
            )
        );
        // console.log("GameContractImpl.buy", callResult);
    }

    async craft(a: number, b: number): Promise<void> {
        let foundRecipe: IRecipe | undefined = undefined;
        for (let recipe of this._content.recipes) {
            if (recipe.a.id === a && recipe.b.id === b) {
                foundRecipe = recipe;
                break;
            }
            if (recipe.a.id === b && recipe.b.id === a) {
                foundRecipe = recipe;
                break;
            }
        }

        // console.log("GameContractImpl.craft", a, b, foundRecipe);

        if (foundRecipe) {
            const contractApi = await this._chain.getContract({ name: "game" });
            const api = await this._chain.getApi();
            const gasLimit = api.registry.createType("WeightV2", {
                refTime: new BN("200000000000"),
                proofSize: new BN("2000000"),
            });
            await this._chain.signAndSend(
                contractApi.tx.craft(
                    { gasLimit, storageDepositLimit: null },
                    foundRecipe.id,
                )
            );
        }
    }

    async numElements(): Promise<number> {
        return this._content.items.length;
    }

    async numRecipes(): Promise<number> {
        return this._content.recipes.length;
    }

    async buyOffer(): Promise<[number, number]> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        const { result, output } = (await contractApi.query.buyOffer(
            await this._chain.getAddress(),
            { gasLimit }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output");
        }
        // console.log("GameContractImpl.buyOffer", outputJson);
        return outputJson.ok.ok;
    }

    async sacrifice(itemId: number, N: number): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        for (let i = 0; i < N; i++) {
            await this._chain.signAndSend(
                contractApi.tx.sacrifice(
                    { gasLimit, storageDepositLimit: null },
                    itemId,
                )
            );
        }
    }

    async claimOwnership(): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        await this._chain.signAndSend(
            contractApi.tx.claimOwnership(
                { gasLimit, storageDepositLimit: null },
            )
        );
    }

    async lockElementContract(itemId: number, elementContract: string): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        await this._chain.signAndSend(
            contractApi.tx.lockElementContract(
                { gasLimit, storageDepositLimit: null },
                itemId,
                elementContract
            )
        );
    }

    async setBuyOffer(nativeTokens: number, rewardTierPoints: number): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        await this._chain.signAndSend(
            contractApi.tx.setBuyOffer(
                { gasLimit, storageDepositLimit: null },
                nativeTokens,
                rewardTierPoints
            )
        );
    }

    async prize(): Promise<number> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        const { result, output } = (await contractApi.query.prize(
            await this._chain.getAddress(),
            { gasLimit, storageDepositLimit: null }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output");
        }
        return outputJson.ok.ok;
    }

    async pool(): Promise<[number, number, number]> {
        const contractApi = await this._chain.getContract({ name: "game" });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("20000000000"),
            proofSize: new BN("200000"),
        });
        const { result, output } = (await contractApi.query.pool(
            await this._chain.getAddress(),
            { gasLimit, storageDepositLimit: null }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            // console.log("GameContractImpl.pool ***", outputJson);
            throw new Error("Invalid output");
        }
        // console.log("GameContractImpl.pool", outputJson);
        return outputJson.ok.ok;
    }
}

export function createGameContract(
    deployment: IContractDeployment,
    content: IGameContent,
    chain: IBlockchain
): IGameContract {
    return new GameContractImpl(deployment, content, chain);
}
