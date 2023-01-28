import { classnames } from '@soboro/functions'
import { AppRFC } from '@soboro/types'
import { ISoboroGroup } from './SoboroGroup.types'

const SoboroGroup: AppRFC<ISoboroGroup> = (props) => {
    const { className, children, ..._props } = props

    return (
        <section className={classnames('w-full', className)}>
            <div className="px-4 py-16 lg:px-8 max-w-cutoff mx-auto">
                {children}
            </div>
        </section>
    )
}

export default SoboroGroup
