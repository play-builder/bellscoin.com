import sprite from '~/assets/sprite.svg'

export function CoinGecko({ width }: { width: number }) {
	return (
		<a
			href="https://www.coingecko.com/en/coins/bellscoin"
			target="_blank"
			rel="noreferrer"
		>
			<svg height={width} width={width} className="group">
				<use
					href={`${sprite}#coinGecko`}
					id="coinGecko-red"
					className="group-hover:opacity-0"
				/>
				<use
					href={`${sprite}#coinGecko`}
					id="coinGecko-white"
					className="opacity-0 group-hover:opacity-100"
				/>
			</svg>
		</a>
	)
}

export function Discord({ width }: { width: number }) {
	return (
		<a href="https://t.co/4DCHZEdSSE" target="_blank" rel="noreferrer">
			<svg
				height={width}
				width={width}
				fill="#E60012"
				className="hover:fill-white"
			>
				<use href={`${sprite}#discord`} />
			</svg>
		</a>
	)
}

export function Github({ width }: { width: number }) {
	return (
		<a href="https://github.com/Nintondo" target="_blank" rel="noreferrer">
			<svg
				height={width}
				width={width}
				fill="#E60012"
				className="hover:fill-white"
			>
				<use href={`${sprite}#github`} />
			</svg>
		</a>
	)
}

export function Linktree({ height }: { height: number }) {
	return (
		<a href="https://linktr.ee/bellscoin" target="_blank" rel="noreferrer">
			<svg
				height={height}
				viewBox="0 0 40 48"
				fill="#E60012"
				className="hover:fill-white"
			>
				<use href={`${sprite}#linktree`} />
			</svg>
		</a>
	)
}

export function Telegram({ width }: { width: number }) {
	return (
		<a href="https://t.me/BellsCoinOfficial" target="_blank" rel="noreferrer">
			<svg
				height={width}
				width={width}
				fill="#E60012"
				className="hover:fill-white"
			>
				<use href={`${sprite}#telegram`} />
			</svg>
		</a>
	)
}

export function Twitter({ height }: { height: number }) {
	return (
		<a href="https://twitter.com/_Bellscoin" target="_blank" rel="noreferrer">
			<svg
				height={height}
				viewBox="0 0 1200 1227"
				fill="#E60012"
				className="hover:fill-white"
			>
				<use href={`${sprite}#twitter`} />
			</svg>
		</a>
	)
}
