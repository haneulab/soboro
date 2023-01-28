import { type AppRFC } from '@soboro/types'

const FooterLayout: AppRFC = () => {
    return (
        <footer className="bg-sbyellow text-black mt-80">
            <div className="px-8 py-16 max-w-cutoff mx-auto">
                <p className="text-center font-light text-sm text-neutral-500 font-lato">
                    <span className="font-lato">All Rights Reserved By</span> @{' '}
                    <span className="transition-smooth hover:text-black hover:font-medium cursor-pointer">
                        2023 Soboro
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout
