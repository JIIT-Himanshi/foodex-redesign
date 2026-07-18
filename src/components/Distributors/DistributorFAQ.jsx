import { motion } from 'framer-motion'
import Accordion from '../Contact/Accordion'
import { distributorFaqs } from '../../data/distributorData'

function DistributorFAQ() {
	return (
		<section className="bg-(--color-card) border-y border-(--color-border) py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-3xl">
				<div className="text-center mb-12">
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						className="font-display text-3xl md:text-4xl font-extrabold text-(--color-text-primary) mb-4"
					>
						Frequently Asked Questions
					</motion.h2>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ delay: 0.1 }}
						className="font-body text-(--color-text-secondary) text-[17px] leading-relaxed"
					>
						Everything you need to know about partnering with Foodex.
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
					className="flex flex-col gap-4"
				>
					<Accordion items={distributorFaqs} />
				</motion.div>
			</div>
		</section>
	)
}

export default DistributorFAQ
