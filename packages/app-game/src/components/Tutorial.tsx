import { ReactNode, useState } from "react";
import { Card } from "./Card";
import { Group } from "./Group";
import { Button } from "./Button";

export interface ITutorialStep {
    title: ReactNode | string;
    content: ReactNode | string;
}

export function Tutorial(
    props: {
        steps: Array<ITutorialStep>;
    }
) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const hideTutorial = () => {
        setIsHidden(true);
    }

    const onSkipTutorial = () => {
        hideTutorial();
    }

    const onNextStep = () => {
        if (currentStepIndex < props.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        } else {
            hideTutorial();
        }
    }

    return <div className={"tutorial " + (isHidden ? 'hidden' : '')}>
        <Card>
            <h5>
                {props.steps[currentStepIndex].title}
            </h5>
            <div>
                {props.steps[currentStepIndex].content}
            </div>
            <Group>
                <Button onClick={onSkipTutorial}>Skip Tutorial</Button>
                <Button onClick={onNextStep}>
                    {currentStepIndex < props.steps.length - 1 ? `Next (${currentStepIndex + 1} / ${props.steps.length})` : 'Finish'}
                </Button>
            </Group>
        </Card>
    </div>
}