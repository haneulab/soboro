import { type AppRFC } from '@soboro/types'
import { SoboroIcon, SoboroLink } from '@soboro/components/base'

const HeaderLayout: AppRFC = () => {
    return (
        <header className="fixed top-0 z-40 w-full bg-white">
            <section className="w-full px-4 py-4 max-w-cutoff mx-auto flex justify-center items-center">
                <h1 className="w-full max-w-[75px] md:max-w-[100px] lg:max-w-[125px] flex flex-col gap-y-2 lg:gap-y-4">
                    <SoboroLink href="/">
                        <SoboroIcon />
                    </SoboroLink>
                    <span className="text-center text-xl md:text-2xl lg:text-3xl">
                        소보로
                    </span>
                </h1>
            </section>
        </header>
    )
}

export default HeaderLayout
