export interface IDeployableGame {
    name: string;
    description: string;
    gameContract: any;
    elementContracts: Record<number, any>;
}
