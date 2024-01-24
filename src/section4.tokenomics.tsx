import { useEffect, useState } from 'react'

import bellBag from '~/assets/bell-bag.png'
import bellCoin from '~/assets/bell-coin.png'
import bellCoins from '~/assets/bell-coins.png'
import ribbon from '~/assets/ribbon.svg'
import starWand from '~/assets/star-wand.png'
import { SequenceArrows } from '~/component/SequenceArrows.tsx'
import { EmissionChart } from '~/section4.chart.tsx'

export default function Section4Tokenomics() {
	const [currentSupply, setCurrentSupply] = useState<
		number | 'loading' | 'not available'
	>('loading')
	const [price, setPrice] = useState<number | 'loading' | 'not available'>(
		'loading',
	)
	const marketCap =
		currentSupply === 'loading' || price === 'loading'
			? 'loading'
			: currentSupply === 'not available' || price === 'not available'
				? 'not available'
				: currentSupply * price
	const [hashRate, setHashRate] = useState<
		number | 'loading' | 'not available'
	>('loading')

	useEffect(() => {
		fetch('https://v2.belscan.io/ext/getmoneysupply')
			.then(async (response) => {
				setCurrentSupply(Math.floor(Number(await response.text())))
			})
			.catch(() => {
				setCurrentSupply('not available')
			})

		fetch('https://v2.belscan.io/ext/getcurrentprice')
			.then(async (response) => {
				const json = (await response.json()) as {
					last_price_usdt: number
					last_price_usd: number
				}
				const priceInUsd = json.last_price_usd
				setPrice(Number(priceInUsd.toString().slice(0, 10)))
			})
			.catch(() => {
				setPrice('not available')
			})

		fetch('https://v2.belscan.io/api/getnetworkhashps')
			.then(async (response) => {
				setHashRate(Number(await response.text()))
			})
			.catch(() => {
				setHashRate('not available')
			})
	}, [])

	return (
		<section className="overflow-hidden bg-[#FCC22D] pb-[460px]">
			<div className="relative pb-[44px] pt-[36px]">
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
					<div className="absolute h-full w-full bg-[#ED2C31] [clip-path:polygon(100%_0,95%_50%,100%_100%,0%_100%,5%_50%,0%_0%)]" />
					<div className="absolute h-full w-full">
						<img
							src={starWand}
							alt="star wand"
							className="absolute -top-[44px] left-[60px] w-[99px]"
						/>
						<div className="relative left-[108px] top-[12px] *:absolute">
							<img src={bellCoin} alt="" className="left-[26px] w-[30px]" />
							<img
								src={bellCoin}
								alt=""
								className="left-[42px] top-[19px] w-[30px]"
							/>
							<img
								src={bellCoin}
								alt=""
								className="left-[24px] top-[47px] w-[30px]"
							/>
							<img
								src={bellCoin}
								alt=""
								className="left-[22px] top-[29px] w-[26px]"
							/>
							<img src={bellCoin} alt="" className="top-[51px] w-[23px]" />
						</div>
					</div>
					<h2 className="relative -mt-[16px] font-mitr text-[60px] tracking-305 text-[#F4BE04] text-shadow">
						TOKENOMICS
					</h2>
					<a
						href="https://bitcointalk.org/index.php?topic=349695.0"
						target="_blank"
						rel="noreferrer"
						className="relative mb-[-25px] font-mogra text-[24px] tracking-305 text-white hover:text-[#F4BE04] focus:text-[#F4BE04]"
					>
						ARCHIVE LINK
					</a>
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
					<div className="grid grid-cols-[1.3fr_1fr] items-center !pr-[8px] drop-shadow-bubble odd:*:text-[#404040] even:*:pl-[8px] even:*:text-[#ED2C31]">
						<span>Current supply</span>
						<span>
							{typeof currentSupply === 'number'
								? currentSupply.toLocaleString()
								: currentSupply}
						</span>
						<span>Price(USD)</span>
						<span>
							{typeof price === 'number'
								? price.toLocaleString('en-US', {
										maximumFractionDigits: 6,
									})
								: price}
						</span>
						<span>Marketcap(USD)</span>
						<span>
							{typeof marketCap === 'number'
								? (~~marketCap).toLocaleString()
								: marketCap}
						</span>
						<span>
							Network
							<br />
							hashrate
						</span>
						<span>
							{typeof hashRate === 'number'
								? `${+(hashRate / 1_000_000_000_000)
										.toFixed(2)
										.slice(0, 6)} TH/S`
								: hashRate}{' '}
						</span>
					</div>
				</div>
				<div className="mt-[176px] grid grid-cols-[1fr_170px_1fr] [&>*:nth-child(3n+1)]:justify-self-end">
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellBag}
							alt=""
							width={153}
							height={182}
							className="absolute -left-[70px] -top-[94px]"
						/>
						<img
							src={bellBag}
							alt=""
							width={153}
							height={182}
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
							height={180}
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
							firstOn={false}
							size={26}
							number={5}
						/>
					</div>
					<div className="relative h-[360px] w-[380px] rounded-[69px] bg-white py-[20px] font-mogra uppercase leading-[1.2] drop-shadow-bubble">
						<img
							src={bellCoins}
							alt=""
							width={156}
							height={113}
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
							2,880 Bells
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
							height={126}
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
				<EmissionChart />
			</div>
		</section>
	)
}
