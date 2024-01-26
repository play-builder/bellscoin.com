import { useEffect, useState } from 'react'

export function useViewportSize() {
	const [viewportSize, setViewportSize] = useState<'sm' | 'lg'>(
		window.matchMedia('(min-width: 1300px)').matches ? 'lg' : 'sm',
	)

	useEffect(() => {
		// Safari < 14 does not support `addEventListener`
		window.matchMedia('(min-width: 1300px').addListener((e) => {
			setViewportSize(e.matches ? 'lg' : 'sm')
		})
	}, [])

	return viewportSize
}
