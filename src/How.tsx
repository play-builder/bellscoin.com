import {
	CoinGecko,
	Discord,
	Github,
	Telegram,
	Twitter,
} from './icon/Contact.tsx'

export default function How() {
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
					<img src="/nkyc.png" alt="NKYC" width={128} />
					<img src="/xeggex.png" alt="XeggeX" width={292} />
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
				<img src="/ding-coin.png" alt="" />
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
				<img src="/ding-miner.png" alt="" />
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
				<img src="/ding-heart.png" alt="" />
				<h3 className="text-[#1D644F]">Contact</h3>
				<div className="col-start-2 mt-[10px] flex items-center gap-x-[36px] text-[#F0C10F]">
					<Github fill="white" width={48} />
					<Twitter fill="white" height={42} />
					<Telegram fill="white" width={48} />
					<Discord fill="white" width={48} />
					<CoinGecko theme="white" width={48} />
				</div>
			</div>
		</section>
	)
}
