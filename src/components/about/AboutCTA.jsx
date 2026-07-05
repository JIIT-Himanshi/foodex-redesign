import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function AboutCTA() {
	return (
		<section className="about-section about-cta-section">
			<div className="about-section-container">
				<motion.div
					className="about-cta-panel"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<p className="about-section-kicker about-cta-kicker">Take the Next Step</p>
					<h2 className="about-cta-title font-display">Experience the Taste Loved by Generations</h2>
					<p className="about-cta-copy">
						Explore the product catalogue or connect with the Foodex team to learn more about distribution, retail, and partnership opportunities.
					</p>

					<div className="about-cta-actions">
						<a href="/products" className="about-primary-button about-primary-button-light font-display">
							Explore Products
						</a>
						<a href="mailto:contact@foodex.in" className="about-secondary-button font-display">
							<Mail size={16} />
							Contact Us
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default AboutCTA