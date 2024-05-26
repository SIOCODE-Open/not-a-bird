import { IAchievementService } from "@not-a-bird/on-chain-game";
import { $modals } from "../service/Modals";
import { BulmaButton } from "../components/BulmaButton";
import { IAchievement } from "@not-a-bird/model";
import { useState } from "react";

const AwardedAchievement = (
    props: {
        achievement: IAchievement,
        achievementService: IAchievementService
    }
) => {
    const [isMinting, setIsMinting] = useState(false);

    const onMint = async () => {
        setIsMinting(true);
        await props.achievementService.onMint(props.achievement.id);
        setIsMinting(false);
    };

    return <>
        <strong>{props.achievement.name}</strong>
        <i> ({props.achievement.awarded.date})</i>
        {
            props.achievement.minted ? (
                <a href={`https://uniquescan.io/opal/tokens/${props.achievement.minted.collectionId}/${props.achievement.minted.tokenId}`} className="button is-small is-primary is-outlined" target="_blank">
                    View
                </a>
            ) : (
                <BulmaButton color="ghost" loading={isMinting} onClick={onMint}>
                    Mint
                </BulmaButton>
            )
        }
    </>
}

export async function showAchievementsDialog(
    achievementService: IAchievementService
) {
    const allAchievements = await achievementService.all();
    const awardedAchievements = allAchievements.filter((a) => !!a.awarded);
    const nonAwardedAchievementCount = allAchievements.length - awardedAchievements.length;



    await new Promise<void>(
        (resolve) => {
            $modals.openModal({
                title: "Achievements",
                content: (ctx) => {
                    return <>
                        <div style={{ height: "300px", overflowY: "auto" }}>
                            <ul>
                                {
                                    awardedAchievements.map((a) => {
                                        return <li key={a.id} className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                                            <AwardedAchievement achievement={a} achievementService={achievementService} />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <p className="block">
                            <strong>{nonAwardedAchievementCount}</strong> achievements left to unlock
                        </p>
                    </>
                },
                actions: [
                    {
                        label: "Close",
                        onAction: ({ closeModal }) => {
                            closeModal();
                            resolve();
                        }
                    }
                ]
            })
        }
    )
}
