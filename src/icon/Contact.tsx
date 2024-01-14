export function CoinGecko({
	theme,
	width,
}: {
	theme: 'red' | 'white'
	width: number
}) {
	return (
		<a
			href="https://www.coingecko.com/en/coins/bellscoin"
			target="_blank"
			rel="noreferrer"
		>
			<svg height={width} width={width}>
				<use href="/sprite.svg#coinGecko" id={`coinGecko-${theme}`} />
			</svg>
		</a>
	)
}

export function Discord({ fill, width }: { fill: string; width: number }) {
	return (
		<a href="https://t.co/4DCHZEdSSE" target="_blank" rel="noreferrer">
			<svg height={width} width={width}>
				<use href="/sprite.svg#discord" fill={fill} />
			</svg>
		</a>
	)
}

export function Github({ fill, width }: { fill: string; width: number }) {
	return (
		<a href="https://github.com/Nintondo" target="_blank" rel="noreferrer">
			<svg height={width} width={width}>
				<use href="/sprite.svg#github" fill={fill} />
			</svg>
		</a>
	)
}

export function Telegram({ fill, width }: { fill: string; width: number }) {
	return (
		<a href="https://t.me/BellsCoinOfficial" target="_blank" rel="noreferrer">
			<svg height={width} width={width}>
				<use href="/sprite.svg#telegram" fill={fill} />
			</svg>
		</a>
	)
}

export function Twitter({ fill, height }: { fill: string; height: number }) {
	return (
		<a href="https://twitter.com/_Bellscoin" target="_blank" rel="noreferrer">
			<svg height={height} viewBox="0 0 36 36">
				<use href="/sprite.svg#twitter" fill={fill} />
			</svg>
		</a>
	)
}
