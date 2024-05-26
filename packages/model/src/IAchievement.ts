export interface IAchievement {
    id: string;
    name: string;
    description: string;
    awarded?: {
        date: string;
    }
    minted?: {
        date: string;
        collectionId: string;
        tokenId: string;
    }
}
