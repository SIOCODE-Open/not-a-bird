import { ReactNode } from 'react'

export function Card(
    opts: {
        children?: ReactNode
    }
) {
    return <div className="rounded padded elevated bordered flex column justify-start align-start">
        {opts.children}
    </div>
}