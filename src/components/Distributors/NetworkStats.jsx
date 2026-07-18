import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { networkStats } from '../../data/distributorData'

function Counter({ from = 0, to, duration = 2 }) {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-50px' })

	useEffect(() => {
		if (inView) {
			const controls = animate(from, to, {
				duration,
				onUpdate(value) {
					if (ref.current) {
						ref.current.textContent = Math.round(value).toString()
					}
				},
				ease: 'easeOut',
			})
			return () => controls.stop()
		}
	}, [from, to, inView, duration])

	return <span ref={ref}>{from}</span>
}

function NetworkStats() {
	return (
		<section className="bg-(--color-card) border-y border-(--color-border) py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
					{networkStats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex flex-col items-center text-center"
						>
							<h3 className="font-display text-5xl md:text-5xl lg:text-6xl font-extrabold text-(--color-brand-red) mb-3 tracking-tight">
								<Counter from={0} to={stat.number} duration={2} />
								<span className="text-4xl md:text-4xl lg:text-5xl text-(--color-text-primary)">{stat.suffix}</span>
							</h3>
							<p className="font-body text-(--color-text-secondary) font-semibold text-[14px] uppercase tracking-widest">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default NetworkStats
