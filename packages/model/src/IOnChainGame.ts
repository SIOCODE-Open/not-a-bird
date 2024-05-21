import { IGameWallet } from "./IGameWallet";
import { IWorld } from "./IWorld";
import { IPool } from "./IPool";

/** Client interface for interacting with the on-chain game.
 * 
 * This client calls multiple contracts to interact with the on-chain game:
 * 
 * * The **Game Contract** is responsible for buying, crafting, sacrificing items
 * * The **Element Contracts** are **PSP-22 compatible** contracts implementing each element as a fungible token
 * 
 */
export interface IOnChainGame {
    /** The name of this game */
    readonly name: string;

    /** The description of this game */
    readonly description: string;

    /** Builds the game world from on-chain data. */
    world(): Promise<IWorld>;

    /** Buys items for (contract.buy_cost[0] * N) tokens */
    buy(itemId: number, N: number): Promise<void>;

    /** Crafts an item using two other items */
    craft(a: number, b: number): Promise<void>;

    /** Sacrifices an item into the common pot */
    sacrifice(itemId: number): Promise<void>;

    /** Retrieves the wallet used for the game */
    wallet(): Promise<IGameWallet>;

    /** Sends element tokens from the wallet used to play the game */
    send(itemId: number, to: string, amount: number): Promise<void>;

    /** Retrieves the "pool" from the game contract */
    pool(): Promise<IPool>;
}