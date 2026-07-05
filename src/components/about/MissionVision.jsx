import { motion } from 'framer-motion'
import { Compass, Target } from 'lucide-react'

const cards = [
	{
		title: 'Mission',
		icon: Target,
		copy: 'To craft dependable food products rooted in traditional Indian taste while applying disciplined sourcing, responsible manufacturing, and a premium customer experience.',
	},
	{
		title: 'Vision',
		icon: Compass,
		copy: 'To be a trusted FMCG brand that grows through quality, transparency, and meaningful distribution reach across modern and traditional retail channels.',
	},
]

function MissionVision() {
	return (
		<section className="about-section about-mission-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Mission & Vision</p>
					<h2 className="about-section-title font-display">Clear direction, built around trust and quality</h2>
				</div>

				<div className="about-mission-grid">
					{cards.map((card, index) => {
						const Icon = card.icon

						return (
							<motion.article
								key={card.title}
								className="about-mission-card glass-card"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.55, delay: index * 0.1 }}
								whileHover={{ y: -6 }}
							>
								<div className="about-card-icon-wrap about-mission-icon">
									<Icon size={20} />
								</div>
								<h3 className="about-mission-card-title font-display">{card.title}</h3>
								<p className="about-mission-card-copy">{card.copy}</p>
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MissionVision