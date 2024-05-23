import { IContractDeployment } from "./IContractDeployment";
import { IGameContent } from "./IGameContent";

export interface IChainDeployment {
    rpcUrl: string;
    gameContract: IContractDeployment;
    elementContracts: Record<number, IContractDeployment>;
    content: IGameContent;
}
