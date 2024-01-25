import { useEffect, useRef, useState } from 'react'

import bellBag from '~/assets/bell-bag.png'
import dogeCoin from '~/assets/doge-coin.png'
import dogeTesla from '~/assets/doge-tesla.png'
import leaf from '~/assets/leaf.svg'
import speechBubble from '~/assets/speech-bubble.png'

export default function Section3History() {
	return (
		<section>
			<div className="relative bg-[#FFFBB4] pb-[258px] pt-[515px]">
				<BackgroundLeaves />
				<div className="mx-auto flex w-[1080px] flex-col">
					<p className="ml-[455px] font-chelsea text-[34px] uppercase leading-[50px] tracking-305 text-[#F4BE04]">
						Bells ($Bel) was
						<br />
						developed by
						<br />
						<span className="text-[#ED2C31]">@BillyM2k</span> in 2013,
						<br />
						8days before
						<br />
						<img
							src={dogeCoin}
							alt="DOGE"
							width={88}
							height={88}
							className="inline"
						/>
						<span className="pl-[20px] align-bottom text-[#ED2C31]">
							DOGE coin
						</span>
						<br />
						was released in the
						<br />
						world
					</p>
					<div className="relative ml-[192px] mt-[40px]">
						<div className="absolute -translate-x-[calc(100%-80px)] -translate-y-[calc(100%-67px)]">
							<div className="relative ml-[22px]">
								<img
									src={speechBubble}
									alt="speech bubble"
									width={253}
									height={169}
									className="h-[169px]"
								/>
								<span className="absolute top-[27px] w-full text-center font-mogra text-[24px] uppercase leading-[26px] tracking-305">
									I came into
									<br />
									the world
									<br />
									<span className="text-[#ED2C31]">8 days</span>
									<br />
									before you
									<br />
									did!
								</span>
							</div>
							<div className="-mt-[8px] ml-[0] h-[42px] w-[42px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[0] mt-[15px] h-[32px] w-[32px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[42px] mt-[12px] h-[22px] w-[22px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="animate-[jump-shaking_1s_infinite]">
								<img
									src={bellBag}
									alt="bell bag"
									width={191}
									height={238}
									className="-mt-[10px] ml-[42px] -scale-x-100"
								/>
							</div>
						</div>
						<div className="flex">
							<img
								src={dogeTesla}
								alt="doge on tesla"
								width={400}
								height={400}
								className="animate-[jump-shaking-2_.5s_linear_infinite]"
							/>
							<div className="ml-[22px] mt-[5px] flex-shrink-0">
								<div className="relative ml-[112px]">
									<img
										src={speechBubble}
										alt="speech bubble"
										width={195}
										height={124}
									/>
									<span className="absolute top-[15px] w-full pl-[10px] text-center font-mogra text-[36px] leading-[1.2] tracking-305">
										SO,,
										<br />
										WHAT?
									</span>
								</div>
								<div className="ml-[78px] h-[36px] w-[36px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
								<div className="ml-[36px] mt-[4px] h-[28px] w-[28px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
								<div className="-mt-[4px] h-[18px] w-[18px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function BackgroundLeaves() {
	const container = useRef<HTMLDivElement>(null)
	const [m, setM] = useState(0)
	const [n, setN] = useState(0)
	const cellSize = 600

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
							src={leaf}
							alt="leaf"
							width={120}
							style={{
								marginLeft: `${x}px`,
								marginTop: `${y}px`,
							}}
						/>
					)
				})}
		</div>
	)
}
