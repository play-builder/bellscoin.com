import { useState } from 'react'

import bellsGenesis37 from '~/assets/Bells Genesis-37.png'
import bellsGenesis53 from '~/assets/Bells Genesis-53.png'
import bellsGenesis62 from '~/assets/Bells Genesis-62.png'
import bellsGenesis63 from '~/assets/Bells Genesis-63.png'
import bellsGenesis7 from '~/assets/Bells Genesis-7.png'

import {
	CoinGecko,
	Discord,
	Github,
	Linktree,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

interface LinkGroup {
	icon: string
	text: string
	href?: string
	links?: {
		text: string
		href: string
	}[]
}

const linkGroups: LinkGroup[] = [
	{
		icon: bellsGenesis7,
		text: 'BELSCAN',
		links: [
			{ text: 'BELSCAN', href: 'https://belscan.io/' },
			{ text: 'BELLS QUARK', href: 'https://bells.quark.blue/tx/' },
		],
	},
	{
		icon: bellsGenesis37,
		text: 'NODE WALLET',
		href: 'https://github.com/Nintondo/bellscoin/releases/tag/2.0.0',
	},
	{
		icon: bellsGenesis62,
		text: 'WALLETS',
		links: [
			{
				text: 'NODE(QT)WALLETS',
				href: 'https://github.com/Nintondo/bellscoin/releases/tag/2.0.0',
			},
			{ text: 'ORDINALS WALLET', href: 'https://bells.ordinalswallet.com/' },
			{ text: 'FX WALLET', href: 'https://www.fxwallet.com/' },
			{
				text: 'NINTONDO WALLET',
				href: 'https://github.com/Nintondo/bellscoin/releases/tag/2.0.0',
			},
		],
	},
	{
		icon: bellsGenesis63,
		text: 'EXCHANGES',
		href: '#exchanges',
		links: [
			{ text: 'NONKYC', href: 'https://nonkyc.io/market/BEL_USDT' },
			{ text: 'XEGGEX', href: 'https://xeggex.com/market/BEL_USDT' },
			{
				text: 'COINEX',
				href: 'https://www.coinex.com/ko/exchange/bellscoin-usdt',
			},
		],
	},
	{
		icon: bellsGenesis53,
		text: 'ORDINALS',
		links: [
			{ text: 'BELLSCRIBE', href: 'https://bellscribe.com/' },
			{ text: 'BELS BELLS', href: 'https://belsbells.com/' },
			{ text: 'BELLS COIN PUNKS', href: 'https://bellscoinpunks.xyz/' },
			{ text: 'BELLINALS INDEXER', href: 'https://bellinals.nintondo.io/' },
			{ text: 'BELINALS', href: 'https://bell.drc20.fun/' },
			{ text: 'BRC-20 INDEXER', href: 'https://bells-indexer.netlify.app/' },
		],
	},
]
export default function Section1Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const onClose = () => {
		document.body.style.overflow = 'auto'
		setIsNavOpen(false)
	}

	return (
		<header>
			<div
				className={`${
					isNavOpen ? 'visible' : 'invisible'
				} fixed z-[2] h-screen w-screen bg-[rgba(0,0,0,0.5)]`}
				onClick={(e) => {
					if (e.target === e.currentTarget) {
						onClose()
					}
				}}
			>
				<nav className="ml-auto max-h-full w-[332px] overflow-y-auto rounded-l-[15px] border-[2px] border-[#08835E] bg-[#FFE46A] py-[18px] pl-[8px] pr-[20px] font-mogra leading-[1.2] text-[#525252] drop-shadow-[-30px_30px_30px_rgba(0,0,0,0.8)] [&_*]:tracking-305">
					<div
						className="absolute right-0 top-0 flex h-[47px] cursor-pointer items-center px-[14px]"
						onClick={onClose}
					>
						<svg width={18} height={18} viewBox="0 0 18 18">
							<line
								x1="0"
								y1="0"
								x2="18"
								y2="18"
								stroke="#525252"
								strokeWidth={2}
							/>
							<line
								x1="0"
								y1="18"
								x2="18"
								y2="0"
								stroke="#525252"
								strokeWidth={2}
							/>
						</svg>
					</div>
					{linkGroups.map((linkGroup) => (
						<div
							key={linkGroup.text}
							className="group grid grid-cols-[60px_1fr] items-center"
						>
							<img src={linkGroup.icon} alt="" width={60} height={60} />
							{linkGroup.href ? (
								<a
									href={linkGroup.href}
									{...(!linkGroup.href.startsWith('#') && {
										target: '_blank',
										rel: 'noreferrer',
									})}
									className="text-[24px] group-focus-within:text-[#ED2C31] group-hover:text-[#ED2C31]"
								>
									{linkGroup.text}
								</a>
							) : (
								<span className="text-[24px] group-focus-within:text-[#ED2C31] group-hover:text-[#ED2C31]">
									{linkGroup.text}
								</span>
							)}
							{linkGroup.links ? (
								<ul className="col-start-2 -mt-[8px] flex flex-col gap-y-[8px] pl-[8px] text-[16px]">
									{linkGroup.links.map((link) => (
										<li key={link.text}>
											<a
												href={link.href}
												target="_blank"
												rel="noreferrer"
												className="hover:text-[#ED2C31] focus:text-[#ED2C31]"
											>
												{link.text}
											</a>
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</nav>
			</div>
			<div className="h-[47px] bg-[#E60012] lg:h-[184px]">
				<div
					className="float-right flex h-full cursor-pointer flex-col justify-center gap-y-[5px] px-[14px] *:h-[2px] *:bg-white lg:hidden"
					onClick={() => {
						document.body.style.overflow = 'hidden'
						setIsNavOpen(true)
					}}
				>
					<div className="w-[18px]" />
					<div className="w-[12px]" />
					<div className="w-[18px]" />
				</div>
				<nav className="invisible mx-auto flex h-full max-w-[2560px] items-center justify-end space-x-[40px] pr-[90px] text-center font-mogra text-[24px] leading-[1.2] tracking-305 text-white *:relative *:z-[1] focus-within:*:text-[#FFE46A] hover:*:text-[#FFE46A] lg:visible [&_li]:text-white focus-within:[&_li]:text-[#08835E] hover:[&_li]:text-[#08835E] [&_ul]:invisible [&_ul]:absolute [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-y-[16px] [&_ul]:rounded-[13px] [&_ul]:bg-[#FFE46A] [&_ul]:px-[12px] [&_ul]:pb-[18px] [&_ul]:pt-[24px] [&_ul]:text-left [&_ul]:text-[24px] [&_ul]:leading-[20px] [&_ul]:drop-shadow-bubble">
					<div className="group" tabIndex={0}>
						<span>BELSCAN</span>
						<ul className="group-focus-within:visible group-hover:visible">
							<li>
								<a href="https://belscan.io/" target="_blank" rel="noreferrer">
									BELSCAN
								</a>
							</li>
							<li>
								<a
									href="https://bells.quark.blue/tx/"
									target="_blank"
									rel="noreferrer"
								>
									BELLS
									<br />
									QUARK
								</a>
							</li>
						</ul>
					</div>
					<a
						href="https://github.com/Nintondo/bellscoin/releases/tag/2.0.0"
						target="_blank"
						rel="noreferrer"
					>
						NODE
						<br />
						DOWNLOAD
					</a>
					<div className="group" tabIndex={0}>
						<span>WALLETS</span>
						<ul className="group-focus-within:visible group-hover:visible">
							<li>
								<a
									href="https://github.com/Nintondo/bellscoin/releases/tag/2.0.0"
									target="_blank"
									rel="noreferrer"
								>
									NODE(QT)
									<br />
									WALLET
								</a>
							</li>
							<li>
								<a
									href="https://bells.ordinalswallet.com/"
									target="_blank"
									rel="noreferrer"
								>
									ORDINALS
									<br />
									WALLET
								</a>
							</li>
							<li>
								<a
									href="https://www.fxwallet.com/"
									target="_blank"
									rel="noreferrer"
								>
									FXWALLET
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Nintondo/bellscoin/releases/tag/2.0.0"
									target="_blank"
									rel="noreferrer"
								>
									NINTONDO
									<br />
									WALLET
								</a>
							</li>
						</ul>
					</div>
					<div className="group">
						<a href="#exchanges">EXCHANGES</a>
						<ul className="group-focus-within:visible group-hover:visible">
							<li>
								<a
									href="https://www.coinex.com/ko/exchange/bellscoin-usdt"
									target="_blank"
									rel="noreferrer"
								>
									COINEX
								</a>
							</li>
							<li>
								<a
									href="https://xeggex.com/market/BEL_USDT"
									target="_blank"
									rel="noreferrer"
								>
									XEGGEX
								</a>
							</li>
							<li>
								<a
									href="https://nonkyc.io/market/BEL_USDT"
									target="_blank"
									rel="noreferrer"
								>
									NONKYC
								</a>
							</li>
						</ul>
					</div>
					<div className="group" tabIndex={0}>
						<span>ORDINALS</span>
						<ul className="group-focus-within:visible group-hover:visible">
							<li>
								<a
									href="https://bellscribe.com/"
									target="_blank"
									rel="noreferrer"
								>
									BELLSCRIBE
								</a>
							</li>
							<li>
								<a
									href="https://belsbells.com/"
									target="_blank"
									rel="noreferrer"
								>
									BELS BELLS
								</a>
							</li>
							<li>
								<a
									href="https://bellscoinpunks.xyz/"
									target="_blank"
									rel="noreferrer"
								>
									BELLS COIN
									<br />
									PUNKS
								</a>
							</li>
							<li>
								<a
									href="https://bellinals.nintondo.io/"
									target="_blank"
									rel="noreferrer"
								>
									BELLINALS
									<br />
									INDEXER
								</a>
							</li>
							<li>
								<a
									href="https://bell.drc20.fun/"
									target="_blank"
									rel="noreferrer"
								>
									BELINALS
								</a>
							</li>
							<li>
								<a
									href="https://bells-indexer.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									BRC-20
									<br />
									INDEXER
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="h-[43px] bg-[#FFE46A] lg:h-[96px]">
				<nav className="invisible mx-auto flex h-full max-w-[2560px] items-center justify-end space-x-[40px] pr-[90px] text-[#FFE46A] lg:visible">
					<Github width={50} />
					<Twitter height={44} />
					<Telegram width={50} />
					<Discord width={50} />
					<CoinGecko width={50} />
					<Linktree height={48} />
				</nav>
			</div>
		</header>
	)
}
