import { useEffect, useRef, useState } from 'react'

const trustItems = [
	{ value: '2008', label: 'Established' },
	{ value: '50+', label: 'Products' },
	{ value: '100+', label: 'Retail Partners' },
	{ value: 'Pan India', label: 'Presence' },
]

function TrustStrip() {
	const sectionRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const section = sectionRef.current

		if (!section) {
			return undefined
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.25 },
		)

		observer.observe(section)

		return () => observer.disconnect()
	}, [])

	return (
		<section
			ref={sectionRef}
			aria-label="Foodex trust strip"
			className="mt-6 border-y border-[rgba(0,0,0,0.05)] bg-(--color-bg-secondary) text-(--color-text-primary) dark:border-[rgba(255,255,255,0.06)] lg:mt-10"
		>
			<div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
				<div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,197,66,0.06),transparent_72%)] blur-3xl opacity-35" />

				<div className="grid grid-cols-2 gap-x-4 gap-y-4 text-center lg:grid-cols-4 lg:gap-x-8">
					{trustItems.map((item, index) => (
						<div
							key={item.label}
							className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
							}`}
							style={{ transitionDelay: `${index * 0.05 + 0.1}s` }}
						>
							<div className="group flex flex-col items-center gap-1">
								<span className="text-[24px] font-bold leading-none tracking-[-0.03em] text-(--color-text-primary) transition-colors duration-300 ease-out sm:text-[28px] lg:text-[32px] lg:hover:text-(--color-brand-red) dark:text-(--color-text-primary)">
									{item.value}
								</span>
								<span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#6B6B6B] dark:text-[#BDBDBD]">
									{item.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TrustStrip
