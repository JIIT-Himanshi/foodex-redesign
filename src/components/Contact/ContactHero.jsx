import { useEffect, useState } from 'react'

function ContactHero() {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		setIsReady(true)
	}, [])

	return (
		<section className="relative overflow-hidden bg-(--color-bg-primary) flex items-center justify-center" style={{ minHeight: '60vh' }}>
			{/* Background Soft Gradients */}
			<div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_54%_46%/56%_44%_56%_44%] bg-[linear-gradient(135deg,rgba(255,245,232,0.98),rgba(255,233,201,0.82),rgba(255,223,168,0.5))] blur-3xl sm:h-96 sm:w-96 lg:h-[32rem] lg:w-[32rem]" />
				<div className="absolute top-[60%] left-[50%] h-12 w-64 -translate-x-1/2 rounded-full bg-[rgba(217,4,41,0.08)] blur-3xl sm:w-80 lg:w-96" />
			</div>

			<div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto w-full pt-16 pb-12">
				<p
					className={`text-[14px] font-semibold uppercase tracking-[0.25em] text-(--color-brand-red) transition-all duration-700 ease-out ${
						isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				>
					Contact Us
				</p>

				<h1
					className={`font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-(--color-text-primary) transition-all duration-700 ease-out sm:text-5xl md:text-6xl ${
						isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
					style={{ transitionDelay: '100ms' }}
				>
					Let's Start a Conversation
				</h1>

				<p
					className={`font-body mt-5 text-[18px] leading-8 text-(--color-text-secondary) transition-all duration-700 ease-out ${
						isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
					style={{ transitionDelay: '200ms' }}
				>
					Whether you have a question about our products, want to discuss bulk orders, or are interested in becoming a distributor, we're here to help.
				</p>

				<div
					className={`mt-10 h-1.5 w-12 rounded-full bg-(--color-brand-red) transition-all duration-700 ease-out ${
						isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
					}`}
					style={{ transitionDelay: '300ms' }}
				/>
			</div>
		</section>
	)
}

export default ContactHero
