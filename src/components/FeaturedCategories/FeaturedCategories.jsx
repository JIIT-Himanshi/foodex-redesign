import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import '../../styles/featured-categories.css'

import namkeenImage from '../../assets/categories/namkeen.png'
import sweetsImage from '../../assets/categories/sweets.png'
import giftPacksImage from '../../assets/categories/gift-packs.png'
import cookiesImage from '../../assets/categories/cookies.png'
import readyToEatImage from '../../assets/categories/ready-to-eat.png'

// Category names must exactly match the category values used in products.js and ProductsPage.jsx.
// 'Gift Packs' has no products in the current dataset; the Products page will gracefully
// fall back to 'All Products' when an unrecognised category is received.
const categories = [
	{ name: 'Namkeen', image: namkeenImage },
	{ name: 'Sweets', image: sweetsImage },
	{ name: 'Gift Packs', image: giftPacksImage },
	{ name: 'Cookies & Bakery', image: cookiesImage },
	{ name: 'Ready To Eat', image: readyToEatImage },
]

function getTabletPlacementClass(index) {
	if (index === 3) {
		return 'md:col-start-2 lg:col-start-auto'
	}

	if (index === 4) {
		return 'md:col-start-4 lg:col-start-auto'
	}

	return ''
}

function FeaturedCategories() {
	const navigate = useNavigate()

	const handleCategoryClick = (categoryName) => {
		navigate(`/products?category=${encodeURIComponent(categoryName)}`)
	}

	return (
		<section
			aria-label="Featured product categories"
			className="px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
		>
			<div className="mx-auto max-w-7xl">
				<header className="mx-auto max-w-155 text-center">
					<h2 className="font-display text-[32px] font-bold tracking-[-0.03em] text-(--color-text-primary) sm:text-[36px] md:text-[40px] lg:text-[48px]">
						Explore Our Categories
					</h2>
					<p className="mt-4 text-[16px] font-medium leading-relaxed text-(--color-text-secondary) md:text-[18px]">
						Discover the flavours that have made Foodex a trusted household name across India.
					</p>
				</header>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-5">
					{categories.map((category, index) => (
						<motion.article
							key={category.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
							className={`featured-category-card group h-70 md:col-span-2 md:h-75 lg:col-span-1 lg:h-80 ${getTabletPlacementClass(index)}`}
							role="button"
							tabIndex={0}
							aria-label={`Explore ${category.name}`}
							onClick={() => handleCategoryClick(category.name)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault()
									handleCategoryClick(category.name)
								}
							}}
						>
							<div className="featured-category-image-zone">
								<span className="featured-category-base-shadow" aria-hidden="true" />
								<span className="featured-category-glow" aria-hidden="true" />
								<img
									src={category.image}
									alt={`${category.name} by Foodex`}
									className="featured-category-image"
								/>
							</div>

							<div className="featured-category-content">
								<div>
									<p className="featured-category-title font-display text-[18px] font-semibold leading-tight tracking-[-0.02em]">
										{category.name}
									</p>
									<span className="featured-category-accent" />
								</div>

								<ArrowRight
									aria-hidden="true"
									size={18}
									className="featured-category-arrow"
								/>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedCategories