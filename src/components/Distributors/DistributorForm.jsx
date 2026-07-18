import { motion } from 'framer-motion'

function DistributorForm() {
	return (
		<section id="apply" className="bg-(--color-bg-primary) py-16 md:py-24 px-4 sm:px-6 scroll-mt-24">
			<div className="mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						className="font-display text-3xl md:text-4xl font-extrabold text-(--color-text-primary) mb-4"
					>
						Become a Distributor
					</motion.h2>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ delay: 0.1 }}
						className="font-body text-(--color-text-secondary) max-w-2xl mx-auto text-[17px] leading-relaxed"
					>
						Fill out the form below and our team will contact you shortly.
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
					className="bg-(--color-card) rounded-3xl p-8 sm:p-12 shadow-[var(--color-shadow)] border border-(--color-border)"
				>
					<form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<label htmlFor="businessName" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Business Name</label>
								<input 
									type="text" 
									id="businessName"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="Enter your registered business name"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="ownerName" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Owner Name</label>
								<input 
									type="text" 
									id="ownerName"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="Full Name"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<label htmlFor="email" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Email Address</label>
								<input 
									type="email" 
									id="email"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="your@email.com"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="phone" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Phone Number</label>
								<input 
									type="tel" 
									id="phone"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="+91 98765 43210"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<label htmlFor="city" className="font-body text-[15px] font-semibold text-(--color-text-primary)">City</label>
								<input 
									type="text" 
									id="city"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="E.g. New Delhi"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="state" className="font-body text-[15px] font-semibold text-(--color-text-primary)">State</label>
								<input 
									type="text" 
									id="state"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="E.g. Delhi"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<label htmlFor="businessType" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Business Type</label>
								<select 
									id="businessType"
									defaultValue=""
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] appearance-none cursor-pointer"
									style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
								>
									<option value="" disabled>Select business type</option>
									<option value="Distributor">Distributor</option>
									<option value="Wholesaler">Wholesaler</option>
									<option value="Retailer">Retailer</option>
									<option value="Supermarket">Supermarket</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="yearsInBusiness" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Years in Business</label>
								<input 
									type="number" 
									id="yearsInBusiness"
									className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
									placeholder="E.g. 5"
									min="0"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="message" className="font-body text-[15px] font-semibold text-(--color-text-primary)">Additional Message (Optional)</label>
							<textarea 
								id="message"
								rows="4"
								className="w-full p-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60 resize-none"
								placeholder="Tell us about your current distribution network..."
							></textarea>
						</div>

						<button 
							type="button"
							className="mt-4 w-full md:w-auto md:px-12 md:self-center inline-flex h-14 items-center justify-center rounded-full bg-(--color-brand-red) text-[#ffffff] text-[16px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90 shadow-[0_8px_20px_rgba(217,4,41,0.2)]"
							style={{ color: '#ffffff' }}
						>
							Apply Now
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}

export default DistributorForm
