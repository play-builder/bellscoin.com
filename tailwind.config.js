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
				'horizontal-shaking': {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(5px)' },
					'50%': { transform: 'translateX(-5px)' },
					'75%': { transform: 'translateX(5px)' },
					'100%': { transform: 'translateX(0)' },
				},
				'jump-shaking': {
					'0%': { transform: 'translateX(0) rotate(0)' },
					'15%': { transform: 'translateX(0) rotate(0)' },
					'25%': { transform: 'translateY(-9px) rotate(0)' },
					'35%': { transform: 'translateY(-9px) rotate(17deg)' },
					'55%': { transform: 'translateY(-9px) rotate(-17deg)' },
					'65%': { transform: 'translateY(-9px) rotate(17deg)' },
					'75%': { transform: 'translateY(-9px) rotate(-17deg)' },
					'85%': { transform: 'translateY(0) rotate(0)' },
					'100%': { transform: 'translateY(0) rotate(0)' },
				},
				'jump-shaking-2': {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'33%': { transform: 'translateY(-46px) rotate(2.53deg)' },
					'66%': { transform: 'translateY(-14.5px) rotate(-2.15deg)' },
				},
				rattling: {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'3%': { transform: 'translateY(-10px) rotate(2deg)' },
					'6%': { transform: 'translateY(-20px) rotate(0)' },
					'9%': { transform: 'translateY(-10px) rotate(-2deg)' },
					'12%': { transform: 'translateY(0) rotate(0)' },
					'20%': { transform: 'translateY(-60px) rotate(4deg)' },
					'23%': { transform: 'translateY(-60px) rotate(3deg)' },
					'26%': { transform: 'translateY(-40px) rotate(1deg)' },
					'29%': { transform: 'translateY(-20px) rotate(-1deg)' },
					'32%': { transform: 'translateY(0) rotate(-3deg)' },
					'35%': { transform: 'translateY(0) rotate(3deg)' },
					'38%': { transform: 'translateY(-10px) rotate(1deg)' },
					'42%': { transform: 'translateY(0) rotate(-1deg)' },
					'45%': { transform: 'translateY(0) rotate(0)' },
					'60%': { transform: 'translateY(0) rotate(1deg)' },
					'80%': { transform: 'translateY(0) rotate(-1deg)' },
					'100%': { transform: 'translateY(0) rotate(0)' },
				},
				shake: {
					'0%': { transform: 'translate(0, 0)' },
					'12.5%': { transform: 'translate(-10px, 0)' },
					'25%': { transform: 'translate(0, 0)' },
					'37.5%': { transform: 'translate(10px, 0)' },
					'50%': { transform: 'translate(0, 0)' },
					'62.5%': { transform: 'translate(0, -10px)' },
					'75%': { transform: 'translate(0, 0)' },
					'87.5%': { transform: 'translate(0, 10px)' },
					'100%': { transform: 'translate(0, 0)' },
				},
				'slide-down': {
					from: { top: '0%' },
					to: { top: '100%' },
				},
				'slide-left': {
					from: { right: '-40%' },
					to: { right: '100%' },
				},
				'skew-y-shake': {
					'0%': { transform: 'skewY(-15deg)' },
					'5%': { transform: 'skewY(15deg)' },
					'10%': { transform: 'skewY(-15deg)' },
					'15%': { transform: 'skewY(15deg)' },
					'20%': { transform: 'skewY(0deg)' },
					'100%': { transform: 'skewY(0deg)' },
				},
				pendulum: {
					'0%': { transform: 'rotate(-10deg)' },
					'100%': { transform: 'rotate(10deg)' },
				},
				'tilt-n-move-shaking': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(5px, 5px) rotate(11deg)' },
					'50%': { transform: 'translate(0, 0) rotate(0eg)' },
					'75%': { transform: 'translate(-5px, 5px) rotate(1deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' },
				},
			},
			textShadow: {
				DEFAULT: '15px 15px 15px rgba(0, 0, 0, 0.6)',
			},
		},
		letterSpacing: { 305: '0.305em' },
		screens: {
			lg: '1920px',
		},
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
