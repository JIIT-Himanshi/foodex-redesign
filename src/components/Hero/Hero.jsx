import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import heroProduct from '../../assets/products/teekha-mix.png'

function Hero() {
	const productShellRef = useRef(null)
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		setIsReady(true)
	}, [])

	useLayoutEffect(() => {
		if (!productShellRef.current) {
			return undefined
		}

		const floatTween = gsap.to(productShellRef.current, {
			y: -9,
			duration: 7,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		})

		return () => {
			floatTween.kill()
		}
	}, [])

	return (
		<section className="relative overflow-hidden bg-(--color-bg-primary) lg:min-h-[calc(100vh-72px)]">
			<div className="mx-auto grid min-h-full max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[0.52fr_0.46fr] lg:gap-8 lg:px-1 lg:py-0">
				<div className="relative z-10 flex lg:-translate-y-2.5 flex-col items-center text-center lg:items-start lg:pl-0 lg:text-left xl:pl-0">
					<p
						data-hero-eyebrow
						className={`text-[14px] font-semibold uppercase tracking-[0.25em] text-(--color-brand-red) transition-all duration-700 ease-out ${
							isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
					>
						Premium Namkeen & Sweets
					</p>

					<h1
						data-hero-heading
						className={`font-display mt-4 max-w-[12ch] text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-(--color-text-primary) transition-all duration-700 ease-out sm:text-5xl md:text-6xl lg:text-[4.25rem] ${
							isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
					>
						Traditional Taste,
						<br />
						<span className="text-(--color-brand-red)">Premium Quality</span>
					</h1>

					<p
						data-hero-description
						className={`font-body mt-5 max-w-130 text-[18px] leading-8 text-(--color-text-secondary) transition-all duration-700 ease-out ${
							isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
					>
						Crafting authentic namkeen, sweets and festive favourites trusted by families across India since 2008.
					</p>

					<div
						data-hero-actions
						className={`mt-8 flex flex-col items-center gap-5 transition-all duration-700 ease-out sm:flex-row sm:justify-center lg:justify-start ${
							isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
						style={{ transitionDelay: '300ms' }}
					>
						<a
							href="#products"
							className="inline-flex h-12 min-w-44 items-center justify-center rounded-full bg-(--color-brand-red) px-1 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90"
							style={{ color: '#ffffff' }}
						>
							Explore Products
						</a>

						<a
							href="#about"
							className="inline-flex h-12 min-w-40 items-center justify-center rounded-full border border-[#D8D0C8] bg-[#FBF6EF] px-7 text-sm font-semibold text-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#cfc6bd] hover:bg-[#F7F2EC]"
						>
							About Foodex
						</a>
					</div>
				</div>

				<div className="relative flex items-center justify-center lg:justify-end">
					<div className="absolute left-1/2 top-[48%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_54%_46%/56%_44%_56%_44%] bg-[linear-gradient(135deg,rgba(255,245,232,0.98),rgba(255,233,201,0.82),rgba(255,223,168,0.5))] blur-3xl sm:h-96 sm:w-96 lg:h-md lg:w-md" />
					<div className="absolute left-[49%] top-[68%] h-12 w-64 -translate-x-1/2 rounded-full bg-[rgba(217,4,41,0.1)] blur-3xl sm:w-80 lg:w-96" />

					<div
						ref={productShellRef}
						data-hero-product
						className={`relative w-full max-w-64 rotate-[-4deg] transition-all duration-700 ease-out sm:max-w-76 lg:max-w-96 ${
							isReady ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
						}`}
						style={{ transitionDelay: '400ms' }}
					>
						<div className="group relative translate-x-2 transition-transform duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.03] lg:translate-x-3">
							<div className="absolute left-1/2 bottom-4 h-14 w-[82%] -translate-x-1/2 rounded-full bg-[rgba(217,4,41,0.14)] blur-[48px]" />
							<div className="absolute inset-x-[10%] bottom-3 h-12 rounded-full bg-[rgba(255,245,232,0.86)] blur-3xl" />
							<img
								src={heroProduct}
								alt="Foodex Teekha Mix pack"
								className="relative z-10 mx-auto h-auto w-full select-none drop-shadow-[0_44px_90px_rgba(217,4,41,0.14)]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero