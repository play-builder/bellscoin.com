import dingCoin from '~/assets/ding-coin.png'
import dogeTruck from '~/assets/doge-truck.png'
import grass from '~/assets/grass.png'
import soil from '~/assets/soil.png'
import speechBubble from '~/assets/speech-bubble.png'
import sprout from '~/assets/sprout.png'

export default function Section5About() {
	return (
		<section className="bg-gradient-to-b from-[#7EE0FF] to-white pt-[300px] *:tracking-[0.015em]">
			<div className="relative mx-auto w-[1080px]">
				<div className="absolute -top-[100px] left-[52px]">
					<img src={dingCoin} alt="" width={166} className="ml-[46px]" />
					<img src={dingCoin} alt="" width={118} className="-mt-[36px]" />
					<img
						src={dingCoin}
						alt=""
						width={76}
						className="-mt-[49px] ml-[95px]"
					/>
				</div>
				<div className="absolute right-[84px]">
					<img src={dingCoin} alt="" width={95} className="" />
					<img
						src={dingCoin}
						alt=""
						width={135}
						className="-mt-[17px] ml-[20px]"
					/>
					<img src={dingCoin} alt="" width={76} className="-mt-[65px]" />
				</div>
				<h2 className="text-center font-senior text-[56px] leading-[1.25] text-[#056242]">
					About
					<br />
					Bells coin
				</h2>
			</div>
			<article className="mx-auto mt-[200px] w-[1080px] max-w-[1320px] font-senior text-[34px] leading-[60px] text-[#08835E]">
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
				<div className="absolute bottom-[360px] right-[calc(36800%/1920)]">
					<div className="absolute -top-[344px] left-[260px]">
						<div className="relative">
							<img src={speechBubble} alt="speech bubble" width={373} />
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
					<img src={dogeTruck} alt="doge on truck" width={805} />
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
