export interface IGameWallet {
    address: string;
    balance: bigint;
    token: {
        name: string;
        symbol: string;
        decimals: number;
    }
}