import { type GetServerSidePropsContext } from 'next'
import { type PageWithLayout } from '@soboro/types'
import { PrimaryLayout } from '@soboro/components/layouts'
import { SoboroGroup, SoboroLink } from '@soboro/components/base'
import { HiArrowRight } from 'react-icons/hi'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        // LANDING COMPONENT
        <SoboroGroup className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-white to-sbyellow">
            <h3 className="text-center px-8 text-2xl md:text-3xl lg:text-4xl flex flex-col items-center gap-y-2 lg:gap-y-4 mb-8 text-gray-700 lg:text-gray-300 transition-smooth lg:transform lg:hover:scale-110 lg:hover:mb-12 lg:hover:text-black cursor-pointer">
                <span>사랑하는 사람들과 함께 하는</span>
                <strong>소중한 추억</strong> <span>소보로에 담아볼까요.</span>
            </h3>
            <SoboroLink
                href="/login"
                text="지금 시작하기"
                className="flex items-center gap-x-4 w-max mx-auto font-bold px-8 py-3 rounded-md bg-sbyellow lg:text-xl lg:px-10 lg:py-4"
            >
                <HiArrowRight />
            </SoboroLink>
        </SoboroGroup>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
