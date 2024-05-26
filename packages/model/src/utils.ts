import { IRecipe } from "./IRecipe";
import { ALL_RECIPES } from "./items";

export function findRecipe(a: number, b: number): IRecipe | null {
    return ALL_RECIPES.find(r => (
        (r.a.id === a && r.b.id === b) ||
        (r.a.id === b && r.b.id === a)
    )
    ) || null;
}