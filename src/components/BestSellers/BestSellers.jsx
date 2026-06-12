import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import teekhaMixFrontImage from '../../assets/products/teekha-mix-front.png'
import teekhaMixBackImage from '../../assets/products/teekha-mix-back.png'
import khattaMeethaImage from '../../assets/products/khatta-meetha.png'
import alooBhujiaImage from '../../assets/products/aloo-bhujia.png'
// replaced navratan image with teekha-mix per request
import navratanMixtureImage from '../../assets/products/navratan-mixture.png'
import nutCrackersImage from '../../assets/products/nut-crackers.png'
import bhakharwadiImage from '../../assets/products/bhakharwadi.png'
import besanLadooImage from '../../assets/products/besan-ladoo.png'
import soanPapdiImage from '../../assets/products/soan-papdi.png'
import '../../styles/best-sellers.css'

const bestSellerProducts = [
	{ name: 'Teekha Mixture', price: '₹45.00', image: teekhaMixFrontImage },
	{ name: 'Khatta Meetha', price: '₹20.00 - ₹200.00', image: khattaMeethaImage },
	{ name: 'Aloo Bhujia', price: '₹20.00 - ₹90.00', image: alooBhujiaImage },
	{ name: 'Navratan Mix', price: '₹20.00 - ₹200.00', image: navratanMixtureImage },
	{ name: 'Nut Crackers', price: '₹20.00 - ₹90.00', image: nutCrackersImage },
	{ name: 'Bhakharwadi', price: '₹40.00', image: bhakharwadiImage },
	{ name: 'Besan Ladoo', price: '₹149.00', image: besanLadooImage },
	{ name: 'Soan Papdi', price: '₹69.00 - ₹269.00', image: soanPapdiImage },
]

const getProductSlug = (name) => {
	const map = {
		'Navratan Mix': 'navratan-mixture',
		'Teekha Mixture': 'teekha-mixture',
		'Nut Crackers': 'nut-cracker',
	}
	return map[name] || name.toLowerCase().replace(/\s+/g, '-')
}

function BestSellers() {
	const spotlightShellRef = useRef(null)

	const handleSpotlightPointerMove = (event) => {
		const shell = spotlightShellRef.current
		if (!shell) {
			return
		}

		const rect = event.currentTarget.getBoundingClientRect()
		const x = (event.clientX - rect.left) / rect.width
		const y = (event.clientY - rect.top) / rect.height
		const moveX = (x - 0.5) * 16
		const moveY = (y - 0.5) * 16
		const rotateY = (x - 0.5) * 5
		const rotateX = (0.5 - y) * 4

		shell.style.setProperty('--spotlight-parallax-x', `${moveX.toFixed(2)}px`)
		shell.style.setProperty('--spotlight-parallax-y', `${moveY.toFixed(2)}px`)
		shell.style.setProperty('--spotlight-tilt-x', `${rotateX.toFixed(2)}deg`)
		shell.style.setProperty('--spotlight-tilt-y', `${rotateY.toFixed(2)}deg`)
	}

	const resetSpotlightPointerMove = () => {
		const shell = spotlightShellRef.current
		if (!shell) {
			return
		}

		shell.style.setProperty('--spotlight-parallax-x', '0px')
		shell.style.setProperty('--spotlight-parallax-y', '0px')
		shell.style.setProperty('--spotlight-tilt-x', '0deg')
		shell.style.setProperty('--spotlight-tilt-y', '0deg')
	}

	return (
		<section aria-label="Best sellers" className="best-sellers-section">
			<div className="best-sellers-container">
				<header className="best-sellers-header">
					<h2 className="best-sellers-title font-display">Best Sellers</h2>
					<p className="best-sellers-subtitle">
						India's favourite snacks and sweets, crafted with quality and tradition.
					</p>
				</header>

				<div className="best-sellers-grid">
					{bestSellerProducts.map((product, index) => (
						<motion.article
							key={product.name}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
							className="best-seller-card group"
						>
							<div className="best-seller-image-zone">
								<span className="best-seller-shadow" aria-hidden="true" />
								<span className="best-seller-glow" aria-hidden="true" />
								<img
									src={product.image}
									alt={product.name}
									className="best-seller-image"
								/>
							</div>

							<div className="best-seller-content">
								<div>
									<h3 className="best-seller-name font-display">{product.name}</h3>
									<p className="best-seller-price">{product.price}</p>
								</div>

								<Link to={`/products/${getProductSlug(product.name)}`} className="best-seller-explore-link" aria-label={`Explore ${product.name}`}>
									<span>Explore</span>
									<ArrowRight size={16} aria-hidden="true" />
								</Link>
							</div>
						</motion.article>
					))}
				</div>

				<div className="best-sellers-grid-cta">
					<Link to="/products" className="best-sellers-view-all-button" aria-label="View all products">
						<span>View All Products</span>
						<ArrowRight size={16} aria-hidden="true" />
					</Link>
				</div>

				<div className="best-sellers-spotlight">
					<div className="best-sellers-spotlight-copy">
						<p className="best-sellers-spotlight-kicker">Featured Product Spotlight</p>
						<h3 className="best-sellers-spotlight-title font-display">Signature Taste of Foodex</h3>
						<p className="best-sellers-spotlight-description">
							A timeless blend of authentic flavour, quality ingredients and trusted craftsmanship that has delighted families for generations.
						</p>
						<Link to="/products/teekha-mixture" className="best-sellers-spotlight-button">
							Explore Product
						</Link>
					</div>

					<div className="best-sellers-spotlight-visual">
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
							className="best-sellers-spotlight-product"
							onPointerMove={handleSpotlightPointerMove}
							onPointerLeave={resetSpotlightPointerMove}
						>
							<span className="best-sellers-spotlight-layer cream" aria-hidden="true" />
							<span className="best-sellers-spotlight-layer glow" aria-hidden="true" />

							<div ref={spotlightShellRef} className="best-sellers-spotlight-parallax-shell">
								<span className="best-sellers-spotlight-shadow" aria-hidden="true" />
								<div className="best-sellers-spotlight-flip-card">
									<div className="best-sellers-spotlight-face best-sellers-spotlight-face-front">
										<img
											src={teekhaMixFrontImage}
											alt="Teekha Mix pack front"
											className="best-sellers-spotlight-image"
										/>
									</div>
									<div className="best-sellers-spotlight-face best-sellers-spotlight-face-back">
										<img
											src={teekhaMixBackImage}
											alt="Teekha Mix pack back"
											className="best-sellers-spotlight-image"
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestSellers