import { classnames } from '@soboro/functions'
import { type AppRFC } from '@soboro/types'
import { type ISoboroIcon } from './SoboroIcon.types'
const iconFillVariant = {
    default: '#FFD12D',
    sbyellow: '#FFD12D',
    sbsky: '#83E9FF',
    sbpink: '#FFB5EA',
    sbgreen: '#81F3A1',
    sbred: '#FF8080',
    sbindigo: '#A4A3FF',
    sbpurple: '#DE97FF',
}
const SoboroIcon: AppRFC<ISoboroIcon> = ({
    variant = 'default',
    className = '',
}) => {
    return (
        <svg
            className={classnames('fill-none', className)}
            viewBox="0 0 215 201"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="105.271"
                cy="52.7707"
                r="52.7707"
                fill={iconFillVariant[variant]}
            />
            <circle
                cx="52.779"
                cy="96.8859"
                r="52.7707"
                fill={iconFillVariant[variant]}
            />
            <circle
                cx="78.4664"
                cy="142.118"
                r="52.7707"
                fill={iconFillVariant[variant]}
            />
            <circle
                cx="145.477"
                cy="147.702"
                r="52.7707"
                fill={iconFillVariant[variant]}
            />
            <circle
                cx="162.229"
                cy="89.6264"
                r="52.7707"
                fill={iconFillVariant[variant]}
            />
            <ellipse cx="78" cy="95.5" rx="23" ry="23.5" fill="white" />
            <circle cx="78.5" cy="95.5" r="19.5" fill="black" />
            <circle cx="143.5" cy="95.5" r="23.5" fill="white" />
            <circle cx="143.5" cy="95.5" r="19.5" fill="black" />
            <mask
                id="path-10-outside-1_23_14"
                maskUnits="userSpaceOnUse"
                x="89"
                y="126"
                width="45"
                height="24"
                fill="black"
            >
                <rect fill="white" x="89" y="126" width="45" height="24" />
                <path d="M90 127.5C90 133.202 92.2652 138.671 96.2972 142.703C100.329 146.735 105.798 149 111.5 149C117.202 149 122.671 146.735 126.703 142.703C130.735 138.671 133 133.202 133 127.5L128.943 127.5C128.943 132.126 127.105 136.563 123.834 139.834C120.563 143.105 116.126 144.943 111.5 144.943C106.874 144.943 102.437 143.105 99.1657 139.834C95.8945 136.563 94.0567 132.126 94.0567 127.5L90 127.5Z" />
            </mask>
            <path
                d="M90 127.5C90 133.202 92.2652 138.671 96.2972 142.703C100.329 146.735 105.798 149 111.5 149C117.202 149 122.671 146.735 126.703 142.703C130.735 138.671 133 133.202 133 127.5L128.943 127.5C128.943 132.126 127.105 136.563 123.834 139.834C120.563 143.105 116.126 144.943 111.5 144.943C106.874 144.943 102.437 143.105 99.1657 139.834C95.8945 136.563 94.0567 132.126 94.0567 127.5L90 127.5Z"
                fill="black"
            />
            <path
                d="M90 127.5C90 133.202 92.2652 138.671 96.2972 142.703C100.329 146.735 105.798 149 111.5 149C117.202 149 122.671 146.735 126.703 142.703C130.735 138.671 133 133.202 133 127.5L128.943 127.5C128.943 132.126 127.105 136.563 123.834 139.834C120.563 143.105 116.126 144.943 111.5 144.943C106.874 144.943 102.437 143.105 99.1657 139.834C95.8945 136.563 94.0567 132.126 94.0567 127.5L90 127.5Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="2.61313"
                strokeLinecap="round"
                mask="url(#path-10-outside-1_23_14)"
            />
        </svg>
    )
}

export default SoboroIcon
