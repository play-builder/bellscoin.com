import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			chelsea: "'Chelsea Market', system-ui",
			mitr: "'Mitr', sans-serif",
			mochiy: "'Mochiy Pop P One', sans-serif",
			mogra: "'Mogra', system-ui",
			oleo: "'Oleo Script', system-ui",
			senior: "'PC Senior', sans-serif",
		},
		extend: {
			animation: {
				blink: 'blink 1s step-end infinite',
			},
			dropShadow: {
				bubble: '15px 15px 8px rgba(0, 0, 0, 0.6)',
			},
			keyframes: {
				blink: {
					'50%': { opacity: 0 },
				},
			},
			textShadow: {
				DEFAULT: '5.58px 5.58px 3px rgba(0, 0, 0, 0.6)',
			},
		},
		letterSpacing: { 305: '0.305em' },
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => ({
						'animation-delay': value,
					}),
				},
				{
					values: theme('transitionDelay'),
				},
			)
		}),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			)
		}),
	],
}
