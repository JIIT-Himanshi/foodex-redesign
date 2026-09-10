import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Search, ShoppingCart, Sun, UserRound, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SearchOverlay from '../SearchOverlay/SearchOverlay'
import { useCart } from '../../context/CartContext'

const navItems = [
	'Home',
	'Products',
	'About',
	'Gallery',
	'Distributors',
	'Contact',
]

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const { pathname, hash } = useLocation()
	const [theme, setTheme] = useState(() => {
		const storedTheme = window.localStorage.getItem('foodex-theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

		return storedTheme ?? (prefersDark ? 'dark' : 'light')
	})

	const { cartItemCount, openCart, closeCart, isCartOpen } = useCart()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 12)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const root = document.documentElement
		root.dataset.theme = theme
		root.classList.toggle('dark', theme === 'dark')
		window.localStorage.setItem('foodex-theme', theme)
	}, [theme])

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isMenuOpen])

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
	}

	// Search/Cart mutual exclusivity
	const handleOpenSearch = () => {
		if (isCartOpen) closeCart()
		setIsSearchOpen(true)
	}

	const handleOpenCart = () => {
		if (isSearchOpen) setIsSearchOpen(false)
		openCart()
	}

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'glass-surface' : 'bg-transparent'
				}`}
		>
			<nav className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 lg:py-3">
				<Link
					to="/"
					className="flex items-center gap-3 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
					aria-label="Foodex India home"
				>
					<img
						src="/logos/foodex-logo.png"
						alt="Foodex India logo"
						className="h-11 w-auto sm:h-12"
					/>
				</Link>

				<div className="hidden items-center justify-self-center gap-7 lg:flex">
					{navItems.map((item) => {
						const isProducts = item === 'Products'
						const isHome = item === 'Home'
						const lowerItem = item.toLowerCase()

						if (isProducts) {
							return (
								<Link
									key={item}
									to="/products"
									className={`nav-link text-sm font-medium ${pathname.startsWith('/products') ? 'nav-link-active' : ''
										}`}
								>
									{item}
								</Link>
							)
						}

						if (isHome) {
							return (
								<Link
									key={item}
									to="/"
									className={`nav-link text-sm font-medium ${pathname === '/' && !hash ? 'nav-link-active' : ''
										}`}
								>
									{item}
								</Link>
							)
						}

						return (
							item === 'About' ? (
								<Link
									key={item}
									to="/about"
									className={`nav-link text-sm font-medium ${pathname === '/about' ? 'nav-link-active' : ''}`}
								>
									{item}
								</Link>
							) : item === 'Gallery' ? (
								<Link
									key={item}
									to="/gallery"
									className={`nav-link text-sm font-medium ${pathname === '/gallery' ? 'nav-link-active' : ''}`}
								>
									{item}
								</Link>
							) : item === 'Contact' ? (
								<Link
									key={item}
									to="/contact"
									className={`nav-link text-sm font-medium ${pathname === '/contact' ? 'nav-link-active' : ''}`}
								>
									{item}
								</Link>
							) : item === 'Distributors' ? (
								<Link
									key={item}
									to="/distributors"
									className={`nav-link text-sm font-medium ${pathname === '/distributors' ? 'nav-link-active' : ''}`}
								>
									{item}
								</Link>
							) : (
								<a
									key={item}
									href={pathname === '/' ? `#${lowerItem}` : `/#${lowerItem}`}
									className="nav-link text-sm font-medium"
								>
									{item}
								</a>
							)
						)
					})}
				</div>

				<div className="flex items-center justify-self-end gap-1 sm:gap-1.5 lg:gap-1.5">
					<button
						type="button"
						className="icon-button inline-flex h-10 w-10 rounded-full sm:h-11 sm:w-11"
						aria-label="Search products"
						onClick={handleOpenSearch}
					>
						<Search className="h-4 w-4" />
					</button>

					<button
						type="button"
						className="icon-button hidden h-10 w-10 rounded-full sm:inline-flex sm:h-11 sm:w-11"
						aria-label="Account"
					>
						<UserRound className="h-4 w-4" />
					</button>

					<button
						type="button"
						className="icon-button hidden h-10 w-10 rounded-full sm:inline-flex sm:h-11 sm:w-11"
						aria-label="Open shopping cart"
						onClick={handleOpenCart}
					>
						<span className="cart-badge-wrapper">
							<ShoppingCart className="h-4 w-4" />
							<AnimatePresence>
								{cartItemCount > 0 && (
									<motion.span
										className="cart-badge"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
										transition={{ type: 'spring', stiffness: 500, damping: 25 }}
										key="cart-badge"
									>
										{cartItemCount > 99 ? '99+' : cartItemCount}
									</motion.span>
								)}
							</AnimatePresence>
						</span>
					</button>

					<button
						type="button"
						className="icon-button inline-flex h-10 w-10 rounded-full sm:h-11 sm:w-11"
						aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
						aria-pressed={theme === 'dark'}
						onClick={toggleTheme}
					>
						{theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
					</button>

					<Link
						to="/order-online"
						className="hidden items-center rounded-full bg-(--color-brand-red) px-3 py-1.5 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90 hover:shadow-md lg:inline-flex"
					>
						Order Online
					</Link>

					<button
						type="button"
						className="icon-button inline-flex h-10 w-10 rounded-full lg:hidden sm:h-11 sm:w-11"
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen((value) => !value)}
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</nav>

			<div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mobile-menu-panel`}>
				<div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 items-center">
					{navItems.map((item) => {
						const isProducts = item === 'Products'
						const isHome = item === 'Home'
						const lowerItem = item.toLowerCase()

						if (isProducts) {
							return (
								<Link
									key={item}
									to="/products"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname.startsWith('/products') ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'
										}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							)
						}

						if (isHome) {
							return (
								<Link
									key={item}
									to="/"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname === '/' && !hash ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'
										}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							)
						}

						return (
							item === 'About' ? (
								<Link
									key={item}
									to="/about"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname === '/about' ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							) : item === 'Gallery' ? (
								<Link
									key={item}
									to="/gallery"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname === '/gallery' ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							) : item === 'Contact' ? (
								<Link
									key={item}
									to="/contact"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname === '/contact' ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							) : item === 'Distributors' ? (
								<Link
									key={item}
									to="/distributors"
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 hover:text-(--color-brand-red) ${pathname === '/distributors' ? 'text-(--color-brand-red) font-semibold' : 'text-(--color-text-primary)'}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</Link>
							) : (
								<a
									key={item}
									href={pathname === '/' ? `#${lowerItem}` : `/#${lowerItem}`}
									className="rounded-2xl px-4 py-3 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-black/5 hover:text-(--color-brand-red)"
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</a>
							)
						)
					})}

					{/* Cart link in mobile menu */}
					<button
						type="button"
						className="rounded-2xl px-4 py-3 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-black/5 hover:text-(--color-brand-red) inline-flex items-center gap-2"
						onClick={() => {
							setIsMenuOpen(false)
							handleOpenCart()
						}}
					>
						<ShoppingCart className="h-4 w-4" />
						Cart
						{cartItemCount > 0 && (
							<span className="inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded-full bg-(--color-brand-red) text-white text-[11px] font-bold leading-none">
								{cartItemCount > 99 ? '99+' : cartItemCount}
							</span>
						)}
					</button>

					<Link
						to="/order-online"
						className="mt-2 self-center rounded-full bg-(--color-brand-red) px-5 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-(--color-brand-red)/90 hover:shadow-md"
						onClick={() => setIsMenuOpen(false)}
					>
						Order Online
					</Link>
				</div>
			</div>

			<SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
		</header>
	)
}

export default Navbar

