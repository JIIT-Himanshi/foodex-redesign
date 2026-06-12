import Hero from '../components/Hero/Hero'
import TrustStrip from '../components/TrustStrip/TrustStrip'
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories'
import BestSellers from '../components/BestSellers/BestSellers'
import FoodexDifference from '../components/FoodexDifference/FoodexDifference'
import TrustedPartnersMarquee from '../components/TrustedPartnersMarquee/TrustedPartnersMarquee'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <BestSellers />
      <FoodexDifference />
      <TrustedPartnersMarquee />
      <NewsletterSection />
    </>
  )
}

export default HomePage
