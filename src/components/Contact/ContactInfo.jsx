import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const contactDetails = [
	{
		icon: MapPin,
		title: 'Address',
		description: '123 Foodex Industrial Estate, Phase 1, New Delhi 110020, India',
	},
	{
		icon: Phone,
		title: 'Phone Numbers',
		description: '+91 98765 43210\n+91 11 2345 6789',
	},
	{
		icon: Mail,
		title: 'Email Address',
		description: 'hello@foodex.in\nsales@foodex.in',
	},
	{
		icon: Clock,
		title: 'Working Hours',
		description: 'Mon-Sat: 9:00 AM - 6:00 PM\nSunday: Closed',
	},
]

function ContactInfo() {
	return (
		<section className="bg-(--color-bg-primary) py-12 md:py-20 px-4 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{contactDetails.map((detail, index) => {
						const Icon = detail.icon
						return (
							<motion.div
								key={detail.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex flex-col items-center text-center p-8 rounded-3xl bg-(--color-card) shadow-[var(--color-shadow)] border border-(--color-border) transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,26,26,0.12)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(217,4,41,0.08)] text-(--color-brand-red) mb-6">
									<Icon size={28} strokeWidth={1.5} />
								</div>
								<h3 className="font-display text-xl font-bold text-(--color-text-primary) mb-3">
									{detail.title}
								</h3>
								<p className="font-body text-(--color-text-secondary) leading-relaxed whitespace-pre-line text-[15px]">
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

export default ContactInfo
