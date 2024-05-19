export interface IGameWallet {
    address: string;
    balance: number;
    token: {
        name: string;
        symbol: string;
        decimals: number;
    }
}