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
}) => {
    return (
        <>
            <MetaLayout
                title={title}
                description={description}
                keywords={keywords}
            />
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
