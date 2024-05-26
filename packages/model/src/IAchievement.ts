export interface IAchievement {
    id: string;
    name: string;
    description: string;
    awarded?: {
        date: string;
    }
    minted?: {
        date: string;
        address: string;
        txHash: string;
    }
}
