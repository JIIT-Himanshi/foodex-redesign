import { motion } from 'framer-motion'
import { Award, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

import storyVisual from '../../assets/about/hero-banner.jpg'

const storyParagraphs = [
	'Foodex India began with a simple belief: classic Indian flavours deserve a modern standard of consistency, presentation, and trust. What started as a focused family-led venture gradually matured into a brand recognised for dependable quality and strong retail relationships.',
	'Over the years, the company has refined its sourcing, production, and distribution with a clear commitment to natural ingredients and careful batch-to-batch quality checks. That discipline has helped Foodex grow without losing the warmth and familiarity that customers associate with traditional taste.',
	'Today, Foodex India serves families, retailers, and distributors with a portfolio shaped around everyday snacking and celebration moments. The brand continues to expand with the same promise it started with: food that feels authentic, looks premium, and earns trust over time.',
]

const highlightPoints = [
	{ icon: Award, label: '26+ Years', description: 'A long-term business built on consistency and repeat trust.' },
	{ icon: Leaf, label: 'Premium Quality', description: 'Carefully sourced ingredients and tight quality control.' },
	{ icon: ShieldCheck, label: 'Natural Ingredients', description: 'A cleaner approach that keeps the flavours honest.' },
	{ icon: Sparkles, label: 'Customer Trust', description: 'Retailers and families return because the experience stays reliable.' },
]

function OurStory() {
	return (
		<section className="about-section about-story-section">
			<div className="about-section-container about-story-grid">
				<motion.div
					className="about-story-copy"
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				>
					<p className="about-section-kicker">Our Story</p>
					<h2 className="about-section-title font-display">Welcome to the World of Traditional Taste</h2>
					<div className="about-story-paragraphs">
						{storyParagraphs.map((paragraph) => (
							<p key={paragraph} className="about-story-paragraph">
								{paragraph}
							</p>
						))}
					</div>
				</motion.div>

				<motion.div
					className="about-story-visual"
					initial={{ opacity: 0, x: 24, scale: 0.96 }}
					whileInView={{ opacity: 1, x: 0, scale: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.75, ease: 'easeOut' }}
				>
					<div className="about-story-image-frame">
						<img
							src={storyVisual}
							alt="Foodex India team event"
							className="about-story-image"
							loading="lazy"
							decoding="async"
						/>
						<div className="about-story-image-overlay">
							<div className="about-story-quote-card">
								<p className="about-story-quote-eyebrow">Built on trust</p>
								<p className="about-story-quote">Premium snacks that stay true to Indian taste while meeting modern expectations.</p>
							</div>
						</div>
					</div>

					<div className="about-story-highlights">
						{highlightPoints.map((point, index) => {
							const Icon = point.icon

							return (
								<motion.div
									key={point.label}
									className="about-story-highlight-chip"
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.2 }}
									transition={{ duration: 0.45, delay: index * 0.08 }}
								>
									<Icon size={18} />
									<div>
										<h3>{point.label}</h3>
										<p>{point.description}</p>
									</div>
								</motion.div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default OurStory