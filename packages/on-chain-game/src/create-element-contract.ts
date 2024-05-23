import { IItem, IContractDeployment } from "@not-a-bird/model";
import { IElementContract } from "./contracts/IElementContract";
import { IBlockchain } from "./IBlockchain";
import { BN } from "@polkadot/util";

class ElementContractImpl implements IElementContract {
    constructor(
        private _deployment: IContractDeployment,
        private _element: IItem,
        private _chain: IBlockchain
    ) {
        this._chain.loadContract({
            address: this._deployment.address,
            name: "element_" + this._element.id,
            abi: this._element.contractAbi!
        });
    }

    allowance(owner: string, spender: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

    approve(spender: string, value: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async balanceOf(owner: string): Promise<number> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.balanceOf(
            await this._chain.getAddress(),
            { gasLimit },
            owner
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.balanceOf", outputJson);
        return outputJson.ok;

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
    deployment: IContractDeployment,
    element: IItem,
    chain: IBlockchain
): IElementContract {
    return new ElementContractImpl(deployment, element, chain);
}
