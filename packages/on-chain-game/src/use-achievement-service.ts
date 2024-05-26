import { IAchievementService } from "./achievements/IAchievementService";
import { createAchievementsService } from "./achievements/create-achievements-service";
import { loadGameChainWallet, createRandomGameChainWallet } from "@not-a-bird/game-chain-wallet";

export async function useAchievementService(): Promise<IAchievementService> {
    let chainWallet = await loadGameChainWallet();
    if (!chainWallet) {
        chainWallet = await createRandomGameChainWallet();
    }
    const suri = chainWallet.suri;
    return createAchievementsService(
        "https://rest.unique.network/opal/v1",
        suri
    );
}
