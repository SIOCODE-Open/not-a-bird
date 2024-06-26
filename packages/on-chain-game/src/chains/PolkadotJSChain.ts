import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { IBlockchain } from "../IBlockchain";
import { ContractPromise } from "@polkadot/api-contract";
import { cryptoWaitReady } from "@polkadot/util-crypto";

export class PolkadotJSChain implements IBlockchain {
    private _ready: Promise<void>;
    private _wsProvider: WsProvider;
    private _api: ApiPromise;
    private _contracts: Record<string, ContractPromise> = {};
    private _keyring: Keyring;
    private _keyPair: any;

    constructor(
        private _rpcUrl: string,
        private _suri: string = "//Alice",
        private _nativeTokenMeta?: {
            name: string,
            symbol: string,
            decimals: number
        }
    ) {
        this._ready = this._connectToChain();
    }

    private async _connectToChain() {
        await cryptoWaitReady();
        this._keyring = new Keyring({ type: "sr25519" });
        this._keyPair = this._keyring.addFromUri(this._suri, { name: "player" });
        this._wsProvider = new WsProvider(this._rpcUrl);
        this._api = new ApiPromise({ provider: this._wsProvider });
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
        return await new Promise<any>(
            async (resolve, reject) => {
                try {
                    await tx.signAndSend(
                        this._keyPair,
                        (result) => {
                            if (result.status.isInBlock) {
                                resolve(result);
                            } else if (result.status.isError) {
                                reject(result);
                            }
                        }
                    );
                } catch (err) {
                    reject(err);
                }
            }
        );
    }

    async getAddress(): Promise<string> {
        await this._ready;
        return this._keyPair.address;
    }

    async getNativeTokenBalance(): Promise<BigInt> {
        await this._ready;
        const { data: { free: balance } } = (await this._api.query.system.account(this._keyPair.address)) as any;
        return BigInt(balance.toString());
    }

    get ready(): Promise<void> {
        return this._ready;
    }

    get rpcUrl(): string {
        return this._rpcUrl;
    }

    async getNativeTokenMetadata(): Promise<{
        name: string,
        symbol: string,
        decimals: number
    }> {
        await this._ready;
        if (!this._nativeTokenMeta) {
            return {
                name: "UNKNOWN",
                symbol: "???",
                decimals: 12
            }
        }
        return this._nativeTokenMeta;
    }
}