import { ReactNode } from "react";

export function HorizontalLayout(
    props: {
        columns: Array<{
            className?: string;
            content: ReactNode;
        }>
    }
) {
    return <div className={"horizontal w-100 h-100 " + `has-${props.columns.length}-columns`}>
        {
            props.columns.map((column, index) => (
                <div key={index} className={"column " + (column.className || "")}>
                    {column.content}
                </div>
            ))
        }
    </div>
}