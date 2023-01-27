import { type PageWithLayout } from '@soboro/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@soboro/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const AboutPage: PageWithLayout = () => {
    return <>AboutPage</>
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default AboutPage
