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

import dogeCoin from '~/assets/doge-coin.png'
import { SequenceArrows } from '~/component/SequenceArrows.tsx'

Chart.register(
	annotationPlugin,
	CategoryScale,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
)

const chartPointDoge = new Image(30, 30)
chartPointDoge.src = dogeCoin

export default function Section4Tokenomics() {
	return (
		<section>
			<div className="bg-[#FCC22D] pb-[44px]">
				<div className="relative mx-auto flex h-[192px] w-[1154px] translate-y-[-36px] flex-col items-center justify-center drop-shadow-bubble">
					<div className="absolute z-[-1] h-full w-full bg-[#ED2C31] [clip-path:polygon(100%_0,96%_50%,100%_100%,0%_100%,4%_50%,0%_0%)]"></div>
					<h2 className="font-mitr text-[56px] tracking-305 text-[#F4BE04] text-shadow">
						TOKENOMICS
					</h2>
					<span className="mb-[-25px] mt-[5px] font-mogra text-[22px] leading-[1.2] tracking-305 text-white">
						ARCHIVE LINK
					</span>
				</div>
				<div className="mt-[10px] flex justify-center gap-x-[25px] tracking-305">
					<div className="grid h-[288px] w-[568px] grid-cols-2 items-center rounded-[50px] bg-white py-[10px] pl-[48px] font-mogra text-[22px] uppercase leading-[1.2] drop-shadow-bubble odd:*:text-[#404040] even:*:pl-[30px] even:*:text-[#ED2C31]">
						<span>Max supply</span>
						<span>Unlimited</span>
						<span>Block time</span>
						<span>60 seconds</span>
						<span>
							Difficulty
							<br />
							re-adjustment
						</span>
						<span>4 hours</span>
						<span>
							block 1
							<br />
							to block 100
							<br />
							(Phase1)
						</span>
						<span>2 bells</span>
					</div>
					<div className="grid h-[288px] w-[596px] grid-cols-2 items-center rounded-[50px] bg-white py-[10px] pl-[26px] font-mogra text-[22px] uppercase leading-[1.2] drop-shadow-bubble odd:*:text-[#404040] even:*:pl-[40px] even:*:text-[#ED2C31]">
						<span>Current supply</span>
						<span>10,194,418</span>
						<span>Price</span>
						<span>0.329999</span>
						<span>Marketcap</span>
						<span>3,364,147</span>
						<span>Networkhashrate</span>
						<span>
							107.4092 <span className="font-oleo">TH/S</span>
						</span>
					</div>
				</div>
				<div className="mt-[135px] grid grid-cols-[1fr_250px_1fr] tracking-305 [&>*:nth-child(3n+1)]:justify-self-end">
					<div className="h-[426px] w-[522px] rounded-[50px] bg-white py-[25px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<h4 className="px-[70px] text-right text-[30px]">Phase2</h4>
						<span className="mt-[-4px] block px-[70px] text-right text-[18px]">
							(~1st 90days)
						</span>
						<h5 className="mt-[18px] text-center text-[30px] text-[#6A4E41]">
							Block
							<br />
							101 - 129,600
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[10px] px-[85px] text-[22px] [&>*:not(:nth-child(3n+1))]:text-[#ED2C31] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n+2)]:pl-[20px]">
							<span>1%</span>
							<span>10,000</span>
							<span>Bells</span>
							<span>5%</span>
							<span>1,000</span>
							<span>Bells</span>
							<span>10%</span>
							<span>500</span>
							<span>Bells</span>
							<span>14%</span>
							<span>250</span>
							<span>Bells</span>
							<span>20%</span>
							<span>100</span>
							<span>Bells</span>
							<span>50%</span>
							<span>50</span>
							<span>Bells</span>
						</div>
					</div>
					<div className="flex items-center justify-evenly px-[5%]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="right"
							size={38}
							number={5}
						/>
					</div>
					<div className="h-[426px] w-[522px] rounded-[50px] bg-white py-[25px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<h4 className="px-[70px] text-right text-[30px]">Phase2</h4>
						<span className="mt-[-4px] block px-[70px] text-right text-[18px]">
							(~1st 90days)
						</span>
						<h5 className="mt-[18px] text-center text-[30px] text-[#6A4E41]">
							Block
							<br />
							101 - 129,600
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[10px] px-[85px] text-[22px] [&>*:not(:nth-child(3n+1))]:text-[#ED2C31] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n+2)]:pl-[20px]">
							<span>1%</span>
							<span>10,000</span>
							<span>Bells</span>
							<span>5%</span>
							<span>1,000</span>
							<span>Bells</span>
							<span>10%</span>
							<span>500</span>
							<span>Bells</span>
							<span>14%</span>
							<span>250</span>
							<span>Bells</span>
							<span>20%</span>
							<span>100</span>
							<span>Bells</span>
							<span>50%</span>
							<span>50</span>
							<span>Bells</span>
						</div>
					</div>
					<div></div>
					<div></div>
					<div className="flex h-[146px] w-[522px] flex-col items-center justify-evenly py-[10px]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="down"
							size={38}
							number={3}
						/>
					</div>
					<div className="h-[426px] w-[522px] rounded-[50px] bg-white py-[25px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<h4 className="px-[70px] text-right text-[30px]">Phase5</h4>
						<h5 className="mt-[34px] text-center text-[30px] text-[#6A4E41]">
							After
							<br />
							Block 518,400
						</h5>
						<p className="mt-[40px] text-center text-[30px] text-[#ED2C31]">
							2 Bells
						</p>
						<p className="mt-[40px] text-center text-[30px] text-[#6A4E41]">
							Daily
							<br />
							{/* TODO 2820 vs 2880 */}
							2,820 Bells
						</p>
					</div>
					<div className="flex items-center justify-evenly px-[5%]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="left"
							size={38}
							number={5}
						/>
					</div>
					<div className="h-[426px] w-[522px] rounded-[50px] bg-white py-[25px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<h4 className="px-[70px] text-right text-[30px]">Phase4</h4>
						<span className="mt-[-4px] block px-[70px] text-right text-[18px]">
							(~next 180days)
						</span>
						<h5 className="mt-[18px] text-center text-[30px] text-[#6A4E41]">
							Block
							<br />
							259,001 - 518,400
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[18px] px-[85px] text-[22px] [&>*:not(:nth-child(3n+1))]:text-[#ED2C31] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n+2)]:pl-[20px]">
							<span>1%</span>
							<span>500</span>
							<span>Bells</span>
							<span>5%</span>
							<span>50</span>
							<span>Bells</span>
							<span>10%</span>
							<span>25</span>
							<span>Bells</span>
							<span>34%</span>
							<span>10</span>
							<span>Bells</span>
							<span>50%</span>
							<span>5</span>
							<span>Bells</span>
						</div>
					</div>
				</div>
				<h3 className="mt-[74px] text-center font-chelsea text-[82px] leading-[74px] text-[#834B16]">
					$Bells coin
					<br />
					emissions..
				</h3>
				<Line
					className="mx-auto mt-[52px] !w-[80%]"
					options={{
						// maintainAspectRatio: false,
						elements: {
							point: {
								radius: 1,
							},
							line: {
								tension: 0.1,
							},
						},
						plugins: {
							annotation: {
								annotations: {
									epoch5: {
										backgroundColor: 'rgba(43, 105, 97, 0.1)',
										borderWidth: 0,
										type: 'box',
										xMin: '2024-01-06',
									},
									line: {
										type: 'line',
										borderWidth: 3,
										borderColor: 'rgba(5, 98, 66, 0.6)',
										borderDash: [5, 5],
										yMin: 6,
										yMax: 6,
									},
								},
							},
							// tooltip: {
							// 	mode: 'index',
							// 	intersect: false,
							// 	displayColors: true,
							// 	callbacks: {
							// 		title: function (context) {
							// 			return `What title for ${context[0].label}?`
							// 		},
							// 	},
							// },
						},
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
								ticks: {
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
								ticks: {
									color: 'black',
									font: {
										family: "'Mogra', system-ui",
										size: 20,
									},
								},
							},
						},
					}}
					data={{
						labels: [
							'2024-01-01',
							'2024-01-02',
							'2024-01-03',
							'2024-01-04',
							'2024-01-05',
							'2024-01-06',
							'2024-01-07',
							'2024-01-08',
							'2024-01-09',
							'2024-01-10',
						],
						datasets: [
							{
								label: 'What data label?',
								data: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6],
								backgroundColor: 'transparent',
								borderColor: '#834B16',
								fill: 'start',
								pointStyle: ['circle', 'rect', chartPointDoge, 'triangle'],
								pointRadius: 10,
							},
						],
					}}
				/>
			</div>
		</section>
	)
}
