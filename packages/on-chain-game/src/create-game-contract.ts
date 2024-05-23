import { IBlockchain } from "./IBlockchain";
import { IContractDeployment, IGameContent } from "@not-a-bird/model";
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
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        await this._chain.signAndSend(
            contractApi.tx.buy(
                { gasLimit, storageDepositLimit: null, value: (new BN(N)).mul(new BN(buyOffer[0])) },
                itemId,
            )
        );
    }

    craft(a: number, b: number): Promise<void> {
        throw new Error("Method not implemented.");
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
            refTime: new BN("2000000000"),
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
        return outputJson.ok.ok;
    }

    sacrifice(itemId: number, N: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    claimOwnership(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    lockElementContract(itemId: number, elementContract: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    setBuyOffer(nativeTokens: number, rewardTierPoints: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export function createGameContract(
    deployment: IContractDeployment,
    content: IGameContent,
    chain: IBlockchain
): IGameContract {
    return new GameContractImpl(deployment, content, chain);
}
