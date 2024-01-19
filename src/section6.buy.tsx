import dingCoin from '~/assets/ding-coin.png'
import dingHeart from '~/assets/ding-heart.png'
import dingMiner from '~/assets/ding-miner.png'
import nkyc from '~/assets/nkyc.png'
import xeggex from '~/assets/xeggex.png'

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
		<section className="bg-gradient-to-b from-[#C7FFEE] to-[#F4BE04] pb-[110px] pt-[240px] *:tracking-[0.015em]">
			<h2 className="text-center font-senior text-[82px] leading-[1.1] text-[#056242]">
				How to
				<br />
				buy?
			</h2>
			<div className="mt-[150px] text-center *:tracking-[0.015em]">
				<h3 className="font-chelsea text-[82px] leading-[1.1]">
					Listing exchanges
				</h3>
				<div className="mt-[56px] flex items-center justify-center gap-x-[148px]">
					<img src={nkyc} alt="NKYC" width={128} />
					<img src={xeggex} alt="XeggeX" width={292} />
				</div>
				<p className="mt-[96px] font-senior text-[30px] leading-[2]">
					AND WE NEED MORE..
					<br />
					CONTACT TO DISCORD IF YOU
					<br />
					LIKE <span className="text-[#F4BE04]">$BELLS</span>
				</p>
			</div>
			<div className="mt-[456px] grid grid-cols-[104px_1fr] items-center gap-x-[10px] pl-[calc(7400%/1920)] pr-[calc(13600%/1920)] text-[#505050] *:font-senior *:tracking-[0.015em] [&_h3]:pt-[10px] [&_h3]:text-[44px]">
				<img src={dingCoin} alt="" />
				<h3 className="text-[#ED2C31]">Disclaimer</h3>
				<p className="col-start-2 mb-[40px] mt-[10px]">
					<span className="text-[#ED2C31]">$Bells</span> coin has no association
					with{' '}
					<span className="text-[#ED2C31]">“Animal Crossing” of Nintendo</span>.
					<br />
					This coin is simply paying homage to a meme we all love and recognize.
					<br />
					$Bells is a meme coin with no intrinsic value or expectation of
					financial return.
					<br />
					There is no formal team or roadmap.
					<br />
					The coin is completely useless and for entertainment purposes only.
				</p>
				<img src={dingMiner} alt="" />
				<h3 className="text-[#08835E]">Donation</h3>
				<p className="col-start-2 mb-[40px] mt-[10px]">
					Bells coin is not pre-mined and is fully decentralized. The only
					individuals who have enjoyed the benefits of Bells coin are early
					miners. We are in need, so please consider donating to help us
					maintain this website.
					<br />
					<br />
					Our $bells address :{' '}
					<span className="text-[#7D5252]">
						BCT6G3f8Z1s2aFxBMwWmTDp1Qk6k9twCRU
					</span>
				</p>
				<img src={dingHeart} alt="" />
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
