import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustStrip from './components/TrustStrip/TrustStrip'
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories'
import BestSellers from './components/BestSellers/BestSellers'

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
			<Hero />
      <TrustStrip />
      <FeaturedCategories />
			<BestSellers />
		</main>
    </>
  )
}

export default App