import { motion } from 'framer-motion'

import swiggyLogo from '../../assets/partners/swiggy.png'
import flipkartLogo from '../../assets/partners/flipkart.png'
import zeptoLogo from '../../assets/partners/zepto.png'
import spencersLogo from '../../assets/partners/spencers.png'
import metroLogo from '../../assets/partners/metro.png'
import dealShareLogo from '../../assets/partners/dealShare.png'
import kohinoorLogo from '../../assets/partners/kohinoor.png'

import '../../styles/trusted-partners-marquee.css'

const partners = [
	{ name: 'Swiggy', logo: swiggyLogo },
	{ name: 'Flipkart', logo: flipkartLogo },
	{ name: 'Zepto', logo: zeptoLogo },
	{ name: "Spencer's", logo: spencersLogo },
	{ name: 'Metro', logo: metroLogo },
	{ name: 'DealShare', logo: dealShareLogo },
	{ name: 'Kohinoor', logo: kohinoorLogo },
]

function TrustedPartnersMarquee() {
	const marqueeItems = [...partners, ...partners]

	return (
		<section aria-label="Trusted Retail Partners" className="trusted-partners-section">
			<div className="trusted-partners-container">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="trusted-partners-header"
				>
					<p className="trusted-partners-kicker">TRUSTED PARTNERS</p>
					<h2 className="trusted-partners-title font-display">
						Available Across India&apos;s Leading Retail Platforms
					</h2>
					<p className="trusted-partners-description">
						Foodex products are available through trusted retail and delivery partners across India.
					</p>
				</motion.div>

				<div className="trusted-partners-marquee" aria-label="Retail partner logos">
					<div className="trusted-partners-marquee-fade trusted-partners-marquee-fade-left" aria-hidden="true" />
					<div className="trusted-partners-marquee-fade trusted-partners-marquee-fade-right" aria-hidden="true" />

					<div className="trusted-partners-marquee-viewport">
						<div className="trusted-partners-marquee-track">
							<div className="trusted-partners-marquee-row">
								{marqueeItems.map((partner, index) => (
									<div className="trusted-partners-logo" key={`${partner.name}-${index}`}>
										<img src={partner.logo} alt={partner.name} className="trusted-partners-logo-image" />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrustedPartnersMarquee