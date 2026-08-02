import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleItem = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="w-full flex flex-col gap-4">
			{items.map((item, index) => {
				const isOpen = openIndex === index
				return (
					<div 
						key={index} 
						className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
							isOpen 
								? 'bg-(--color-card) border-(--color-brand-red)/20 shadow-[0_8px_24px_rgba(217,4,41,0.08)]' 
								: 'bg-(--color-bg-primary) border-(--color-border) hover:border-(--color-text-secondary)/30'
						}`}
					>
						<button
							type="button"
							className="w-full flex items-center justify-between p-4 sm:p-6 min-h-[52px] text-left focus:outline-none"
							onClick={() => toggleItem(index)}
						>
							<span className={`font-display text-lg font-bold transition-colors duration-300 pr-4 ${isOpen ? 'text-(--color-brand-red)' : 'text-(--color-text-primary)'}`}>
								{item.question}
							</span>
							<ChevronDown 
								className={`flex-shrink-0 text-(--color-text-secondary) transition-transform duration-300 ${isOpen ? 'rotate-180 text-(--color-brand-red)' : ''}`} 
								size={20} 
							/>
						</button>
						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
								>
									<div className="px-6 pb-6 pt-0 font-body text-(--color-text-secondary) leading-relaxed">
										{item.answer}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)
			})}
		</div>
	)
}

export default Accordion
