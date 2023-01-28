import { type IPrimaryLayout } from './Primary.types'
import { type AppRFC } from '@soboro/types'
import { FooterLayout } from '../footer'
import { MetaLayout } from '../meta'
import { HeaderLayout } from '../header'

const PrimaryLayout: AppRFC<IPrimaryLayout> = ({
    children,
    title,
    description,
    keywords,
    render = {
        header: true,
        footer: true,
    },
}) => {
    return (
        <>
            <MetaLayout
                title={title}
                description={description}
                keywords={keywords}
            />
            {render.header && <HeaderLayout />}
            <main className="relative">{children}</main>
            {render.footer && <FooterLayout />}
        </>
    )
}

export default PrimaryLayout
