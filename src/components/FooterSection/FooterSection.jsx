import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import '../../styles/footer-section.css'

const quickLinks = ['Home', 'Products', 'About', 'Gallery', 'Distributors', 'Contact']

const categories = ['Namkeen', 'Sweets', 'Cookies', 'Ready To Eat', 'Gift Packs']

function SocialInstagramIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="foodex-footer-social-icon">
			<rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
			<circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.8" />
			<circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
		</svg>
	)
}

function SocialFacebookIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="foodex-footer-social-icon">
			<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
			<path
				d="M13.9 8.6h1.6V6.5h-1.9c-1.6 0-2.8 1.2-2.8 2.9v1.6H9v2.1h1.8V18h2.2v-5h1.9l.3-2.1h-2.2V9.8c0-.7.3-1.2.9-1.2Z"
				fill="currentColor"
			/>
		</svg>
	)
}

function SocialYoutubeIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="foodex-footer-social-icon">
			<rect x="3.5" y="6" width="17" height="12" rx="4" stroke="currentColor" strokeWidth="1.8" />
			<path d="M10.2 9.2 15.2 12 10.2 14.8V9.2Z" fill="currentColor" />
		</svg>
	)
}

function FooterSection() {
	return (
		<footer aria-label="Foodex footer" className="foodex-footer" id="contact">
			<div className="foodex-footer-divider" aria-hidden="true" />

			<div className="foodex-footer-container">
				<motion.div
					className="foodex-footer-grid"
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.55, ease: 'easeOut' }}
				>
					<div className="foodex-footer-brand">
						<a href="#home" className="foodex-footer-logo-link" aria-label="Foodex home">
							<img src="/logos/foodex-logo.png" alt="Foodex India logo" className="foodex-footer-logo" />
						</a>

						<p className="foodex-footer-description">
							Crafting authentic Indian snacks and sweets with quality, tradition and trusted taste since 2008.
						</p>

						<div className="foodex-footer-social" aria-label="Social links">
							<a href="#" aria-label="Instagram" className="foodex-footer-social-link">
								<SocialInstagramIcon />
							</a>
							<a href="#" aria-label="Facebook" className="foodex-footer-social-link">
								<SocialFacebookIcon />
							</a>
							<a href="#" aria-label="YouTube" className="foodex-footer-social-link">
								<SocialYoutubeIcon />
							</a>
						</div>
					</div>

					<div className="foodex-footer-column">
						<h3 className="foodex-footer-heading">Quick Links</h3>
						<ul className="foodex-footer-links">
							{quickLinks.map((link) => {
								const isHome = link === 'Home'
								const isProducts = link === 'Products'
								const lowerLink = link.toLowerCase()

								if (isHome) {
									return (
										<li key={link}>
											<Link to="/" className="foodex-footer-link">
												{link}
											</Link>
										</li>
									)
								}
								if (isProducts) {
									return (
										<li key={link}>
											<Link to="/products" className="foodex-footer-link">
												{link}
											</Link>
										</li>
									)
								}
								return (
									<li key={link}>
										<a href={`/#${lowerLink}`} className="foodex-footer-link">
											{link}
										</a>
									</li>
								)
							})}
						</ul>
					</div>

					<div className="foodex-footer-column">
						<h3 className="foodex-footer-heading">Categories</h3>
						<ul className="foodex-footer-links">
							{categories.map((category) => (
								<li key={category}>
									<Link to={`/products?category=${encodeURIComponent(category)}`} className="foodex-footer-link">
										{category}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="foodex-footer-column">
						<h3 className="foodex-footer-heading">Contact</h3>
						<ul className="foodex-footer-contact-list">
							<li className="foodex-footer-contact-item">
								<MapPin className="foodex-footer-contact-icon" />
								<span>Noida, Uttar Pradesh</span>
							</li>
							<li className="foodex-footer-contact-item">
								<Mail className="foodex-footer-contact-icon" />
								<a href="mailto:contact@foodex.in" className="foodex-footer-link">
									contact@foodex.in
								</a>
							</li>
							<li className="foodex-footer-contact-item">
								<Phone className="foodex-footer-contact-icon" />
								<a href="tel:+91XXXXXXXXXX" className="foodex-footer-link">
									+91 XXXXX XXXXX
								</a>
							</li>
						</ul>
					</div>
				</motion.div>
			</div>

			<div className="foodex-footer-copyright-divider" aria-hidden="true" />

			<div className="foodex-footer-copyright">
				<p className="foodex-footer-copyright-main">© 2026 Foodex India. All Rights Reserved.</p>
				<p className="foodex-footer-copyright-sub">Website Designed &amp; Developed by Himanshi Chauhan</p>
			</div>
		</footer>
	)
}

export default FooterSection