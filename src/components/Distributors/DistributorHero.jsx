import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, Warehouse, Package } from 'lucide-react'

function DistributorHero() {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		setIsReady(true)
	}, [])

	return (
		<section className="relative overflow-hidden bg-(--color-bg-primary) flex items-center justify-center lg:min-h-[calc(100vh-72px)] py-16 md:py-20 lg:py-0">
			{/* Background Soft Gradients */}
			<div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_54%_46%/56%_44%_56%_44%] bg-[linear-gradient(135deg,rgba(255,245,232,0.98),rgba(255,233,201,0.82),rgba(255,223,168,0.5))] blur-3xl sm:h-96 sm:w-96 lg:h-[36rem] lg:w-[36rem]" />
				<div className="absolute top-[65%] left-[60%] h-16 w-72 -translate-x-1/2 rounded-full bg-[rgba(217,4,41,0.06)] blur-3xl lg:w-96" />
			</div>

			<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto w-full px-4 sm:px-6">
				{/* Left Side: Content */}
				<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
					<p
						className={`text-[14px] font-semibold uppercase tracking-[0.25em] text-(--color-brand-red) transition-all duration-700 ease-out ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
					>
						Distributor Network
					</p>

					<h1
						className={`font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-(--color-text-primary) transition-all duration-700 ease-out sm:text-5xl md:text-6xl lg:text-[4.25rem] ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
						style={{ transitionDelay: '100ms' }}
					>
						Become a Foodex Distributor
					</h1>

					<p
						className={`font-body mt-6 max-w-xl text-[18px] leading-8 text-(--color-text-secondary) transition-all duration-700 ease-out ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
						style={{ transitionDelay: '200ms' }}
					>
						Join our growing distribution network and deliver trusted Foodex products to customers across India.
					</p>

					<div
						className={`mt-8 flex flex-col items-center gap-4 transition-all duration-700 ease-out sm:flex-row sm:justify-center lg:justify-start ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
						style={{ transitionDelay: '300ms' }}
					>
						<a
							href="#apply"
							className="inline-flex h-12 min-w-44 items-center justify-center rounded-full bg-(--color-brand-red) px-6 text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90"
							style={{ color: '#ffffff' }}
						>
							Become a Distributor
						</a>

						<Link
							to="/products"
							className="inline-flex h-12 min-w-40 items-center justify-center rounded-full border border-[#D8D0C8] bg-[#FBF6EF] px-7 text-[15px] font-semibold text-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#cfc6bd] hover:bg-[#F7F2EC]"
						>
							Explore Products
						</Link>
					</div>
				</div>

				{/* Right Side: Minimal Illustration */}
				<div
					className={`relative flex items-center justify-center transition-all duration-1000 ease-out ${isReady ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
						}`}
					style={{ transitionDelay: '400ms' }}
				>
					<div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
						<motion.div
							animate={{ y: [-8, 8] }}
							transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
							className="relative z-20 flex h-32 w-32 items-center justify-center rounded-3xl bg-(--color-card) shadow-[var(--color-shadow)] border border-(--color-border)"
						>
							<Truck size={56} className="text-(--color-brand-red)" strokeWidth={1.5} />
						</motion.div>

						<motion.div
							animate={{ y: [8, -8] }}
							transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut" }}
							className="absolute top-[10%] left-[10%] z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-[rgba(255,248,240,0.9)] shadow-[0_12px_30px_rgba(26,26,26,0.05)] border border-(--color-border) opacity-80 dark:bg-[rgba(17,17,17,0.9)]"
						>
							<Warehouse size={32} className="text-(--color-text-primary)" strokeWidth={1.5} />
						</motion.div>

						<motion.div
							animate={{ y: [5, -5] }}
							transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5, ease: "easeInOut", delay: 1 }}
							className="absolute bottom-[15%] right-[15%] z-30 flex h-24 w-24 items-center justify-center rounded-2xl bg-(--color-bg-primary) shadow-[0_16px_40px_rgba(26,26,26,0.08)] border border-(--color-border)"
						>
							<Package size={40} className="text-(--color-accent-yellow)" strokeWidth={1.5} />
						</motion.div>

						{/* Decorative dashed circle */}
						<div className="absolute inset-0 rounded-full border border-dashed border-(--color-brand-red)/20 scale-[0.8] -rotate-12"></div>
						<div className="absolute inset-0 rounded-full border border-dashed border-(--color-text-secondary)/10 scale-[1.05] rotate-45"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DistributorHero
