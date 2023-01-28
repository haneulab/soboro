/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                sbyellow: '#FFD12D',
                sbsky: '#83E9FF',
                sbpink: '#FFB5EA',
                sbgreen: '#81F3A1',
                sbred: '#FF8080',
                sbindigo: '#A4A3FF',
                sbpurple: '#DE97FF',
            },
            maxWidth: {
                cutoff: '1440px',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.45s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
