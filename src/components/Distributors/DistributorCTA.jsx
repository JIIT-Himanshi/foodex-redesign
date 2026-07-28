import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import navratanMixture from '../../assets/products/navratan-mixture.png'
import alooBhujia from '../../assets/products/aloo-bhujia.png'

function DistributorCTA() {
	return (
		<section className="bg-(--color-brand-red) py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Left Side: Text and Buttons */}
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#ffffff] mb-6 tracking-tight"
						>
							Let's Grow Together
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ delay: 0.1 }}
							className="font-body text-[#ffffff]/90 max-w-lg text-[18px] leading-relaxed mb-10"
						>
							Become a trusted Foodex distribution partner and expand your business with one of India's growing food brands.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
						>
							<a
								href="#apply"
								className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full bg-transparent border-2 border-white/30 px-8 font-body font-semibold text-[#ffffff] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffffff] hover:bg-white/10"
								style={{ color: '#ffffff' }}
							>
								Become Distributor
							</a>
							<Link
								to="/contact"
								className="inline-flex h-14 min-w-[160px] items-center justify-center rounded-full bg-[#ffffff] px-8 font-body font-semibold transition-transform duration-300 hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
								style={{ color: 'var(--color-brand-red)' }}
							>
								Contact Us
							</Link>
						</motion.div>
					</div>

					{/* Right Side: Elegant Product Composition */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.8 }}
						className="relative flex items-center justify-center lg:justify-end h-80 sm:h-96"
					>
						<div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
							{/* Soft glow behind products */}
							<div className="absolute inset-0 bg-[#ffffff]/10 blur-3xl rounded-full scale-75"></div>

							<motion.img
								src={alooBhujia}
								alt="Aloo Bhujia"
								animate={{ y: [-5, 5] }}
								transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
								className="absolute z-20 w-[65%] max-w-[260px] drop-shadow-2xl"
							/>

							<motion.img
								src={navratanMixture}
								alt="Navratan Mixture"
								animate={{ y: [5, -5], rotate: [-5, 0] }}
								transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut", delay: 1 }}
								className="absolute z-10 w-[50%] max-w-[200px] left-[5%] bottom-[15%] drop-shadow-xl opacity-90 blur-[1px]"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default DistributorCTA
