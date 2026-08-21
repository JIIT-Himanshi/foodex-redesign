import { motion } from 'framer-motion'

function ContactForm() {
	return (
		<section className="bg-(--color-bg-primary) py-12 md:py-20 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

					{/* Left Column: Map & Info */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="flex flex-col gap-8"
					>
						<div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden shadow-[var(--color-shadow)] border border-(--color-border) bg-(--color-card) p-2 relative group">
							<div className="w-full h-full rounded-2xl overflow-hidden relative">
								{/* 
									Using a generic Google Maps embed URL for visual representation.
									The grayscale filter gives it a premium look, which becomes colorful on hover.
								*/}
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.56!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
									title="Foodex Office Location"
								></iframe>
							</div>
						</div>

						<div id="complete-contacts" className="flex flex-col gap-6 pl-2" style={{ scrollMarginTop: '88px' }}>
							<div>
								<h4 className="font-display text-lg font-bold text-(--color-text-primary) mb-2">Corporate Office</h4>
								<p className="font-body text-(--color-text-secondary) leading-relaxed">
									Zee Foodex (India) Pvt. Ltd,<br />
									95, DLF Industrial Area,Phase-1,<br />
									Faridabad-121003
								</p>
							</div>

							<div className="h-[1px] w-full bg-(--color-border)"></div>

							<div className="flex flex-col gap-6">
								<div>
									<h4 className="font-display text-lg font-bold text-(--color-text-primary) mb-2">Email Us</h4>
									<p className="font-body text-(--color-text-secondary) leading-relaxed">
										<a href="mailto:asbhati@foodexindia.com" className="hover:text-(--color-brand-red) transition-colors">asbhati@foodexindia.com</a>
									</p>
								</div>
								<div>
									<h4 className="font-display text-lg font-bold text-(--color-text-primary) mb-2">Call Us</h4>
									<p className="font-body text-(--color-text-secondary) leading-relaxed">
										<strong>Mr. Vikas Bansal:</strong> +91-9896256933, 9416891933 <br />
										<span className="text-[14px] opacity-80">(Export & Rest of India)</span>
										<br /><br />
										<strong>Mr. Sanjay Pathak:</strong> +91-9810609574 <br />
										<span className="text-[14px] opacity-80">(Delhi, Bihar, Eastern U.P.)</span>
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
					>
						<div className="bg-(--color-card) rounded-3xl p-8 sm:p-10 shadow-[var(--color-shadow)] border border-(--color-border)">
							<h2 className="font-display text-3xl font-extrabold text-(--color-text-primary) mb-8">
								Send us a Message
							</h2>

							<form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div className="flex flex-col gap-2">
										<label htmlFor="firstName" className="font-body text-sm font-semibold text-(--color-text-primary)">First Name</label>
										<input
											type="text"
											id="firstName"
											className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
											placeholder="John"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="lastName" className="font-body text-sm font-semibold text-(--color-text-primary)">Last Name</label>
										<input
											type="text"
											id="lastName"
											className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
											placeholder="Doe"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div className="flex flex-col gap-2">
										<label htmlFor="email" className="font-body text-sm font-semibold text-(--color-text-primary)">Email Address</label>
										<input
											type="email"
											id="email"
											className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
											placeholder="john@example.com"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label htmlFor="phone" className="font-body text-sm font-semibold text-(--color-text-primary)">Phone Number</label>
										<input
											type="tel"
											id="phone"
											className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
											placeholder="+91 98765 43210"
										/>
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<label htmlFor="subject" className="font-body text-sm font-semibold text-(--color-text-primary)">Subject</label>
									<input
										type="text"
										id="subject"
										className="w-full h-14 px-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60"
										placeholder="How can we help you?"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label htmlFor="message" className="font-body text-sm font-semibold text-(--color-text-primary)">Message</label>
									<textarea
										id="message"
										rows="5"
										className="w-full p-5 rounded-2xl bg-(--color-bg-primary) border border-(--color-border) text-(--color-text-primary) outline-none transition-all duration-300 focus:border-(--color-brand-red) focus:ring-4 focus:ring-[rgba(217,4,41,0.1)] placeholder:text-(--color-text-secondary)/60 resize-none"
										placeholder="Tell us more about your enquiry..."
									></textarea>
								</div>

								<button
									type="button"
									className="mt-2 w-full inline-flex h-14 items-center justify-center rounded-full bg-(--color-brand-red) text-[#ffffff] text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90 shadow-[0_8px_20px_rgba(217,4,41,0.2)]"
									style={{ color: '#ffffff' }}
								>
									Send Message
								</button>
							</form>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	)
}

export default ContactForm
