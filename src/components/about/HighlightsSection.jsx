import { motion } from 'framer-motion'
import { Box, CircleCheckBig, PackageSearch, TrendingUp } from 'lucide-react'

const highlights = [
	{ value: '26+', label: 'Years of Experience', icon: TrendingUp },
	{ value: '50+', label: 'Products', icon: Box },
	{ value: 'Thousands', label: 'Happy Customers', icon: CircleCheckBig },
	{ value: 'Quality', label: 'Natural Ingredients', icon: PackageSearch },
]

function HighlightsSection() {
	return (
		<section className="about-section about-highlights-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Company Highlights</p>
					<h2 className="about-section-title font-display">Numbers that reflect a long-term promise</h2>
				</div>

				<div className="about-highlights-grid">
					{highlights.map((item, index) => {
						const Icon = item.icon

						return (
							<motion.article
								key={item.label}
								className="about-highlight-card glass-card"
								initial={{ opacity: 0, y: 22 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								whileHover={{ y: -6 }}
							>
								<div className="about-card-icon-wrap">
									<Icon size={20} />
								</div>
								<p className="about-highlight-value font-display">{item.value}</p>
								<p className="about-highlight-label">{item.label}</p>
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default HighlightsSection