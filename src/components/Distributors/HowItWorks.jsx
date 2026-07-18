import { motion } from 'framer-motion'
import { timelineSteps } from '../../data/distributorData'

function HowItWorks() {
	return (
		<section className="bg-(--color-card) border-y border-(--color-border) py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-16 lg:mb-20">
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						className="font-display text-3xl md:text-4xl font-extrabold text-(--color-text-primary) mb-4"
					>
						How It Works
					</motion.h2>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ delay: 0.1 }}
						className="font-body text-(--color-text-secondary) max-w-2xl mx-auto text-[17px] leading-relaxed"
					>
						A simple and transparent onboarding process to get you started quickly.
					</motion.p>
				</div>

				<div className="relative">
					{/* Desktop Line */}
					<div className="hidden lg:block absolute top-[28px] left-[5%] w-[90%] h-[2px] bg-(--color-border) z-0"></div>

					<div className="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-between relative z-10">
						{timelineSteps.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 flex-1 relative group"
							>
								{/* Mobile Line connecting nodes */}
								{index !== timelineSteps.length - 1 && (
									<div className="lg:hidden absolute top-[44px] left-[28px] w-[2px] h-[calc(100%+8px)] bg-(--color-border) z-0"></div>
								)}

								<div 
									className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-(--color-brand-red) text-[18px] font-semibold transition-transform duration-300 group-hover:scale-110 shadow-[0_8px_20px_rgba(217,4,41,0.2)] relative z-10 outline outline-[6px] outline-(--color-card)"
									style={{ color: '#ffffff' }}
								>
									{step.number}
								</div>

								<div className="flex flex-col gap-2 pt-2 lg:pt-4">
									<h3 className="font-display text-xl font-bold text-(--color-text-primary)">
										{step.title}
									</h3>
									<p className="font-body text-(--color-text-secondary) text-[15px] leading-relaxed max-w-[240px] mx-auto lg:mx-0">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
