import { motion } from 'framer-motion'
import { whyPartnerCards } from '../../data/distributorData'

function WhyPartner() {
	return (
		<section className="bg-(--color-bg-primary) py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				
				<div className="text-center mb-16">
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						className="font-display text-3xl md:text-4xl font-extrabold text-(--color-text-primary) mb-4"
					>
						Why Partner With Foodex?
					</motion.h2>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ delay: 0.1 }}
						className="font-body text-(--color-text-secondary) max-w-2xl mx-auto text-[17px] leading-relaxed"
					>
						Everything you need to grow a successful FMCG business with a trusted Indian brand.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{whyPartnerCards.map((detail, index) => {
						const Icon = detail.icon
						return (
							<motion.div
								key={detail.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex flex-col items-center text-center p-8 lg:p-10 rounded-3xl bg-(--color-card) shadow-[var(--color-shadow)] border border-(--color-border) transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,26,26,0.12)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(217,4,41,0.08)] text-(--color-brand-red) mb-6">
									<Icon size={28} strokeWidth={1.5} />
								</div>
								<h3 className="font-display text-xl font-bold text-(--color-text-primary) mb-3">
									{detail.title}
								</h3>
								<p className="font-body text-(--color-text-secondary) leading-relaxed text-[15px]">
									{detail.description}
								</p>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default WhyPartner
