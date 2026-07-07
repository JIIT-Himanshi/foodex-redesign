import { motion } from 'framer-motion'
import Accordion from './Accordion'

const faqs = [
	{
		question: 'How can I become a distributor?',
		answer: 'To become a distributor, please fill out the contact form on this page and select "Distributorship" as the subject. Our sales team will get back to you within 24-48 hours with our distributor program details, requirements, and application process.'
	},
	{
		question: 'How long does it take to receive a response?',
		answer: 'We aim to respond to all general inquiries within 24 hours. For business or distributor-related inquiries, please allow up to 48 hours for our specialized team to review your request and provide a detailed response.'
	},
	{
		question: 'Where is the manufacturing facility located?',
		answer: 'Our state-of-the-art manufacturing facility is located in New Delhi, India. We maintain the highest standards of hygiene and quality control across all our production lines.'
	},
	{
		question: 'Can I enquire about bulk orders?',
		answer: 'Yes, absolutely! We handle bulk orders for corporate events, weddings, and retail chains. Please provide the estimated quantity and required delivery date in your message so we can give you the best possible quote.'
	},
	{
		question: 'Do you export internationally?',
		answer: 'Yes, we export to several countries worldwide. Our export team ensures that all international packaging and compliance standards are met. Get in touch with us for a list of currently serviceable countries and export pricing.'
	}
]

function ContactFAQ() {
	return (
		<section className="bg-(--color-bg-primary) py-12 md:py-20 px-4 sm:px-6">
			<div className="mx-auto max-w-3xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="font-display text-3xl font-extrabold text-(--color-text-primary) mb-4">
						Frequently Asked Questions
					</h2>
					<p className="font-body text-(--color-text-secondary) text-lg">
						Find quick answers to common questions about working with Foodex.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Accordion items={faqs} />
				</motion.div>
			</div>
		</section>
	)
}

export default ContactFAQ
