export default function About() {
	return (
		<section className="bg-gradient-to-b from-[#7EE0FF] to-white pt-[240px] *:tracking-[0.015em]">
			<h2 className="text-center font-senior text-[82px] leading-[1.1] text-[#056242]">
				About&nbsp;
				<br />
				Bells
				<br />
				coin
			</h2>
			<article className="mx-auto mt-[64px] max-w-[1320px] font-senior text-[36px] leading-[2.4] text-[#08835E]">
				<h3 className="font-senior text-[56px] leading-[1.6] text-[#691823]">
					Roadmap
				</h3>
				<ol className="list-decimal pl-[60px] marker:font-chelsea marker:text-white [&_span:odd]:font-senior">
					<li>
						Restore the forgotten honor as the{' '}
						<span className="text-[#ED2C31]">oldest meme coin</span> in the
						world.
					</li>
					<li>
						Buy and <span className="text-[#ED2C31]">HODL</span>.
					</li>
					<li>Buy more if you like Bells.</li>
					<li>
						Maybe we make some{' '}
						<span className="text-[#ED2C31]">interesting things</span> like
						bellscription etc., but we are not sure.
					</li>
				</ol>
			</article>
			<div className="relative mt-[628px]">
				<img
					src="/doge-truck.png"
					alt="doge on truck"
					className="absolute bottom-[222px] right-[104px] w-[1020px]"
				/>
				<div className="h-[64px] bg-[url('/sprout.png')] bg-contain bg-repeat-x"></div>
				<div className="h-[312px] bg-[url('/grass.png')] bg-[length:120px_104px] bg-repeat"></div>
				<div className="h-[85px] bg-[url('/soil.png')] bg-[length:120px_104px] bg-repeat-x"></div>
			</div>
		</section>
	)
}
