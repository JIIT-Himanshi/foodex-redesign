import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import heroBanner from '../../assets/about/hero-banner.jpg'

function HeroBanner() {
	return (
		<section className="about-hero-section">
			<motion.img
				src={heroBanner}
				alt="Foodex India team and leadership at a company event"
				className="about-hero-image"
				loading="lazy"
				decoding="async"
				initial={{ scale: 1.08, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.1, ease: 'easeOut' }}
			/>

			<div className="about-hero-overlay" aria-hidden="true" />

			<div className="about-section-container about-hero-content-wrap">
				<motion.div
					className="about-hero-content"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				>
					<p className="about-section-kicker">About Foodex India</p>
					<h1 className="about-hero-title font-display">
						About Foodex India
					</h1>
					<p className="about-hero-subtitle">
						Delivering authentic taste, trusted quality, and memorable experiences for over 26 years.
					</p>

					<div className="about-hero-actions">
						<a href="/products" className="about-primary-button font-display">
							Explore Products
							<ArrowRight size={16} strokeWidth={2.2} />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroBanner