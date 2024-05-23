export interface IDeployableGame {
    name: string;
    description: string;
    gameContract: any;
    elementContracts: Record<number, any>;
    otherNames: {
        camelCase: string;
        kebabCase: string;
        pascalCase: string;
        snakeCase: string;
        constantCase: string;
    }
}
