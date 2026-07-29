import { useEffect } from 'react'
import DistributorHero from '../components/Distributors/DistributorHero'
import WhyPartner from '../components/Distributors/WhyPartner'
import NetworkStats from '../components/Distributors/NetworkStats'
import BusinessBenefits from '../components/Distributors/BusinessBenefits'
import HowItWorks from '../components/Distributors/HowItWorks'
import DistributorForm from '../components/Distributors/DistributorForm'
import DistributorFAQ from '../components/Distributors/DistributorFAQ'
import DistributorCTA from '../components/Distributors/DistributorCTA'

function DistributorPage() {
	useEffect(() => {
		document.title = 'Become a Distributor | Foodex'
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="flex flex-col min-h-screen">
			<DistributorHero />
			<WhyPartner />
			<NetworkStats />
			<BusinessBenefits />
			<HowItWorks />
			<DistributorForm />
			<DistributorFAQ />
			<DistributorCTA />
		</div>
	)
}

export default DistributorPage
