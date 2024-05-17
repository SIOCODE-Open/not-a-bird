import { IContractDeployment } from "./IContractDeployment";
import { IGameContract } from "./contracts/IGameContract";

class GameContractImpl implements IGameContract {
    constructor(
        private _deployment: IContractDeployment
    ) { }

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
    deployment: IContractDeployment
): IGameContract {
    return new GameContractImpl(deployment);
}
