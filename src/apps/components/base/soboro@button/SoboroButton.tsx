import { type ISoboroButton } from './SoboroButton.types'
import { type AppRFC } from '@soboro/types'
import { classnames } from '@soboro/functions'

const SoboroButton: AppRFC<ISoboroButton> = (props) => {
    const { text, className, children, ..._props } = props

    return (
        <button
            {..._props}
            className={classnames(
                'transition-smooth hover:opacity-60',
                className
            )}
        >
            {text && <span>{text}</span>}
            {children && children}
        </button>
    )
}

export default SoboroButton
