export interface IPSP22Metadata {
    /** PSP-22 Metadata token_name method */
    tokenName(): Promise<string>;

    /** PSP-22 Metadata token_symbol method */
    tokenSymbol(): Promise<string>;

    /** PSP-22 Metadata token_decimals method */
    tokenDecimals(): Promise<number>;
}    