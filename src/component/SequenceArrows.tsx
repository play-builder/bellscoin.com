const sequenceArrowsDirection = {
	down: 180,
	left: 270,
	right: 90,
	up: 0,
}

export function SequenceArrows({
	colorOff,
	colorOn,
	direction,
	firstOn = true,
	number,
	size,
}: {
	colorOff: string
	colorOn: string
	direction: keyof typeof sequenceArrowsDirection
	firstOn?: boolean
	number: number
	size: number
}) {
	const patternId = `${colorOff}-${colorOn}-${direction}-${number}-${size}`
	const isXAxis = direction === 'left' || direction === 'right'

	return (
		<svg
			height={isXAxis ? size : '100%'}
			width={!isXAxis ? size : '100%'}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<pattern
					id={`${patternId}-off`}
					viewBox="0 0 100 100"
					width={1 / number}
					height={1 / number}
				>
					<polygon
						points="50,10 84.64,70 15.46,70"
						fill={colorOff}
						transform={`rotate(${sequenceArrowsDirection[direction]}, 50, 50)`}
					/>
				</pattern>
				<pattern
					id={`${patternId}-on`}
					viewBox={`0 0 ${isXAxis ? '200 100' : '100 200'}`}
					width={1 / number}
					height={1 / number}
				>
					<polygon
						points="50,10 84.64,70 15.46,70"
						fill={colorOn}
						transform={`rotate(${sequenceArrowsDirection[direction]}, 50, 50)`}
					/>
				</pattern>
			</defs>
			<rect
				height={isXAxis ? number * size : '100%'}
				width={!isXAxis ? number * size : '100%'}
				fill={`url(#${patternId}-off)`}
			/>
			<rect
				style={{
					transform: `${
						direction === 'left' || direction === 'right'
							? 'translateX'
							: 'translateY'
					}(calc(-1 * max(calc((100% - ${number * size}px) / ${
						number * 2
					}), 0px)))`,
				}}
				className={`animate-blink ${firstOn ? 'animation-delay-[0.5s]' : ''}`}
				height={isXAxis ? number * size : '200%'}
				width={!isXAxis ? number * size : '200%'}
				fill={`url(#${patternId}-on)`}
			/>
			<rect
				style={{
					transform: `${
						isXAxis ? 'translateX' : 'translateY'
					}(min(calc((100% - ${number * size}px) / ${
						number * 2
					} + ${size}px), calc(100% / ${number}))`,
				}}
				className={`animate-blink ${firstOn ? '' : 'animation-delay-[0.5s]'}`}
				height={isXAxis ? number * size : '200%'}
				width={!isXAxis ? number * size : '200%'}
				fill={`url(#${patternId}-on)`}
			/>
		</svg>
	)
}
