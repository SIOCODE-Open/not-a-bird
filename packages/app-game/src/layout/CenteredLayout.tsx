import { ReactNode } from 'react';

export function CenteredLayout(
    opts: {
        children: ReactNode
    }
) {
    return <div className="flex justify-center align-center w-100 h-100">
        <div>
            {opts.children}
        </div>
    </div>;
}