import { IContractDeployment } from "./IContractDeployment";

export interface IChainDeployment {
    rpcUrl: string;
    gameContract: IContractDeployment;
    elementContracts: Record<number, IContractDeployment>;
}