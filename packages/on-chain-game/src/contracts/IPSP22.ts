export interface IPSP22 {
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
}