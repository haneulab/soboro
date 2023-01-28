import { type HTMLAttributes } from 'react'

export interface ISoboroLink extends HTMLAttributes<HTMLAnchorElement> {
    href: string
    text?: string
}
