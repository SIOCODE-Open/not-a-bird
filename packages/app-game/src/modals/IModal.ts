import { ReactNode } from "react";

export interface IModal {
    title?: string;
    message?: string;
    content?: ReactNode;
    actions?: Array<{
        label: string;
        onAction: (
            props: {
                navigate: (path: string) => void;
                closeModal: () => void;
            }
        ) => any;
    }>;
}
