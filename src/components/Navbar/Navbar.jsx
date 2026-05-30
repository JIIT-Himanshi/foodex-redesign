import { useEffect, useState } from 'react'
import { Menu, Moon, Search, ShoppingCart, Sun, UserRound, X } from 'lucide-react'

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
	const [isScrolled, setIsScrolled] = useState(false)
	const [theme, setTheme] = useState(() => {
		const storedTheme = window.localStorage.getItem('foodex-theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

		return storedTheme ?? (prefersDark ? 'dark' : 'light')
	})

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

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
	}

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-200 ${
				isScrolled ? 'glass-surface' : 'bg-transparent'
			}`}
		>
			<nav className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
				<a
					href="#home"
					className="flex items-center gap-3 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
					aria-label="Foodex India home"
				>
					<img
						src="/logos/foodex-logo.png"
						alt="Foodex India logo"
						className="h-11 w-auto sm:h-12"
					/>
				</a>

				<div className="hidden items-center justify-self-center gap-8 lg:flex">
					{navItems.map((item) => (
						<a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm font-medium">
							{item}
						</a>
					))}
				</div>

				<div className="flex items-center justify-self-end gap-1 sm:gap-1.5 lg:gap-1.5">
					<button
						type="button"
						className="icon-button inline-flex h-10 w-10 rounded-full sm:h-11 sm:w-11"
						aria-label="Search"
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
						aria-label="Cart"
					>
						<ShoppingCart className="h-4 w-4" />
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

					<button
						type="button"
						className="hidden items-center rounded-full bg-(--color-brand-red) px-3 py-1.5 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-red)/90 hover:shadow-md lg:inline-flex"
					>
						Order Online
					</button>

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
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="rounded-2xl px-4 py-3 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-black/5 hover:text-(--color-brand-red)"
							onClick={() => setIsMenuOpen(false)}
						>
							{item}
						</a>
					))}
					<button
						type="button"
						className="mt-2 self-center rounded-full bg-(--color-brand-red) px-5 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-(--color-brand-red)/90 hover:shadow-md"
						onClick={() => setIsMenuOpen(false)}
					>
						Order Online
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar
