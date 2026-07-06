import { motion } from 'framer-motion'

import founderPhoto from '../../assets/about/founder-subhash-bansal.jpg'
import directorPhoto from '../../assets/about/director-rekha-bansal.jpg'
import businessHeadPhoto from '../../assets/about/business-head-as-bhati.jpg'

const leaders = [
	{
		id: 'founder',
		name: 'Subhash Bansal',
		designation: 'Founder & Director',
		photo: founderPhoto,
		description:
			'Guiding the brand with steady decisions, long-term thinking, and a careful focus on consistency across every part of the business.',
	},
	{
		id: 'director',
		name: 'Rekha Bansal',
		designation: 'Director',
		photo: directorPhoto,
		description:
			'Overseeing operations with a calm, detail-oriented approach that keeps the brand organized, responsive, and dependable.',
	},
	{
		id: 'business-head',
		name: 'A. S. Bhati',
		designation: 'Business Head',
		photo: businessHeadPhoto,
		description:
			'Leading growth and relationships with a practical view of retail needs, market expansion, and brand presentation.',
	},
]

function LeaderCard({ leader }) {
	return (
		<motion.article
			className="about-leader-card glass-card"
			variants={{
				hidden: { opacity: 0, y: 18 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			whileHover={{ y: -4 }}
		>
			<div className="about-leader-photo-wrap">
				<img
					src={leader.photo}
					alt={leader.name}
					className="about-leader-photo"
					loading="lazy"
					decoding="async"
				/>
			</div>

			<div className="about-leader-body">
				<p className="about-leader-designation">{leader.designation}</p>
				<h3 className="about-leader-name font-display">{leader.name}</h3>
				<p className="about-leader-description">{leader.description}</p>
			</div>
		</motion.article>
	)
}

function LeadershipSection() {
	return (
		<section className="about-section about-leadership-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Leadership Team</p>
					<h2 className="about-section-title font-display">Meet Our Leadership</h2>
				</div>

				<motion.div
					className="about-leadership-grid about-leadership-grid-balanced"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.12 } },
					}}
				>
					{leaders.map((leader) => (
						<LeaderCard key={leader.id} leader={leader} />
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default LeadershipSection