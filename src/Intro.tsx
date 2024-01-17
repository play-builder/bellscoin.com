import mainBackground from '~/assets/main-background.svg'

export default function Intro() {
	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat px-[calc(28000%/1920)] pb-[100px] pt-[350px] font-chelsea uppercase tracking-305"
			style={{ backgroundImage: `url(${mainBackground})` }}
		>
			<div className="absolute left-0 top-0 h-full w-full bg-[#00C28966]"></div>
			<div className="relative">
				<h1 className="text-[45px] text-white">Bells ($Bel) coin</h1>
				<p className="text-[30px] text-white">
					was created by @BillyM2k,
					<br />
					the creator of Doge Coin.
					<br />
					<br />
					BElls was motivated by animal crossing, the most popular{' '}
					<span className="text-[30px] text-[#F73602]">Nintendo</span> game.
					<br />
					<br />
					Bells coin is the original meme coin born in 2013, but was revived in
					2023.
					<br />
					<br />
					Before Doge emerged, BELLS had already existed.
				</p>
				<p className="mt-[140px] text-center text-[36px]">
					Original Meme coin
					<br />
					No pre-mined
					<br />
					Fully decentralized
					<br />
					Proof of work
				</p>
			</div>
		</section>
	)
}
