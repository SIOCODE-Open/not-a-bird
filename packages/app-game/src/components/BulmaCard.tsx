import { CSSProperties, ReactNode } from "react";

export function BulmaCard(
    props: {
        className?: string,
        style?: CSSProperties,
        children?: ReactNode,
        image?: ReactNode,
        footer?: Array<ReactNode>,
    }
) {
    let finalClasses = ["card"];
    if (props.className) {
        finalClasses.push(props.className);
    }
    return (
        <div className={finalClasses.join(" ")} style={props.style}>
            {
                props.image ? <div className="card-image">
                    {props.image}
                </div> : null
            }
            <div className="card-content">
                {props.children}
            </div>
            {props.footer && props.footer.length > 0 && <footer className="card-footer">
                {props.footer.map((f, i) => <div key={i} className="card-footer-item">{f}</div>)}
            </footer>}
        </div>
    );
}