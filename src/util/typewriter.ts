import { ComponentPropsWithRef } from 'react'

const timer = (timeout: number) =>
	new Promise((res) => {
		setTimeout(res, timeout)
	})

type Element<T extends keyof HTMLElementTagNameMap> = {
	tagName: T
	text: string
} & ComponentPropsWithRef<T>

export async function typewriter<T extends keyof HTMLElementTagNameMap>(
	sentences: (string | Element<T> | null)[],
	container: HTMLElement,
	typingDelay = 30,
	newlineDelay = 150,
) {
	for (const sentence of sentences) {
		if (sentence === null) {
			await timer(newlineDelay)
			container.innerHTML += '<br />'
			continue
		}

		if (typeof sentence === 'string') {
			for (const character of sentence) {
				await timer(typingDelay)
				container.innerHTML += character
			}
		} else {
			const { tagName, text, ...props } = sentence
			const element = document.createElement(tagName)
			Object.assign(element, props)
			container.appendChild(element)
			for (const character of text) {
				await timer(typingDelay)
				element.innerHTML += character
			}
		}
	}
}
