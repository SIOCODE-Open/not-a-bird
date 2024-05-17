import { IPSP22 } from "./IPSP22";
import { IPSP22Metadata } from "./IPSP22Metadata";

export interface IElementContract extends IPSP22, IPSP22Metadata {
    /** Element Contract claim_ownership method */
    claimOwnership(): Promise<void>;

    /** Element Contract lock_game_contract method */
    lockGameContract(gameContract: string): Promise<void>;
}
