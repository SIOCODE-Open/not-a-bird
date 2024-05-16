/** PSP-22 compatible game smart contract for element 'lava' */
export interface ILavaContract {
    /** PSP-22 total_supply method */
    totalSupply(): Promise<number>;

    /** PSP-22 balance_of method */
    balanceOf(owner: string): Promise<number>;

    /** PSP-22 allowance method */
    allowance(owner: string, spender: string): Promise<number>;

    /** PSP-22 transfer method */
    transfer(to: string, value: number, data: string): Promise<void>;

    /** PSP-22 transfer_from method */
    transferFrom(from: string, to: string, value: number, data: string): Promise<void>;

    /** PSP-22 approve method */
    approve(spender: string, value: number): Promise<void>;

    /** PSP-22 increase_allowance method */
    increaseAllowance(spender: string, deltaValue: number): Promise<void>;

    /** PSP-22 decrease_allowance method */
    decreaseAllowance(spender: string, deltaValue: number): Promise<void>;

    /** PSP-22 Metadata token_name method */
    tokenName(): Promise<string>;

    /** PSP-22 Metadata token_symbol method */
    tokenSymbol(): Promise<string>;

    /** PSP-22 Metadata token_decimals method */
    tokenDecimals(): Promise<number>;

    /** Element Contract claim_ownership method */
    claimOwnership(): Promise<void>;

    /** Element Contract lock_game_contract method */
    lockGameContract(gameContract: string): Promise<void>;
}