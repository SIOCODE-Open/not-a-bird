import { IItem } from "./IItem";

export interface IAsset {
    readonly type: IItem;
    position: {
        x: number;
        y: number;
    }
}