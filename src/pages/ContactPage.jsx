import { useEffect } from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import ContactFAQ from '../components/Contact/ContactFAQ'
import ContactCTA from '../components/Contact/ContactCTA'

function ContactPage() {
	useEffect(() => {
		document.title = 'Contact Us | Foodex'
	}, [])

	return (
		<div className="flex flex-col min-h-screen">
			<ContactHero />
			<ContactInfo />
			<ContactForm />
			<ContactFAQ />
			<ContactCTA />
		</div>
	)
}

export default ContactPage
