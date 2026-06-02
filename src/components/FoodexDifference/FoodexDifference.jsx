import { Award, Sparkles, ShieldCheck, MapPinned } from 'lucide-react'
import { motion } from 'framer-motion'

import '../../styles/foodex-difference.css'

const trustPoints = [
	{
		icon: Award,
		title: 'Premium Ingredients',
		description: 'Only carefully selected ingredients go into every batch.',
	},
	{
		icon: Sparkles,
		title: 'Traditional Recipes',
		description: 'Authentic flavours inspired by generations of expertise.',
	},
	{
		icon: ShieldCheck,
		title: 'Quality Assured',
		description: 'Every product undergoes strict quality checks before reaching customers.',
	},
	{
		icon: MapPinned,
		title: 'Pan India Reach',
		description: 'Serving customers and retail partners across India.',
	},
]

function FoodexDifference() {
	return (
		<section aria-label="The Foodex Difference" className="foodex-difference-section">
			<div className="foodex-difference-container">
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="foodex-difference-header"
				>
					<p className="foodex-difference-kicker">THE FOODEX DIFFERENCE</p>
					<h2 className="foodex-difference-title font-display">
						Crafted With Tradition.
						<br />
						Trusted For Quality.
					</h2>
					<p className="foodex-difference-description">
						For over a decade, Foodex has combined authentic recipes, carefully selected ingredients and strict quality standards to create products loved by families across India.
					</p>
				</motion.div>

				<div className="foodex-difference-grid">
					{trustPoints.map((point, index) => {
						const Icon = point.icon

						return (
							<motion.article
								key={point.title}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
								className="foodex-difference-card group"
							>
								<div className="foodex-difference-icon-wrap" aria-hidden="true">
									<Icon className="foodex-difference-icon" size={22} strokeWidth={1.8} />
								</div>
								<h3 className="foodex-difference-card-title font-display">{point.title}</h3>
								<p className="foodex-difference-card-description">{point.description}</p>
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default FoodexDifference