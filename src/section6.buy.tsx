import bellsGenesis31 from '~/assets/Bells Genesis-31.png'
import bellsGenesis35 from '~/assets/Bells Genesis-35.png'
import bellsGenesis6 from '~/assets/Bells Genesis-6.png'
import bellBag from '~/assets/bell-bag.png'
import coinex from '~/assets/coinex.svg'
import nkyc from '~/assets/nkyc.png'
import pepeCex from '~/assets/pepe-cex.jpg'
import pepeHappy from '~/assets/pepe-happy.jpg'
import pepeMining from '~/assets/pepe-mining.jpg'
import pepeMoon from '~/assets/pepe-moon.jpg'
import xeggex from '~/assets/xeggex.png'
import { SequenceArrows } from '~/component/SequenceArrows.tsx'

import {
	CoinGecko,
	Discord,
	Github,
	Linktree,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

export default function Section6Buy() {
	return (
		<section className="bg-gradient-to-b from-[#C7FFEE] to-[#F4BE04] pb-[100px] pt-[260px] *:tracking-[0.015em]">
			<div className="relative mx-auto w-[1080px]">
				<div className="absolute -left-[28px] -top-[124px]">
					<img
						src={bellBag}
						alt=""
						width={84}
						height={100}
						className="-rotate-[15deg] -scale-x-100"
					/>
					<img
						src={bellBag}
						alt=""
						width={140}
						height={167}
						className="-translate-y-[96px] translate-x-[36px] -rotate-[15deg]"
					/>
				</div>
				<div className="absolute right-[52px] top-[92px]">
					<img
						src={bellBag}
						alt=""
						width={68}
						height={82}
						className="rotate-[15deg] -scale-x-100"
					/>
					<img
						src={bellBag}
						alt=""
						width={140}
						height={169}
						className="-translate-y-[176px] translate-x-[54px] rotate-[15deg]"
					/>
				</div>
				<h2 className="text-center font-senior text-[60px] text-[#056242]">
					How to buy?
				</h2>
			</div>
			<div className="mx-auto mt-[100px] w-[1080px] font-senior text-[24px] leading-[1.33] text-[#691823]">
				<div className="flex items-center gap-x-[44px]">
					<img src={pepeMining} alt="Pepe is mining" width={520} height={520} />
					<p className="">
						Download <span className="text-[#ED2C31]">Qt wallet</span>
						<br />
						and mine <span className="text-[#ED2C31]">$Bel</span> by
						<br />
						yourself.
						<br />
						You can download the
						<br />
						wallet(Node)...
						<a
							href="https://github.com/Nintondo/bellscoin/releases/tag/2.0.0"
							target="_blank"
							rel="noreferrer"
							className="text-[#4534FF] hover:text-[#ED2C31] focus:text-[#ED2C31]"
						>
							here
						</a>
					</p>
				</div>
				<div className="relative h-[312px]">
					<div className="flex h-full w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="red"
							direction="down"
							number={10}
							size={24}
						/>
					</div>
					<div className="absolute -top-[14px] left-[272px] flex h-full w-[560px] items-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#08835E"
							direction="right"
							firstOn={false}
							number={20}
							size={24}
						/>
					</div>
					<div className="absolute right-0 top-1/2 flex h-1/2 w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#08835E"
							direction="down"
							firstOn={false}
							number={5}
							size={24}
						/>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col items-center">
						<img src={pepeHappy} alt="" width={520} height={520} />
						<p className="mt-[24px] text-center">
							If you mine,
							<br />
							you will be happy
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img src={pepeCex} alt="" width={520} height={520} />
						<p className="mt-[24px] text-center">
							You can also buy
							<br />
							some <span className="text-[#ED2C31]">$Bel</span> on CEX
						</p>
					</div>
				</div>
				<div className="relative h-[312px]">
					<div className="flex h-1/2 w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="down"
							number={5}
							size={24}
						/>
					</div>
					<div className="absolute right-0 top-0 flex h-1/2 w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#08835E"
							direction="down"
							number={5}
							size={24}
						/>
					</div>
					<div className="absolute left-[268px] top-0 flex h-1/2 w-[260px] items-end">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="right"
							firstOn={false}
							number={8}
							size={24}
						/>
					</div>
					<div className="absolute right-[268px] top-0 flex h-1/2 w-[260px] items-end">
						<SequenceArrows
							colorOff="white"
							colorOn="#08835E"
							direction="left"
							number={8}
							size={24}
						/>
					</div>
					<div className="absolute left-[254px] flex h-1/2 w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="down"
							firstOn={false}
							number={5}
							size={24}
						/>
					</div>
					<div className="absolute right-[254px] flex h-1/2 w-[520px] justify-center">
						<SequenceArrows
							colorOff="white"
							colorOn="#08835E"
							direction="down"
							firstOn={false}
							number={5}
							size={24}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<img src={pepeMoon} alt="" width={520} height={520} />
					<p className="mt-[24px] text-center">
						HODL and
						<br />
						Go to the moon
					</p>
				</div>
			</div>
			<div
				id="exchanges"
				className="mt-[100px] pt-[50px] text-center *:tracking-[0.015em]"
			>
				<h3 className="font-chelsea text-[60px]">Listing exchanges</h3>
				<div className="mt-[48px] flex items-center justify-center gap-x-[80px]">
					<a
						href="https://nonkyc.io/market/BEL_USDT"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<img src={nkyc} alt="NKYC" width={94} height={90} />
					</a>
					<a
						href="https://xeggex.com/market/BEL_USDT"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<img src={xeggex} alt="XeggeX" width={215} height={67} />
					</a>
					<a
						href="https://www.coinex.com/ko/exchange/bellscoin-usdt"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<img src={coinex} alt="CoinEx" width={189} />
					</a>
				</div>
				<p className="mt-[66px] font-senior text-[24px] leading-[1.5]">
					AND WE NEED MORE..
					<br />
					CONTACT TO{' '}
					<a
						href="https://t.co/4DCHZEdSSE"
						target="_blank"
						rel="noreferrer"
						className="hover:text-white focus:text-white"
					>
						DISCORD
					</a>
					<br />
					IF YOU LIKE <span className="text-[#ED2C31]">$BELLS</span>
				</p>
			</div>
			<div className="mx-auto mt-[166px] grid w-[1080px] grid-cols-[108px_1fr] items-center gap-x-[4px] text-[#505050] *:font-senior *:tracking-[0.015em] [&>img]:place-self-center [&_h3]:pt-[12px] [&_h3]:text-[34px]">
				<img src={bellsGenesis31} alt="" width={90} height={90} />
				<h3 className="text-[#ED2C31]">Disclaimer</h3>
				<p className="col-start-2 mb-[40px] mt-[10px] text-[20px] leading-[34px]">
					<span className="text-[#ED2C31]">$Bells</span> coin has no association
					with{' '}
					<span className="text-[#ED2C31]">“Animal Crossing” of Nintendo</span>.
					This coin is simply paying homage to a meme we all love and recognize.
					$Bells is a meme coin with no intrinsic value or expectation of
					financial return. There is no formal team or roadmap.
					<br />
					The coin is completely useless and for entertainment purposes only.
				</p>
				<img src={bellsGenesis6} alt="" width={90} height={90} />
				<h3 className="text-[#08835E]">Donation</h3>
				<p className="col-start-2 mb-[40px] mt-[10px] text-[20px] leading-[34px]">
					Bells coin is not pre-mined and is fully decentralized. The only
					individuals who have enjoyed the benefits of Bells coin are early
					miners. We are in need, so please consider donating to help us
					maintain this website.
					<br />
					<br />
					<span className="text-[#08835E]">Our $bells address :</span>
					<br />
					<span className="text-[#7D5252]">
						BCT6G3f8Z1s2aFxBMwWmTDp1Qk6k9twCRU
					</span>
				</p>
				<img src={bellsGenesis35} alt="" width={90} height={90} />
				<h3 className="text-[#1D644F]">Contact</h3>
				<div className="col-start-2 mt-[10px] flex items-center gap-x-[32px] text-[#F0C10F]">
					<Github width={44} />
					<Twitter height={40} />
					<Telegram width={44} />
					<Discord width={44} />
					<CoinGecko width={44} />
					<Linktree height={44} />
				</div>
			</div>
		</section>
	)
}
