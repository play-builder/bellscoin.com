import { useEffect, useRef, useState } from 'react'

import bellsGenesis31 from '~/assets/Bells Genesis-31.png'
import apple from '~/assets/apple.png'
import cloud from '~/assets/cloud.png'
import dogeTruck from '~/assets/doge-truck.png'
import garland from '~/assets/garland.png'
import grass from '~/assets/grass.png'
import orange from '~/assets/orange.png'
import soil from '~/assets/soil.png'
import speechBubble from '~/assets/speech-bubble.png'
import sprout from '~/assets/sprout.png'

export default function Section5About() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#7EE0FF] to-white *:tracking-[0.015em]">
			<BackgroundClouds />
			<div className="relative min-w-[1920px] [&>:not(:first-child)]:absolute [&>:not(:first-child)]:origin-top">
				<img src={garland} alt="" height={200} className="h-[200px] w-full" />
				<div className="left-[32px] top-[60px] animate-[pendulum_0.8s_linear_alternate_infinite]">
					<img
						src={orange}
						alt=""
						width={78}
						className="rotate-[30deg] -scale-x-100"
					/>
				</div>
				<div className="left-[calc(14200%/1920)] top-[52px] animate-[pendulum_0.8s_linear_0.2s_alternate_infinite]">
					<img src={apple} alt="" width={100} className="rotate-[15deg]" />
				</div>
				<div className="left-[calc(36000%/1920)] top-[120px] animate-[pendulum_0.6s_linear_0.2s_alternate_infinite]">
					<img src={orange} alt="" width={71} className="-rotate-[15deg]" />
				</div>
				<div className="left-[calc(55800%/1920)] top-[140px] animate-[pendulum_0.9s_linear_0.1s_alternate_infinite]">
					<img src={orange} alt="" width={71} className="-rotate-[15deg]" />
				</div>
				<div className="right-[calc(97200%/1920)] top-[104px] animate-[pendulum_0.6s_linear_0.2s_alternate_infinite]">
					<img src={apple} alt="" width={112} className="rotate-[15deg]" />
				</div>
				<img
					src={orange}
					alt=""
					width={104}
					className="right-[calc(71000%/1920)] top-[149px] animate-[pendulum_1s_linear_0.2s_alternate_infinite]"
				/>
				<div className="right-[calc(41700%/1920)] top-[72px] animate-[pendulum_0.9s_linear_0.3s_alternate_infinite]">
					<img src={apple} alt="" width={156} className="rotate-[25deg]" />
				</div>
				<img
					src={orange}
					alt=""
					width={57}
					className="right-[calc(27400%/1920)] top-[140px] animate-[pendulum_0.2s_linear_alternate_infinite]"
				/>
				<img
					src={apple}
					alt=""
					width={74}
					className="-right-[12px] top-[84px] animate-[pendulum_0.5s_linear_0.1s_alternate_infinite]"
				/>
			</div>
			<div className="relative mx-auto mt-[200px] w-[1080px]">
				<div className="absolute -top-[100px] left-[56px]">
					<img
						src={bellsGenesis31}
						alt=""
						width={143}
						height={143}
						className="ml-[50px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={101}
						height={101}
						className="-mt-[36px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={66}
						height={66}
						className="-mt-[49px] ml-[92px]"
					/>
				</div>
				<div className="absolute right-[96px]">
					<img src={bellsGenesis31} alt="" width={82} height={82} />
					<img
						src={bellsGenesis31}
						alt=""
						width={116}
						height={116}
						className="-mt-[17px] ml-[20px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={66}
						height={66}
						className="-mt-[65px]"
					/>
				</div>
				<h2 className="text-center font-senior text-[56px] leading-[1.25] text-[#056242]">
					About
					<br />
					Bells coin
				</h2>
			</div>
			<article className="relative mx-auto mt-[200px] w-[1080px] max-w-[1320px] font-senior text-[34px] leading-[60px] text-[#08835E]">
				<h3 className="font-senior text-[60px] leading-[1] text-[#691823]">
					Roadmap
				</h3>
				<ol className="mt-[80px] list-decimal pl-[140px]">
					<li>
						Restore the forgotten
						<br />
						honor as the{' '}
						<span className="text-[#ED2C31]">
							oldest meme
							<br />
							coin
						</span>{' '}
						in the world.
					</li>
					<li>
						Buy and <span className="text-[#ED2C31]">HODL</span>.
					</li>
					<li>
						Buy more if you like
						<br />
						Bells.
					</li>
					<li>
						Maybe we make some <br />
						<span className="text-[#ED2C31]">interesting things</span> like
						<br />
						bellscription etc., but we
						<br />
						are not sure.
					</li>
				</ol>
			</article>
			<div className="relative mt-[668px]">
				<div className="absolute bottom-[360px] right-[calc(36800%/1920)] w-max animate-[slide-left_7s_linear_infinite,rattling_2s_linear_infinite]">
					<div className="absolute -top-[344px] left-[260px]">
						<div className="relative">
							<img
								src={speechBubble}
								alt="speech bubble"
								width={373}
								height={230}
							/>
							<span className="absolute top-[36px] w-[373px] text-center font-senior text-[24px] uppercase leading-[30px] text-[#525252]">
								Do you want
								<br />
								more
								<br />
								exchanges?
								<br />
								THEN{' '}
								<span className="text-[#ED2C31]">
									MAKE
									<br />
									SOME NOISE
								</span>
								!
							</span>
						</div>
						<div className="mt-[9px] h-[64px] w-[64px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
						<div className="-ml-[41px] mt-[9px] h-[50px] w-[50px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
						<div className="-ml-[68px] mt-[14px] h-[38px] w-[38px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
						<div className="-ml-[49px] mt-[37px] h-[24px] w-[24px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
					</div>
					<img src={dogeTruck} alt="doge on truck" width={805} height={460} />
				</div>
				<div
					style={{
						backgroundImage: `url(${sprout})`,
					}}
					className="h-[82px] bg-contain bg-repeat-x"
				></div>
				<div
					className="h-[370px] bg-[length:155px_auto] bg-repeat"
					style={{
						backgroundImage: `url(${grass})`,
					}}
				></div>
				<div
					className="h-[109px] bg-[length:155px_auto] bg-repeat-x"
					style={{
						backgroundImage: `url(${soil})`,
					}}
				></div>
			</div>
		</section>
	)
}

function BackgroundClouds() {
	const container = useRef<HTMLDivElement>(null)
	const [m, setM] = useState(0)
	const [n, setN] = useState(0)
	const cellSize = 800

	useEffect(() => {
		if (!container?.current) {
			return
		}

		setM(Math.ceil(container.current.clientHeight / cellSize))
		setN(Math.ceil(container.current.clientWidth / cellSize))
	}, [container])

	return (
		<div
			ref={container}
			className="absolute left-0 top-0 grid h-full w-full place-items-center overflow-hidden"
			style={{
				gridTemplate: `repeat(${m}, 1fr) / repeat(${n}, 1fr)`,
				gap: '80px',
			}}
		>
			{Array(m * n)
				.fill(null)
				.map((_, i) => {
					const x = Math.random() * cellSize - cellSize / 2
					const y = Math.random() * cellSize - cellSize / 2

					return (
						<img
							key={i}
							src={cloud}
							alt="cloud"
							width={150 * (0.2 + Math.random())}
							style={{
								animation: `horizontal-shaking ${2 + Math.random()}s infinite`,
								marginLeft: `${x}px`,
								marginTop: `${y}px`,
							}}
						/>
					)
				})}
		</div>
	)
}
