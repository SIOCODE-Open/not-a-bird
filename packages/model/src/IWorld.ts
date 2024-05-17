import { IAsset } from "./IAsset";
import { IInventory } from "./IInventory";
import { IItem } from "./IItem";
import { IRecipe } from "./IRecipe";

export interface IWorld {
    readonly inventory: IInventory;
    readonly assets: Array<IAsset>;
    readonly recipes: Array<IRecipe>;
    readonly items: Array<IItem>;
}
