import bellBag from '~/assets/bell-bag.png'
import mainBackground from '~/assets/main-background.svg'
import speechBubble from '~/assets/speech-bubble.png'
import welcomeBoard from '~/assets/welcome-board.png'

export default function Section2Intro() {
	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat px-[calc(42000%/1920)] pb-[88px] pt-[255px] font-chelsea uppercase"
			style={{ backgroundImage: `url(${mainBackground})` }}
		>
			<div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,194,137,0.4)]" />
			<div className="relative">
				<img
					src={welcomeBoard}
					alt="Welcome to Bells coin"
					width={859}
					height={543}
					className="absolute -left-[226px] bottom-[calc(100%+25px)] origin-bottom-left scale-[80%] lg:scale-100"
				/>
				<h1 className="-ml-[4px] text-[56px] leading-[1.8] tracking-305 text-white">
					Bells ($Bel) coin
				</h1>
				<p className="pr-[80px] text-[30px] leading-[1.2] tracking-305 text-white">
					was created by @BillyM2k,
					<br />
					the creator of Doge Coin.
					<br />
					<br />
					BElls was motivated by animal crossing, the most popular{' '}
					<span className="text-[30px] text-[#F73602]">Nintendo</span> game.
					<br />
					<br />
					Bells coin is the original meme coin born in 2013,
					<br />
					but was revived in 2023.
					<br />
					<br />
					Before Doge emerged,
					<br />
					BELLS had already existed.
				</p>
				<div className="mx-auto flex w-[1080px]">
					<p className="-ml-[60px] mt-[310px] inline-block w-[748px] flex-shrink-0 text-center text-[36px] leading-[1.2] tracking-305">
						Original Meme coin
						<br />
						<span className="text-[#ED2C31]">No pre-mined</span>
						<br />
						Fully decentralized
						<br />
						Proof of work
					</p>
					<div className="relative -left-[80px] top-[40px] flex">
						<img
							src={bellBag}
							alt="bell bag"
							width={262}
							height={333}
							className="absolute left-[140px] top-[196px] rotate-[11deg] drop-shadow-[14px_14px_15px_#313131]"
						/>
						<div className="flex-shrink-0">
							<div className="relative">
								<img
									src={speechBubble}
									alt="speech bubble"
									width={228}
									height={131}
								/>
								<span className="absolute top-[26px] text-center font-mogra text-[20px] leading-[1.5] tracking-305 text-[#F2C834]">
									I need more Bells coin ($BEL)!
								</span>
							</div>
							<div className="ml-[110px] mt-[11px] h-[42px] w-[42px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[128px] mt-[20px] h-[28px] w-[28px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[156px] mt-[15px] h-[20px] w-[20px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
						</div>
						<div className="ml-[32px] mt-[5px] flex-shrink-0">
							<div className="relative">
								<img
									src={speechBubble}
									alt="speech bubble"
									width={305}
									height={182}
								/>
								<span className="absolute top-[20px] w-full text-center font-mogra text-[16px] leading-[22px] tracking-305 text-[#F2C834]">
									It’s so cool
									<br />
									<span className="text-[#ED2C31]">meme coin</span>!
									<br />
									Bells coin
									<br />
									is 100%
									<br />
									decentralized,
									<br />
									powered by POW.
								</span>
							</div>
							<div className="ml-[180px] mt-[10px] h-[36px] w-[36px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[184px] mt-[25px] h-[28px] w-[28px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
							<div className="ml-[156px] mt-[24px] h-[20px] w-[20px] rounded-full bg-[#F8D703] drop-shadow-bubble" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
