import {
	CategoryScale,
	Chart,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Line } from 'react-chartjs-2'

import bellBagChart1 from '~/assets/bell-bag-chart-1.png'
import bellBagChart2 from '~/assets/bell-bag-chart-2.png'
import bellBagChart3 from '~/assets/bell-bag-chart-3.png'
import bellCoins from '~/assets/bell-coins.png'

import emissionScheduleRaw from './emission-schedule.csv?raw'

const emissionSchedule = emissionScheduleRaw
	.split('\n')
	.map((row) => row.split(','))
const emissionDates = emissionSchedule.map((row) => row[0])
const emissionValues = emissionSchedule.map((row) => row[1])

const chartPointEpoch2 = new Image(128, 79)
chartPointEpoch2.src = bellBagChart3

const chartPointEpoch3 = new Image(80, 64)
chartPointEpoch3.src = bellBagChart2

const chartPointEpoch4 = new Image(41, 49)
chartPointEpoch4.src = bellBagChart1

const chartPointEpoch5 = new Image(27, 32)
chartPointEpoch5.src = bellBagChart1

const chartPointEpoch6 = new Image(37, 30)
chartPointEpoch6.src = bellCoins

const chartPoints: Record<string, { img: HTMLImageElement }> = {
	'2024. 1. 20.': { img: chartPointEpoch2 }, // not exact epoch point, just for presentation
	'2024. 3. 9.': { img: chartPointEpoch3 },
	'2024. 6. 7.': { img: chartPointEpoch4 },
	'2024. 12. 4.': { img: chartPointEpoch5 },
	'2025. 3. 1.': { img: chartPointEpoch6 },
	'2025. 6. 1.': { img: chartPointEpoch6 },
	'2025. 9. 1.': { img: chartPointEpoch6 },
	'2025. 12. 1.': { img: chartPointEpoch6 },
	'2026. 3. 1.': { img: chartPointEpoch6 },
	'2026. 6. 1.': { img: chartPointEpoch6 },
	'2026. 9. 1.': { img: chartPointEpoch6 },
} as const

Chart.register(
	annotationPlugin,
	CategoryScale,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
)

/**
 * When data is updated or the chart size changes,
 * you may need to adjust absolutely positioned elements.
 */

export function EmissionChart() {
	return (
		<div className="relative mx-auto mt-[18px] w-[calc(34000%/390)] lg:mt-[140px] lg:w-[1280px]">
			<div className="absolute right-[12px] top-[20px] h-[532px] w-[714px] bg-gradient-to-r from-[rgba(43,105,97,0.2)] to-[rgba(24,255,175,0)]">
				<div className="absolute top-[calc(50%-2px)] h-[1px] w-full bg-[#08835E]" />
				<div className="absolute -right-[2px] top-[calc(50%-5px)] h-[7px] w-[7px] bg-[#08835E] [clip-path:polygon(86.6%_50%,0_0,0_100%)]"></div>
				<div className="absolute top-1/2 h-[2px] w-[calc(100%-13px)] bg-[#08835E]" />
				<p className="relative left-1/2 top-1/2 z-[1] inline-block -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[3px] border-[#08835E] bg-[#F4BE04] px-[8px] py-[12px] text-center font-mogra text-[20px] uppercase leading-[22px] tracking-305 text-[#08835E]">
					<span className="text-[#ED2C31]">After</span> epoch 5
					<br />
					<span className="text-[#ED2C31]">daily</span>
					<br />
					2,880 Bells
					<br />
					<span className="text-[14px] leading-[22px]">
						(2bells per one block)
					</span>
				</p>
			</div>
			<span className="absolute bottom-[92px] left-[168px] font-mogra text-[24px] leading-[1.2] tracking-305 text-[#ED2C31]">
				EPOCH1
			</span>
			<span className="absolute bottom-[140px] left-[184px] font-mogra text-[24px] leading-[1.2] tracking-305 text-[#ED2C31]">
				EPOCH2
			</span>
			<span className="absolute bottom-[300px] left-[248px] font-mogra text-[24px] leading-[1.2] tracking-305 text-[#ED2C31]">
				EPOCH3
			</span>
			<span className="absolute bottom-[448px] left-[344px] font-mogra text-[24px] leading-[1.2] tracking-305 text-[#ED2C31]">
				EPOCH4
			</span>
			<span className="absolute bottom-[480px] left-[556px] font-mogra text-[24px] leading-[1.2] tracking-305 text-[#ED2C31]">
				EPOCH5
			</span>
			<Line
				className="relative mx-auto w-full"
				options={{
					elements: {
						point: {
							radius: 1,
						},
						line: {
							tension: 0.1,
						},
					},
					maintainAspectRatio: false,
					plugins: {
						annotation: {
							annotations: {
								// epoch5: {
								// 	backgroundColor: (ctx) => {
								// 		const { x, y, x2 } = ctx.element!
								// 		const g = ctx.chart.ctx.createLinearGradient(
								// 			x!,
								// 			y!,
								// 			x2!,
								// 			y!,
								// 		)
								// 		g.addColorStop(0, 'rgba(43, 105, 97, 0.2)')
								// 		g.addColorStop(1, 'rgba(24, 255, 175, 0)')
								// 		return g
								// 	},
								// 	borderWidth: 0,
								// 	type: 'box',
								// 	xMin: '2024. 11. 27.',
								// },
								line: {
									type: 'line',
									borderWidth: 3,
									borderColor: 'rgba(5, 98, 66, 0.6)',
									borderDash: [5, 5],
									yMin: 60_000_000,
									yMax: 60_000_000,
								},
							},
						},
						tooltip: {
							mode: 'index',
							intersect: false,
							displayColors: true,
							callbacks: {
								title: function (context) {
									return `${context[0].label}`
								},
							},
						},
					},
					responsive: true,
					scales: {
						x: {
							border: {
								color: '#ED2C31',
								width: 5,
							},
							grid: {
								color: 'rgba(5, 98, 66, 0.6)',
								lineWidth: 0.5,
							},
							offset: true,
							ticks: {
								callback: function (value, index) {
									if (typeof value !== 'number') {
										return ''
									}

									const label = this.getLabelForValue(value)
									if (!label) {
										return ''
									}

									// Hide every 3rd tick label
									return index % 3 === 0
										? label.slice(0, label.indexOf('.', 5))
										: ''
								},
								color: 'black',
								font: {
									family: "'Mogra', system-ui",
									size: 20,
								},
							},
						},
						y: {
							border: {
								color: '#ED2C31',
								width: 5,
							},
							grid: {
								color: 'rgba(5, 98, 66, 0.6)',
								lineWidth: 0.5,
							},
							max: 70_000_000,
							ticks: {
								color: 'black',
								font: {
									family: "'Mogra', system-ui",
									size: 20,
								},
								padding: 8,
							},
						},
					},
				}}
				data={{
					labels: Array(20).fill(null).concat(emissionDates),
					datasets: [
						{
							backgroundColor: 'transparent',
							borderColor: '#834B16',
							data: Array(20).fill(null).concat(emissionValues),
							fill: 'start',
							pointRadius: 10,
							pointStyle: Array(20)
								.fill(null)
								.concat(
									emissionDates.map((date) =>
										chartPoints[date] ? chartPoints[date].img : false,
									),
								),
						},
					],
				}}
			/>
		</div>
	)
}
