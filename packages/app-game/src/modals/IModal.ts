import { ReactNode } from "react";
import { IModalContext } from "./IModalContext";

export interface IModal {
    title?: string;
    message?: string;
    content?: (props: IModalContext) => ReactNode;
    actions?: Array<{
        label: string;
        onAction: (
            props: IModalContext
        ) => any;
    }>;
}
