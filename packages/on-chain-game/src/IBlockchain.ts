import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";

export interface IBlockchain {
    readonly rpcUrl: string;
    readonly ready: Promise<void>;
    
    getApi(): ApiPromise;
    getContract(
        opts: {
            name: string
        }
    ): Promise<ContractPromise>;
    loadContract(
        opts: {
            address: string,
            abi: any,
            name: string
        }
    ): Promise<ContractPromise>;
    signAndSend(tx: any): Promise<any>;

}