import Link from 'next/link'
import { classnames } from '@soboro/functions'
import { type ISoboroLink } from './SoboroLink.types'
import { type AppRFC } from '@soboro/types'

const SoboroLink: AppRFC<ISoboroLink> = (props) => {
    const { text, href, className, children, ..._props } = props

    return (
        <Link href={href}>
            <a
                {..._props}
                className={classnames(
                    'transition-smooth hover:opacity-60',
                    className
                )}
            >
                {text && <span>{text}</span>}
                {children && children}
            </a>
        </Link>
    )
}

export default SoboroLink
