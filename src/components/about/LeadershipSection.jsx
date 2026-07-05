import { motion } from 'framer-motion'
import { BadgeCheck, Users } from 'lucide-react'

import founderPhoto from '../../assets/about/founder-subhash-bansal.jpg'
import directorPhoto from '../../assets/about/director-rekha-bansal.jpg'
import businessHeadPhoto from '../../assets/about/business-head-as-bhati.jpg'

const leaders = [
	{
		name: 'Subhash Bansal',
		designation: 'Founder & Director',
		role: 'Founder',
		description: 'Guided by an entrepreneurial approach and long-term customer relationships, he helped shape the Foodex foundation with discipline and ambition.',
		photo: founderPhoto,
	},
	{
		name: 'Rekha Bansal',
		designation: 'Director',
		role: 'Director',
		description: 'She brings a steady focus on operational quality, brand stewardship, and the consistency needed to grow with trust.',
		photo: directorPhoto,
	},
	{
		name: 'A. S. Bhati',
		designation: 'Business Head',
		role: 'Business Head',
		description: 'He supports market expansion, customer relationships, and modern distribution execution across the company network.',
		photo: businessHeadPhoto,
	},
]

function LeadershipSection() {
	return (
		<section className="about-section about-leadership-section">
			<div className="about-section-container">
				<div className="about-section-heading-row">
					<p className="about-section-kicker">Leadership Team</p>
					<h2 className="about-section-title font-display">Meet Our Leadership</h2>
				</div>

				<motion.div
					className="about-leadership-grid"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.12 } },
					}}
				>
					{leaders.map((leader) => (
						<motion.article
							key={leader.name}
							className="about-leader-card glass-card"
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.55, ease: 'easeOut' }}
							whileHover={{ y: -7 }}
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
								<div className="about-leader-role-row">
									<BadgeCheck size={16} />
									<span>{leader.role}</span>
								</div>
								<h3 className="about-leader-name font-display">{leader.name}</h3>
								<p className="about-leader-designation">{leader.designation}</p>
								<p className="about-leader-description">{leader.description}</p>
							</div>
						</motion.article>
					))}
				</motion.div>

				<div className="about-leadership-note">
					<Users size={16} />
					<span>Leadership focused on quality, consistency, and steady brand growth.</span>
				</div>
			</div>
		</section>
	)
}

export default LeadershipSection