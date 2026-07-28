import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ContactCTA() {
	return (
		<section className="bg-(--color-brand-red) text-[#ffffff] overflow-hidden relative py-16 md:py-24 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

					{/* Left Side: Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="flex flex-col text-center lg:text-left items-center lg:items-start"
					>
						<h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#ffffff' }}>
							Let's Grow Together
						</h2>
						<p className="font-body text-lg text-white/80 max-w-md mb-10 leading-relaxed">
							Whether you want to stock our products or explore bulk buying options, we're ready to partner with you and bring the authentic taste of Foodex to your customers.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
							<Link
								to="/products"
								className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffffff] px-8 font-body font-semibold transition-transform duration-300 hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
								style={{ color: 'var(--color-brand-red)' }}
							>
								Explore Products
							</Link>
							<button
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								className="inline-flex h-14 items-center justify-center rounded-full bg-transparent border-2 border-white/30 px-8 font-body font-semibold text-[#ffffff] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffffff] hover:bg-white/10"
								style={{ color: '#ffffff' }}
							>
								Become a Distributor
							</button>
						</div>
					</motion.div>

					{/* Right Side: Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.8 }}
						className="relative flex justify-center items-center py-8 lg:py-0"
					>
						{/* Background glowing effect for the image */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-white/5 blur-[80px]"></div>

						<motion.img
							src="https://static.vecteezy.com/system/resources/previews/067/223/664/non_2x/namkeen-with-chili-and-fire-flames-on-a-transparent-background-free-png.png"
							alt="Foodex Premium Namkeen"
							animate={{ y: [-10, 10] }}
							transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
							className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
						/>
					</motion.div>

				</div>
			</div>
		</section>
	)
}

export default ContactCTA
