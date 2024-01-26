import { useEffect, useRef, useState } from 'react'

import bellBag from '~/assets/bell-bag.png'
import dogeCoin from '~/assets/doge-coin.png'
import dogeTesla from '~/assets/doge-tesla.png'
import leaf from '~/assets/leaf.svg'
import speechBubble from '~/assets/speech-bubble.png'
import { useViewportSize } from '~/util/use-viewport-size.ts'

export default function Section3History() {
	return (
		<section>
			<div className="relative bg-[#FFFBB4] pb-[20px] pt-[37px] lg:pb-[258px] lg:pt-[515px]">
				<BackgroundLeaves />
				<div className="relative mx-auto flex flex-col lg:w-[1080px]">
					<p className="mx-auto w-[270px] font-chelsea text-[18px] uppercase leading-[22px] tracking-305 text-[#F4BE04] lg:ml-[455px] lg:w-auto lg:text-[34px] lg:leading-[50px]">
						Bells ($Bel) was
						<br />
						developed by
						<br />
						<span className="text-[#ED2C31]">@BillyM2k</span> in 2013,
						<br />
						8days before
						<br />
						<span className="inline-flex items-end">
							<span className="text-[#ED2C31] lg:order-1 lg:pl-[20px]">
								DOGE coin
							</span>
							<img
								src={dogeCoin}
								alt="DOGE"
								width={45}
								height={45}
								className="inline lg:w-[88px]"
							/>
						</span>
						<br />
						was released in the world
					</p>
					<div className="relative mx-auto mt-[100px] translate-x-[52px] lg:ml-[192px] lg:mt-[40px]">
						<div className="absolute -translate-x-[120px] -translate-y-[80px] lg:-translate-x-[calc(100%-80px)] lg:-translate-y-[calc(100%-67px)]">
							<div className="relative lg:ml-[22px]">
								<img
									src={speechBubble}
									alt="speech bubble"
									width={127}
									height={83}
									className="lg:w-[253px]"
								/>
								<span className="absolute top-[10px] w-full text-center font-mogra text-[12px] uppercase leading-[12px] tracking-305 lg:top-[16px] lg:text-[24px] lg:leading-[26px]">
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
							<div className="ml-[17px] mt-[4px] h-[17px] w-[17px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-mt-[8px] lg:ml-0 lg:h-[42px] lg:w-[42px]" />
							<div className="ml-[14px] mt-[4px] h-[13px] w-[13px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-0 lg:mt-[15px] lg:h-[32px] lg:w-[32px]" />
							<div className="ml-[21px] mt-[4px] h-[9px] w-[9px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[42px] lg:mt-[12px] lg:h-[22px] lg:w-[22px]" />
							<div className="animate-[jump-shaking_1s_infinite]">
								<img
									src={bellBag}
									alt="bell bag"
									width={76}
									height={95}
									className="ml-[25px] -scale-x-100 lg:-mt-[10px] lg:ml-[42px] lg:w-[191px]"
								/>
							</div>
						</div>
						<div className="mt-[40px] flex flex-shrink-0 animate-[jump-shaking-2_.5s_linear_infinite] lg:ml-[22px] lg:mt-[5px]">
							<img
								src={dogeTesla}
								alt="doge on tesla"
								width={180}
								height={180}
								className="lg:w-[400px]"
							/>
							<div className="absolute -translate-y-[100px] translate-x-[100px] lg:translate-x-[420px] lg:translate-y-[20px]">
								<div className="relative lg:ml-[112px]">
									<img
										src={speechBubble}
										alt="speech bubble"
										width={69}
										height={44}
										className="lg:w-[195px]"
									/>
									<span className="absolute top-[8px] w-full text-center font-mogra text-[12px] leading-[12px] tracking-305 lg:top-[15px] lg:pl-[10px] lg:text-[36px] lg:leading-[1.2]">
										SO,,
										<br />
										WHAT?
									</span>
								</div>
								<div className="ml-[23px] mt-[4px] h-[16px] w-[16px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[78px] lg:mt-0 lg:h-[36px] lg:w-[36px]" />
								<div className="ml-[16px] mt-[7px] h-[11px] w-[11px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[36px] lg:mt-[4px] lg:h-[28px] lg:w-[28px]" />
								<div className="mt-[8px] h-[10px] w-[10px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-mt-[4px] lg:h-[18px] lg:w-[18px]" />
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

	const viewportSize = useViewportSize()
	const cellSize = viewportSize === 'sm' ? 120 : 600

	useEffect(() => {
		if (!container?.current) {
			return
		}

		setM(Math.ceil(container.current.clientHeight / cellSize))
		setN(Math.ceil(container.current.clientWidth / cellSize))
	}, [cellSize, container])

	return (
		<div
			ref={container}
			className="absolute left-0 top-0 grid h-full w-full select-none place-items-center overflow-hidden"
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
							width={30}
							className="lg:w-[120px]"
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
