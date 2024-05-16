export interface IItem {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly tier: number;
}

export interface IRecipe {
    readonly id: number;
    readonly a: IItem;
    readonly b: IItem;
    readonly result: IItem;
}

export interface IAsset {
    readonly type: IItem;
    position: {
        x: number;
        y: number;
    }
}

export interface IInventory {
    balances: Record<number, number>;
}

export interface IWorld {
    readonly inventory: IInventory;
    readonly assets: Array<IAsset>;
    readonly recipes: Array<IRecipe>;
    readonly items: Array<IItem>;
}
