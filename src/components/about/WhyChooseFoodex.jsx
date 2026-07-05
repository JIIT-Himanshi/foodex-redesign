import { motion } from 'framer-motion'
import { Flame, Globe2, HeartHandshake, ShieldCheck } from 'lucide-react'

const reasons = [
	{
		title: 'Premium Quality',
		icon: ShieldCheck,
		copy: 'Consistent quality checks, dependable sourcing, and a premium finish help every product feel reliable.',
	},
	{
		title: 'Traditional Taste',
		icon: Flame,
		copy: 'Recipes are shaped to preserve the familiar flavours customers expect from authentic Indian snacks.',
	},
	{
		title: 'Wide Distribution',
		icon: Globe2,
		copy: 'A growing distribution footprint keeps Foodex products within reach of retailers and consumers.',
	},
	{
		title: 'Customer Satisfaction',
		icon: HeartHandshake,
		copy: 'The brand invests in trust, responsiveness, and product experience that encourages repeat purchase.',
	},
]

function WhyChooseFoodex() {
	return (
		<section className="about-section about-choose-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Why Choose Foodex</p>
					<h2 className="about-section-title font-display">The reasons customers and partners stay with us</h2>
				</div>

				<div className="about-choose-grid">
					{reasons.map((reason, index) => {
						const Icon = reason.icon

						return (
							<motion.article
								key={reason.title}
								className="about-choose-card glass-card"
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								whileHover={{ y: -6 }}
							>
								<div className="about-card-icon-wrap">
									<Icon size={20} />
								</div>
								<h3 className="about-choose-title font-display">{reason.title}</h3>
								<p className="about-choose-copy">{reason.copy}</p>
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default WhyChooseFoodex