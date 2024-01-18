import {
	CoinGecko,
	Discord,
	Github,
	Linktree,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

export default function Header() {
	return (
		<header>
			<nav className="flex h-[184px] w-full items-center justify-end space-x-[48px] bg-[#E60012] pr-[calc(9000%/1920)] text-center font-mogra text-[24px] leading-[1.2] tracking-305 text-white hover:*:text-[#FFE46A]">
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
			<nav className="flex h-[96px] w-full items-center justify-end space-x-[40px] bg-[#FFE46A] pr-[calc(9000%/1920)] text-[#FFE46A]">
				<Github width={50} />
				<Twitter height={44} />
				<Telegram width={50} />
				<Discord width={50} />
				<CoinGecko width={50} />
				<Linktree height={48} />
			</nav>
		</header>
	)
}
