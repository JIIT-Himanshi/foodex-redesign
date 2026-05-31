import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import teekhaMixImage from '../../assets/products/teekha-mixture.png'
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
	{ name: 'Teekha Mixture', price: '₹45.00', image: teekhaMixImage },
	{ name: 'Khatta Meetha', price: '₹20.00 - ₹200.00', image: khattaMeethaImage },
	{ name: 'Aloo Bhujia', price: '₹20.00 - ₹90.00', image: alooBhujiaImage },
	{ name: 'Navratan Mix', price: '₹20.00 - ₹200.00', image: navratanMixtureImage },
	{ name: 'Nut Crackers', price: '₹20.00 - ₹90.00', image: nutCrackersImage },
	{ name: 'Bhakharwadi', price: '₹40.00', image: bhakharwadiImage },
	{ name: 'Besan Ladoo', price: '₹149.00', image: besanLadooImage },
	{ name: 'Soan Papdi', price: '₹69.00 - ₹269.00', image: soanPapdiImage },
]

function BestSellers() {
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

								<a href="#products" className="best-seller-explore-link" aria-label={`Explore ${product.name}`}>
									<span>Explore</span>
									<ArrowRight size={16} aria-hidden="true" />
								</a>
							</div>
						</motion.article>
					))}
				</div>

				<div className="best-sellers-spotlight">
					<div className="best-sellers-spotlight-copy">
						<p className="best-sellers-spotlight-kicker">Featured Product Spotlight</p>
						<h3 className="best-sellers-spotlight-title font-display">Signature Taste of Foodex</h3>
						<p className="best-sellers-spotlight-description">
							A premium blend of carefully selected ingredients crafted to deliver the authentic flavour loved by generations.
						</p>
						<a href="#products" className="best-sellers-spotlight-button">
							Explore Product
						</a>
					</div>

					<div className="best-sellers-spotlight-visual">
						{/** Outer motion for vertical float; inner tilt wrapper for mouse-follow 3D rotate */}
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
							className="best-sellers-spotlight-product"
							onMouseMove={(e) => {
								const tilt = e.currentTarget.querySelector('.spotlight-tilt')
								if (!tilt) return
								const rect = e.currentTarget.getBoundingClientRect()
								const x = (e.clientX - rect.left) / rect.width
								const y = (e.clientY - rect.top) / rect.height
								const rotateY = (x - 0.5) * 2 * 4 // max 4deg
								const rotateX = (0.5 - y) * 2 * 4
								tilt.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
							}}
							onMouseLeave={(e) => {
								const tilt = e.currentTarget.querySelector('.spotlight-tilt')
								if (!tilt) return
								tilt.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
							}}
						>
							<span className="best-sellers-spotlight-layer cream" aria-hidden="true" />
							<span className="best-sellers-spotlight-layer glow" aria-hidden="true" />
							<div className="spotlight-tilt">
								<span className="best-sellers-spotlight-shadow" aria-hidden="true" />
								<img
									src={teekhaMixImage}
									alt="Teekha Mix by Foodex"
									className="best-sellers-spotlight-image"
								/>
							</div>
						</motion.div>
					</div>
				</div>

				<div className="best-sellers-footer-cta">
					<a href="#products" className="best-sellers-view-all-button">
						View All Products
					</a>
				</div>
			</div>
		</section>
	)
}

export default BestSellers