import { IItem } from "./IItem";

export interface IRecipe {
    readonly id: number;
    readonly a: IItem;
    readonly b: IItem;
    readonly result: IItem;
}