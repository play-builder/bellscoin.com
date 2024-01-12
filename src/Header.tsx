export default function Header() {
	return (
		<header>
			<nav className="flex h-[130px] w-full items-center justify-end space-x-[20px] bg-[#E60012] pr-[calc(23600%/1920)] text-center font-mogra text-[22px] leading-[1.2] text-white *:px-[8px] hover:*:text-[#FFE46A]">
				<a href="">BELSCAN</a>
				<a href="">
					NODE
					<br />
					DOWNLOAD
				</a>
				<a href="">WALLETS</a>
				<a href="">EXCHANGES</a>
				<a href="">ORDINALS</a>
			</nav>
			<nav className="flex h-[68px] w-full items-center justify-end space-x-[30px] bg-[#FFE46A] pr-[calc(6200%/1920)] text-[#FFE46A]">
				<a href="https://github.com/Nintondo" target="_blank" rel="noreferrer">
					<svg height={36} width={36}>
						<use href="/sprite.svg#github" fill="#E60012" />
					</svg>
				</a>
				<a
					href="https://twitter.com/_Bellscoin"
					target="_blank"
					rel="noreferrer"
				>
					<svg height={32} viewBox="0 0 36 36">
						<use href="/sprite.svg#twitter" fill="#E60012" />
					</svg>
				</a>
				<a
					href="https://t.me/BellsCoinOfficial"
					target="_blank"
					rel="noreferrer"
				>
					<svg height={36} width={36}>
						<use href="/sprite.svg#telegram" fill="#E60012" />
					</svg>
				</a>
				<a href="https://t.co/4DCHZEdSSE" target="_blank" rel="noreferrer">
					<svg height={36} width={36}>
						<use href="/sprite.svg#discord" fill="#E60012" />
					</svg>
				</a>
				<a
					href="https://www.coingecko.com/en/coins/bellscoin"
					target="_blank"
					rel="noreferrer"
				>
					<svg height={36} width={36}>
						<use href="/sprite.svg#coinGecko" id="coinGecko-red" />
					</svg>
				</a>
			</nav>
		</header>
	)
}
