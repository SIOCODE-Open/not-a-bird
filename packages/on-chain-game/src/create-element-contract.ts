import { IContractDeployment } from "./IContractDeployment";
import { IElementContract } from "./contracts/IElementContract";

class ElementContractImpl implements IElementContract {
    constructor(
        private _deployment: IContractDeployment
    ) { }

    allowance(owner: string, spender: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

    approve(spender: string, value: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    balanceOf(owner: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

    claimOwnership(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    decreaseAllowance(spender: string, deltaValue: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    increaseAllowance(spender: string, deltaValue: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    lockGameContract(gameContract: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    totalSupply(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    transfer(to: string, value: number, data: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    transferFrom(from: string, to: string, value: number, data: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    tokenDecimals(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    tokenName(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    tokenSymbol(): Promise<string> {
        throw new Error("Method not implemented.");
    }
}

export function createElementContract(
    deployment: IContractDeployment
): IElementContract {
    return new ElementContractImpl(deployment);
}
