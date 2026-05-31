import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustStrip from './components/TrustStrip/TrustStrip'
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories'

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
			<Hero />
      <TrustStrip />
      <FeaturedCategories />
		</main>
    </>
  )
}

export default App