import { ApiPromise, WsProvider } from "@polkadot/api";
import { IBlockchain } from "../IBlockchain";
import { ContractPromise } from "@polkadot/api-contract";

export class PolkadotJSChain implements IBlockchain {
    private _ready: Promise<void>;
    private _wsProvider: WsProvider;
    private _api: ApiPromise;
    private _contracts: Record<string, ContractPromise> = {};

    constructor(
        private _rpcUrl: string,
        private _suri: string = "//Alice",
    ) {
        this._wsProvider = new WsProvider(this._rpcUrl);
        this._api = new ApiPromise({ provider: this._wsProvider });
        this._ready = this._connectToChain();
    }

    private async _connectToChain() {
        await this._api.isReady;
    }

    getApi(): ApiPromise {
        return this._api;
    }

    async getContract(
        opts: {
            name: string
        }
    ): Promise<ContractPromise> {
        await this._ready;
        if (!this._contracts[opts.name]) {
            throw new Error(`Contract ${opts.name} not loaded`);
        }
        return this._contracts[opts.name];
    }

    async loadContract(
        opts: {
            address: string,
            abi: any,
            name: string
        }
    ): Promise<ContractPromise> {
        await this._ready;
        if (this._contracts[opts.name]) {
            throw new Error(`Contract ${opts.name} already loaded`);
        }
        const contract = new ContractPromise(this._api, opts.abi, opts.address);
        this._contracts[opts.name] = contract;
        return contract;
    }

    async signAndSend(tx: any): Promise<any> {
        await this._ready;
        return tx.signAndSend(

        )
    }
}