import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustStrip from './components/TrustStrip/TrustStrip'

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
			<Hero />
      <TrustStrip />
		</main>
    </>
  )
}

export default App