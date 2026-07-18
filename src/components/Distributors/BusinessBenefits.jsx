import { motion } from 'framer-motion'
import { CheckCircle2, Building2 } from 'lucide-react'
import { businessBenefits } from '../../data/distributorData'

function BusinessBenefits() {
	return (
		<section className="bg-(--color-bg-primary) py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Left: Illustration */}
					<motion.div 
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="relative flex items-center justify-center w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-(--color-card) rounded-3xl border border-(--color-border) shadow-[var(--color-shadow)] p-8 lg:p-12"
					>
						{/* Subtle background abstract shapes */}
						<div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50 pointer-events-none">
							<div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[rgba(217,4,41,0.03)] rounded-full blur-3xl"></div>
							<div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[rgba(255,223,168,0.1)] rounded-full blur-3xl"></div>
						</div>
						
						<div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
							<div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[rgba(217,4,41,0.08)] text-(--color-brand-red)">
								<Building2 size={48} strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="font-display text-2xl font-bold text-(--color-text-primary) mb-2">Build a Legacy</h3>
								<p className="font-body text-(--color-text-secondary) max-w-sm">
									Partner with a brand that understands the value of long-term business relationships.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Right: Checklist */}
					<motion.div 
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="flex flex-col gap-10"
					>
						<div>
							<h2 className="font-display text-3xl md:text-4xl font-extrabold text-(--color-text-primary) mb-4">
								Why Businesses Choose Foodex
							</h2>
							<p className="font-body text-(--color-text-secondary) text-[17px] leading-relaxed">
								Our distribution partners are the backbone of our success. We provide all the tools, margins, and support you need to scale your business sustainably.
							</p>
						</div>

						<ul className="flex flex-col gap-5">
							{businessBenefits.map((benefit, index) => (
								<motion.li 
									key={index}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-50px' }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="flex items-start gap-4"
								>
									<CheckCircle2 size={24} className="text-(--color-brand-red) shrink-0 mt-0.5" strokeWidth={2} />
									<span className="font-body text-(--color-text-primary) text-[17px] font-medium leading-relaxed">
										{benefit}
									</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default BusinessBenefits
