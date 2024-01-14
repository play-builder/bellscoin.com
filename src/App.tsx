import About from './About.tsx'
import Header from './Header.tsx'
import How from './How.tsx'
import Intro from './Intro.tsx'
import Tokenomics from './Tokenomics.tsx'

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<Tokenomics />
				<About />
				<How />
			</main>
		</>
	)
}
