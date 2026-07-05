import { motion } from 'framer-motion'
import { ArrowDownRight, BadgeIndianRupee, Factory, Layers3, Truck } from 'lucide-react'

const milestones = [
	{ year: '2000', title: 'Company Founded', icon: Factory },
	{ year: '2007', title: 'Technology Adoption', icon: Layers3 },
	{ year: '2012', title: 'Product Expansion', icon: BadgeIndianRupee },
	{ year: '2018', title: 'Growing Distribution', icon: Truck },
	{ year: 'Present', title: '26+ Years of Excellence', icon: ArrowDownRight },
]

function JourneyTimeline() {
	return (
		<section className="about-section about-journey-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Our Journey</p>
					<h2 className="about-section-title font-display">A timeline of steady growth</h2>
				</div>

				<motion.div
					className="about-journey-track"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.12 } },
					}}
				>
					{milestones.map((milestone, index) => {
						const Icon = milestone.icon

						return (
							<motion.div
								key={milestone.year}
								className="about-journey-item"
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5, ease: 'easeOut' }}
							>
								<div className="about-journey-node">
									<Icon size={18} />
								</div>
								<div className="about-journey-card glass-card">
									<p className="about-journey-year font-display">{milestone.year}</p>
									<h3 className="about-journey-title font-display">{milestone.title}</h3>
								</div>

								{index < milestones.length - 1 && <div className="about-journey-connector" aria-hidden="true" />}
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default JourneyTimeline