import { IBlockchain } from "./IBlockchain";
import { IContractDeployment, IGameContent } from "@not-a-bird/model";
import { IGameContract } from "./contracts/IGameContract";

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

    buy(itemId: number, N: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    craft(a: number, b: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    numElements(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    numRecipes(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    buyOffer(): Promise<[number, number]> {
        throw new Error("Method not implemented.");
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
