import { IAchievement } from "@not-a-bird/model";
import { $modals } from "../service/Modals";

export async function showAchievementAwardedDialog(
    achievement: IAchievement
) {
    await new Promise<void>((resolve) => {
        $modals.openModal({
            title: "New achievement!",
            content: (ctx) => {
                return <>
                    <h1 className="title">
                        {achievement.name}
                    </h1>
                    <p className="block">
                        {achievement.description}
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
    });
}
