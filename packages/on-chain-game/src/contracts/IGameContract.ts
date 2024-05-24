/** Client interface for the game contract */
export interface IGameContract {
    /** Game Contract num_elements method */
    numElements(): Promise<number>;

    /** Game Contract num_recipes method */
    numRecipes(): Promise<number>;

    /** Game Contract buy_offer method */
    buyOffer(): Promise<[number, number]>;

    /** Game Contract buy method */
    buy(itemId: number, N: number): Promise<void>;

    /** Game Contract craft method */
    craft(a: number, b: number): Promise<void>;

    /** Game Contract sacrifice method */
    sacrifice(itemId: number, N: number): Promise<void>;

    /** Game Contract claim_ownership method */
    claimOwnership(): Promise<void>;

    /** Game Contract lock_element_contract method */
    lockElementContract(itemId: number, elementContract: string): Promise<void>;

    /** Game Contract set_buy_offer method */
    setBuyOffer(nativeTokens: number, rewardTierPoints: number): Promise<void>;

    /** Pool data */
    pool(): Promise<[number, number, number]>;
}
