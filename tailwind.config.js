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
			clipPath: {
				triangle: 'polygon(50% 13.4%, 0% 100%, 100% 100%)',
			},
			dropShadow: {
				bubble: '5.58px 5.58px 3px rgba(0, 0, 0, 0.6)',
			},
			textShadow: {
				DEFAULT: '5.58px 5.58px 3px rgba(0, 0, 0, 0.6)',
			},
		},
		letterSpacing: { 305: '0.305em' },
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'clip-path': (value) => ({
						clipPath: value,
					}),
				},
				{ values: theme('clipPath') },
			)
		}),
		plugin(function ({ matchUtilities, theme }) {
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
