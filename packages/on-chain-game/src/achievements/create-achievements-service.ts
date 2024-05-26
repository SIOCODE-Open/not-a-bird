import { ALL_ACHIEVEMENTS, IAchievement } from "@not-a-bird/model";
import { IAchievementService } from "./IAchievementService";
import { IPlayerStats } from "@not-a-bird/model/src/IPlayerStats";
import { Subject } from "rxjs";

class AchievementsServiceImpl implements IAchievementService {
    private _achievements: Array<IAchievement> = [
        ...ALL_ACHIEVEMENTS
    ];
    private _playerStats: IPlayerStats = {
        elementBuyCounts: {},
        elementSacrificeCounts: {},
        recipeCraftCounts: {},
    };
    private _awards: Subject<IAchievement> = new Subject();
    private _mints: Subject<IAchievement> = new Subject();

    constructor(
        private _nodeUrl: string,
        private _suri: string,
    ) {
        if (!this._hasPersistedPlayerStats()) {
            this._persistPlayerStats();
        } else {
            this._loadPlayerStats();
        }
        if (!this._hasPersistedAchievements()) {
            this._persistAchievements();
        } else {
            this._loadAchievements();
        }
    }

    private _hasPersistedPlayerStats() {
        return !!localStorage.getItem("playerStats");
    }

    private _hasPersistedAchievements() {
        return !!localStorage.getItem("achievements");
    }

    private _loadPlayerStats() {
        const playerStatsData = localStorage.getItem("playerStats") || "{}";
        const newPlayerStats = JSON.parse(playerStatsData);
        if (newPlayerStats.elementBuyCounts) {
            this._playerStats.elementBuyCounts = newPlayerStats.elementBuyCounts;
        } else {
            console.warn("No elementBuyCounts in persisted player stats, possibly nothing is persisted yet.");
        }

        if (newPlayerStats.elementSacrificeCounts) {
            this._playerStats.elementSacrificeCounts = newPlayerStats.elementSacrificeCounts;
        } else {
            console.warn("No elementSacrificeCounts in persisted player stats, possibly nothing is persisted yet.");
        }

        if (newPlayerStats.recipeCraftCounts) {
            this._playerStats.recipeCraftCounts = newPlayerStats.recipeCraftCounts;
        } else {
            console.warn("No recipeCraftCounts in persisted player stats, possibly nothing is persisted yet.");
        }
    }

    private _persistPlayerStats() {
        localStorage.setItem("playerStats", JSON.stringify(this._playerStats));
    }

    private _loadAchievements() {
        const achievementsData = localStorage.getItem("achievements") || "[]";
        const newAchievements = JSON.parse(achievementsData);
        if (newAchievements.length) {
            this._achievements = newAchievements;
        } else {
            console.warn("No achievements in persisted data, possibly nothing is persisted yet.");
        }
    }

    private _persistAchievements() {
        localStorage.setItem("achievements", JSON.stringify(this._achievements));
    }

    private _checkAchievements() {
        const nonAwardedAchievements = this._achievements.filter((a) => !a.awarded);
        for (const achievement of nonAwardedAchievements) {
            const [idType, firstRest] = achievement.id.split(":");
            if (idType === 'buy') {
                let [elementId, amount]: Array<string | number> = firstRest.split('/');
                elementId = parseInt(elementId);
                amount = parseInt(amount);
                if (this._playerStats.elementBuyCounts[elementId] >= amount) {
                    achievement.awarded = {
                        date: new Date().toISOString(),
                    };
                    this._persistAchievements();
                    this._awards.next(achievement);
                }
            } else if (idType === 'sacrifice') {
                let [elementId, amount]: Array<string | number> = firstRest.split('/');
                elementId = parseInt(elementId);
                amount = parseInt(amount);
                if (this._playerStats.elementSacrificeCounts[elementId] >= amount) {
                    achievement.awarded = {
                        date: new Date().toISOString(),
                    };
                    this._persistAchievements();
                    this._awards.next(achievement);
                }
            } else if (idType === 'craft') {
                let [recipeId, amount]: Array<string | number> = firstRest.split('/');
                recipeId = parseInt(recipeId);
                amount = parseInt(amount);
                if (this._playerStats.recipeCraftCounts[recipeId] >= amount) {
                    achievement.awarded = {
                        date: new Date().toISOString(),
                    };
                    this._persistAchievements();
                    this._awards.next(achievement);
                }
            }
        }
    }

    async all(): Promise<IAchievement[]> {
        return this._achievements;
    }

    async stats(): Promise<IPlayerStats> {
        return this._playerStats;
    }

    async onBuyElement(elementId: number, N: number): Promise<void> {
        this._playerStats.elementBuyCounts[elementId] = (this._playerStats.elementBuyCounts[elementId] || 0) + N;
        this._persistPlayerStats();
        this._checkAchievements();
        console.log("onBuyElement: ", elementId, N);
    }

    async onSacrificeElement(elementId: number, N: number): Promise<void> {
        this._playerStats.elementSacrificeCounts[elementId] = (this._playerStats.elementSacrificeCounts[elementId] || 0) + N;
        this._persistPlayerStats();
        this._checkAchievements();
        console.log("onSacrificeElement: ", elementId, N);
    }

    async onCraftRecipe(recipeId: number, N: number): Promise<void> {
        this._playerStats.recipeCraftCounts[recipeId] = (this._playerStats.recipeCraftCounts[recipeId] || 0) + N;
        this._persistPlayerStats();
        this._checkAchievements();
        console.log("onCraftRecipe: ", recipeId, N);
    }

    destroy(): void {

    }

    get awards() {
        return this._awards.asObservable();
    }

    get mints() {
        return this._mints.asObservable();
    }
}

export function createAchievementsService(
    nodeUrl: string,
    suri: string,
): IAchievementService {
    return new AchievementsServiceImpl(nodeUrl, suri);
}
