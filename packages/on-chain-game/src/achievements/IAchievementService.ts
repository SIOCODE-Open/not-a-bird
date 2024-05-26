import { IAchievement } from "@not-a-bird/model";
import { IPlayerStats } from "@not-a-bird/model/src/IPlayerStats";
import { Observable } from "rxjs";

export interface IAchievementService {
    all(): Promise<Array<IAchievement>>;
    stats(): Promise<IPlayerStats>;
    onBuyElement(elementId: number, N: number): Promise<void>;
    onSacrificeElement(elementId: number, N: number): Promise<void>;
    onCraftRecipe(recipeId: number, N: number): Promise<void>;
    onMint(achievementId: string): Promise<void>;
    destroy(): void;
    readonly awards: Observable<IAchievement>;
    readonly mints: Observable<IAchievement>;
}