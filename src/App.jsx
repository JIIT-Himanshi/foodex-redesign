import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustStrip from './components/TrustStrip/TrustStrip'
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories'
import BestSellers from './components/BestSellers/BestSellers'
import FoodexDifference from './components/FoodexDifference/FoodexDifference'
import TrustedPartnersMarquee from './components/TrustedPartnersMarquee/TrustedPartnersMarquee'
import NewsletterSection from './components/NewsletterSection/NewsletterSection'

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
			<Hero />
      <TrustStrip />
      <FeaturedCategories />
			<BestSellers />
      <FoodexDifference />
      <TrustedPartnersMarquee />
			<NewsletterSection />
		</main>
    </>
  )
}

export default App