import { motion } from 'framer-motion'

import '../../styles/newsletter-section.css'

function NewsletterSection() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<section aria-label="Newsletter" className="newsletter-section">
			{/* <div className="newsletter-watermark" aria-hidden="true">
				FOODEX
			</div> */}

			<div className="newsletter-container">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.55, ease: 'easeOut' }}
					className="newsletter-content"
				>
					<p className="newsletter-kicker">STAY CONNECTED</p>
					<h2 className="newsletter-title font-display">Be The First To Discover New Launches</h2>
					<p className="newsletter-description">
						Get updates about new products, festive collections, special gift packs and exclusive Foodex offerings.
					</p>

					<form className="newsletter-form" onSubmit={handleSubmit}>
						<label htmlFor="newsletter-email" className="newsletter-visually-hidden">
							Email address
						</label>
						<input
							id="newsletter-email"
							type="email"
							required
							placeholder="Enter your email address"
							className="newsletter-input"
						/>
						<button type="submit" className="newsletter-button">
							Subscribe
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}

export default NewsletterSection
