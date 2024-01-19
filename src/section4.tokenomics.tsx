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

import bellBag from '~/assets/bell-bag.png'
import bellCoins from '~/assets/bell-coins.png'
import ribbon from '~/assets/ribbon.svg'
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

const chartPointBellCoins = new Image(30, 30)
chartPointBellCoins.src = bellCoins

export default function Section4Tokenomics() {
	return (
		<section className="bg-[#FCC22D] pb-[460px]">
			<div className="relative overflow-hidden pb-[44px] pt-[36px]">
				<div className="relative -translate-y-[40px] *:absolute *:left-0 *:top-0 *:h-[220px] *:w-[calc((100%-700px)/2)]">
					{/* TODO whole ribbon svg */}
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[8px] -translate-y-[136px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[4px] -translate-y-[104px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[12px] -translate-y-[76px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[20px] -translate-y-[48px]"
					/>
				</div>
				<div className="relative -translate-y-[40px] -scale-x-100 *:absolute *:left-0 *:top-0 *:h-[220px] *:w-[calc((100%-700px)/2)]">
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[8px] -translate-y-[136px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[4px] -translate-y-[104px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[12px] -translate-y-[76px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[20px] -translate-y-[48px]"
					/>
				</div>
				<div className="relative mx-auto flex h-[166px] w-[994px] flex-col items-center justify-center drop-shadow-bubble">
					<div className="absolute z-[-1] h-full w-full bg-[#ED2C31] [clip-path:polygon(100%_0,95%_50%,100%_100%,0%_100%,5%_50%,0%_0%)]" />
					<h2 className="-mt-[16px] font-mitr text-[60px] tracking-305 text-[#F4BE04] text-shadow">
						TOKENOMICS
					</h2>
					<span className="mb-[-25px] font-mogra text-[24px] tracking-305 text-white">
						ARCHIVE LINK
					</span>
				</div>
				<div className="mt-[100px] flex justify-center gap-x-[15px] font-mogra text-[22px] uppercase leading-[1.2] tracking-305 *:h-[300px] *:w-[520px] *:rounded-[15px] *:bg-white *:px-[28px] *:py-[20px]">
					<div className="grid grid-cols-[1.5fr_1fr] items-center drop-shadow-bubble odd:*:text-[#404040] even:*:text-[#ED2C31]">
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
							1 to block 100
							<br />
							(Epoch 1)
						</span>
						<span>2 bells</span>
					</div>
					<div className="grid grid-cols-[1.3fr_1fr] items-center drop-shadow-bubble odd:*:text-[#404040] even:*:pl-[16px] even:*:text-[#ED2C31]">
						<span>Current supply</span> {/* TODO sync?  */}
						<span>13,194,418</span>
						<span>Price</span>
						<span>0.329999</span>
						<span>Marketcap(USD)</span>
						<span>3,364,147</span>
						<span>
							Network
							<br />
							hashrate
						</span>
						<span>
							107.40 <span className="font-oleo">TH/S</span>
						</span>
					</div>
				</div>
				<div className="mt-[176px] grid grid-cols-[1fr_170px_1fr] [&>*:nth-child(3n+1)]:justify-self-end">
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellBag}
							alt=""
							width={153}
							className="absolute -left-[70px] -top-[94px]"
						/>
						<img
							src={bellBag}
							alt=""
							width={153}
							className="absolute -top-[94px] left-[8px]"
						/>
						<h4 className="px-[36px] text-right text-[34px] tracking-305">
							EPOCH
							<span className="text-[#08835E]">2</span>
						</h4>
						<span className="mt-[-8px] block px-[36px] text-right text-[18px] tracking-305">
							(~1st 90days)
						</span>
						<h5 className="mt-[16px] text-center text-[24px] leading-[26px] tracking-305 text-[#6A4E41]">
							Block
							<br />
							101 - 129,600
						</h5>
						<div className="mt-[20px] grid grid-cols-3 gap-y-[6px] px-[40px] text-[20px] tracking-305 [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[4px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>10,000</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>1,000</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>14%</span>
							<span>250</span>
							<span>$BEL</span>
							<span>20%</span>
							<span>100</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>50</span>
							<span>$BEL</span>
						</div>
					</div>
					<div className="flex items-center justify-evenly px-[4px]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="right"
							size={26}
							number={5}
						/>
					</div>
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellBag}
							alt=""
							width={150}
							className="absolute -left-[53px] -top-[91px]"
						/>
						<h4 className="px-[36px] text-right text-[34px] tracking-305">
							EPOCH
							<span className="text-[#08835E]">3</span>
						</h4>
						<span className="mt-[-8px] block px-[36px] text-right text-[18px] tracking-305">
							(~2nd 90days)
						</span>
						<h5 className="mt-[16px] text-center text-[24px] leading-[26px] tracking-305 text-[#6A4E41]">
							Block
							<br />
							129,601 - 259,200
						</h5>
						<div className="mt-[20px] grid grid-cols-3 gap-y-[6px] px-[40px] text-[20px] tracking-305 [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[12px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>5,000</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>250</span>
							<span>$BEL</span>
							<span>14%</span>
							<span>125</span>
							<span>$BEL</span>
							<span>20%</span>
							<span>50</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>20</span>
							<span>$BEL</span>
						</div>
					</div>
					<div></div>
					<div></div>
					<div className="flex h-[170px] w-[522px] flex-col items-center justify-evenly py-[4px]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="down"
							size={26}
							number={5}
						/>
					</div>
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellCoins}
							alt=""
							width={156}
							className="absolute -left-[40px] -top-[36px]"
						/>
						<h4 className="px-[36px] text-right text-[34px] tracking-305">
							EPOCH
							<span className="text-[#08835E]">5</span>
						</h4>
						<span className="mt-[-8px] block px-[36px] text-right text-[18px] tracking-305">
							&nbsp;
						</span>
						<h5 className="mt-[16px] text-center text-[24px] leading-[26px] tracking-305 text-[#6A4E41]">
							After
							<br />
							Block 518,400
						</h5>
						<p className="mt-[44px] text-center text-[24px] tracking-305 text-[#ED2C31]">
							2&nbsp;&nbsp;<span className="text-[#F4BE04]">$Bel</span>
							<br />
							Per 1 Block
						</p>
						<p className="mt-[24px] text-center text-[20px] tracking-305 text-[#6A4E41]">
							daily
							<br />
							2,820 BElls
						</p>
					</div>
					<div className="flex items-center justify-evenly px-[4px]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="left"
							size={26}
							number={5}
						/>
					</div>
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellBag}
							alt=""
							width={105}
							className="absolute -left-[29px] -top-[43px]"
						/>
						<h4 className="px-[36px] text-right text-[34px] tracking-305">
							EPOCH
							<span className="text-[#08835E]">4</span>
						</h4>
						<span className="mt-[-8px] block px-[36px] text-right text-[18px] tracking-305">
							(~next 180days)
						</span>
						<h5 className="mt-[16px] text-center text-[24px] leading-[26px] tracking-305 text-[#6A4E41]">
							Block
							<br />
							259,001 - 518,400
						</h5>
						<div className="mt-[20px] grid grid-cols-3 gap-y-[12px] px-[40px] text-[20px] tracking-305 [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[16px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>50</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>25</span>
							<span>$BEL</span>
							<span>34%</span>
							<span>10</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>5</span>
							<span>$BEL</span>
						</div>
					</div>
				</div>
				<h3 className="mt-[308px] text-center font-chelsea text-[64px] leading-[74px] text-[#834B16]">
					Bellscoin emissions
				</h3>
				<Line
					className="mx-auto mt-[140px] w-full !max-w-[1280px]"
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
								pointStyle: ['circle', 'rect', chartPointBellCoins, 'triangle'],
								pointRadius: 10,
							},
						],
					}}
				/>
			</div>
		</section>
	)
}
