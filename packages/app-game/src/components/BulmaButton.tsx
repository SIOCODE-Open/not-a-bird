import { CSSProperties, ReactNode } from "react";

export function BulmaButton(
    props: {
        className?: string,
        style?: CSSProperties,
        onClick?: () => void,
        children?: ReactNode,
        color?: "primary" | "secondary" | "danger" | "success" | "link" | "info" | "text" | "ghost" | "white" | "dark" | "light" | "black" | "static",
        outlined?: boolean,
        inverted?: boolean,
        rounded?: boolean,
        size?: "small" | "medium" | "large",
        loading?: boolean,
        disabled?: boolean,
        fullWidth?: boolean
    }
) {
    let finalClasses = ["button"];
    if (props.color) {
        finalClasses.push("is-" + props.color);
    }
    if (props.outlined) {
        finalClasses.push("is-outlined");
    }
    if (props.inverted) {
        finalClasses.push("is-inverted");
    }
    if (props.rounded) {
        finalClasses.push("is-rounded");
    }
    if (props.loading) {
        finalClasses.push("is-loading");
    }
    if (props.size && props.size !== 'medium') {
        finalClasses.push("is-" + props.size);
    }
    if (props.fullWidth) {
        finalClasses.push("is-fullwidth");
    }
    if (props.className) {
        finalClasses.push(props.className);
    }
    return (
        <button className={finalClasses.join(" ")} disabled={props.disabled || props.loading} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}