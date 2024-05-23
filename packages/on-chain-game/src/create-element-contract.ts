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

    async allowance(owner: string, spender: string): Promise<number> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.allowance(
            await this._chain.getAddress(),
            { gasLimit },
            owner,
            spender
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.allowance", outputJson);
        return outputJson.ok;
    }

    async approve(spender: string, value: number): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const callResult = await this._chain.signAndSend(
            contractApi.tx.approve(
                { gasLimit, storageDepositLimit: null, value: (new BN(N)).mul(new BN(buyOffer[0])) },
                spender,
                value
            )
        );
        console.log("ElementContractImpl.approve", callResult);
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

    async claimOwnership(): Promise<void> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        await this._chain.signAndSend(
            contractApi.tx.claimOwnership(
                { gasLimit, storageDepositLimit: null },
            )
        );
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

    async totalSupply(): Promise<number> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.totalSupply(
            await this._chain.getAddress(),
            { gasLimit }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.totalSupply", outputJson);
        return outputJson.ok;
    }

    transfer(to: string, value: number, data: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    transferFrom(from: string, to: string, value: number, data: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async tokenDecimals(): Promise<number> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.tokenDecimals(
            await this._chain.getAddress(),
            { gasLimit }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.tokenDecimals", outputJson);
        return outputJson.ok;
    }

    async tokenName(): Promise<string> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.tokenName(
            await this._chain.getAddress(),
            { gasLimit }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.tokenName", outputJson);
        return outputJson.ok;
    }

    async tokenSymbol(): Promise<string> {
        const contractApi = await this._chain.getContract({ name: "element_" + this._element.id });
        const api = await this._chain.getApi();
        const gasLimit = api.registry.createType("WeightV2", {
            refTime: new BN("2000000000"),
            proofSize: new BN("200000"),
        });
        const { output } = (await contractApi.query.tokenSymbol(
            await this._chain.getAddress(),
            { gasLimit }
        ));
        const outputJson = output?.toJSON() as any;
        if (!outputJson || outputJson["ok"] === undefined) {
            throw new Error("Invalid output: " + JSON.stringify(outputJson));
        }
        console.log("ElementContractImpl.tokenSymbol", outputJson);
        return outputJson.ok;
    }
}

export function createElementContract(
    deployment: IContractDeployment,
    element: IItem,
    chain: IBlockchain
): IElementContract {
    return new ElementContractImpl(deployment, element, chain);
}
