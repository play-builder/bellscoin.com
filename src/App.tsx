import { useState } from 'react'

import Header from './Header.tsx'
import Intro from './Intro.tsx'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<main>
				<Intro />
			</main>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="font-chelsea text-3xl font-bold underline">
				Vite + React
			</h1>
			<div className="card font-mitr">
				<button
					className="font-mochiy"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs font-senior">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
