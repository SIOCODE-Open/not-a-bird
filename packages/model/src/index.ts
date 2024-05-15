export interface IItem {
    name: string;
    description: string;
}

export interface IRecipe {
    a: IItem;
    b: IItem;
    result: IItem;
}

export interface IAsset {
    type: IItem;
    position: {
        x: number;
        y: number;
    }
}

export interface IWorld {
    assets: Array<IAsset>;
    recipes: Array<IRecipe>;
    items: Array<IItem>;
}
