import { IItem } from './IItem';
import { IRecipe } from './IRecipe';

export interface IGameContent {
    name: string;
    description: string;
    items: Array<IItem>;
    recipes: Array<IRecipe>;
}