import { motion } from 'framer-motion'

const storyParagraphs = [
	'Foodex India began with a simple belief: classic Indian flavours deserve a modern standard of consistency, presentation, and trust. What started as a focused family-led venture gradually matured into a brand recognised for dependable quality and strong retail relationships.',
	'Over the years, the company has refined its sourcing, production, and distribution with a clear commitment to natural ingredients and careful batch-to-batch quality checks. That discipline has helped Foodex grow without losing the warmth and familiarity that customers associate with traditional taste.',
	'Today, Foodex India serves families, retailers, and distributors with a portfolio shaped around everyday snacking and celebration moments. The brand continues to expand with the same promise it started with: food that feels authentic, looks premium, and earns trust over time.',
]

function OurStory() {
	return (
		<section className="about-section about-story-section">
			<div className="about-section-container about-story-stack">
				<div className="about-story-copy">
					<p className="about-section-kicker">Our Story</p>
					<h2 className="about-section-title font-display">Welcome to the World of Traditional Taste</h2>
					<p className="about-story-intro">
						Foodex India grew from a family-led idea into a brand built on consistency, care, and everyday trust. The story remains rooted in familiar flavours, presented with a calmer, more disciplined sense of quality.
					</p>
				</div>

				<motion.div
					className="about-story-card"
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				>
					<div className="about-story-paragraphs">
						{storyParagraphs.map((paragraph) => (
							<p key={paragraph} className="about-story-paragraph">
								{paragraph}
							</p>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default OurStory