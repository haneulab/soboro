import { type GetServerSidePropsContext } from 'next'
import { type PageWithLayout } from '@soboro/types'
import Image from 'next/image'
import Logo from 'public/logo.png'
import { PrimaryLayout } from '@soboro/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <section className="px-8 py-8 max-w-cutoff mx-auto">
                    <h2>Hello World!</h2>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
