import { ReactNode } from "react";

export function StackedLayout(props: {
    layers: Array<{
        className?: string;
        content: ReactNode;
    }>
}) {
    return <div className="stacked w-100 h-100">
        {
            props.layers.map((layer, index) => (
                <div key={index} className={"layer " + (index < 10 ? `at-z-${index} ` : 'at-z-10 ') + (layer.className || "")}>
                    {layer.content}
                </div>
            ))
        }
    </div>
}
