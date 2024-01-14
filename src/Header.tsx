import {
	CoinGecko,
	Discord,
	Github,
	Telegram,
	Twitter,
} from './icon/Contact.tsx'

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
				<Github fill="#E60012" width={36} />
				<Twitter fill="#E60012" height={32} />
				<Telegram fill="#E60012" width={36} />
				<Discord fill="#E60012" width={36} />
				<CoinGecko theme="red" width={36} />
			</nav>
		</header>
	)
}
