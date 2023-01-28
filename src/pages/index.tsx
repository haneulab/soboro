import { type GetServerSidePropsContext } from 'next'
import { type PageWithLayout } from '@soboro/types'
import { PrimaryLayout } from '@soboro/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return <></>
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
