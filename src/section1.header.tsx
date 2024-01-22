import {
	CoinGecko,
	Discord,
	Github,
	Linktree,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

export default function Section1Header() {
	return (
		<header className="">
			<nav className="flex h-[184px] w-full items-center justify-end space-x-[40px] bg-[#E60012] pr-[calc(9000%/1920)] text-center font-mogra text-[24px] leading-[1.2] tracking-305 text-white *:relative *:z-[1] hover:*:text-[#FFE46A] [&_li]:text-white hover:[&_li]:text-[#08835E] [&_ul]:invisible [&_ul]:absolute [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-y-[16px] [&_ul]:rounded-[13px] [&_ul]:bg-[#FFE46A] [&_ul]:px-[12px] [&_ul]:pb-[18px] [&_ul]:pt-[24px] [&_ul]:text-left [&_ul]:text-[24px] [&_ul]:leading-[20px] [&_ul]:drop-shadow-bubble">
				<div className="group">
					<span>BELSCAN</span>
					<ul className="group-hover:visible">
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
				<div className="group">
					<span>WALLETS</span>
					<ul className="group-hover:visible">
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
					<ul className="group-hover:visible">
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
				<div className="group">
					<span>ORDINALS</span>
					<ul className="group-hover:visible">
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
							<a href="https://belsbells.com/" target="_blank" rel="noreferrer">
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
