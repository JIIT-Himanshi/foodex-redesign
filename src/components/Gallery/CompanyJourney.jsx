import { motion } from 'framer-motion'
import GalleryCard from './GalleryCard'
import { galleryItems } from '../../data/galleryData'

function CompanyJourney({ onCardClick }) {
  const journeyItems = galleryItems.filter((item) => item.sectionId === 'journey')

  return (
    <section id="journey" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-32">
      {/* Minimal Editorial Section Header */}
      <div className="mb-12 flex items-baseline justify-between border-b border-white/10 pb-6">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          <span className="text-red-500 mr-4 font-mono text-2xl sm:text-4xl">02</span>
          Company Timeline
        </h2>
        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden sm:inline">
          [ EDITORIAL SPREAD ]
        </span>
      </div>

      {/* Handcrafted Asymmetric Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-12 gap-8"
      >
        {journeyItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={item.gridSpan || 'col-span-12 md:col-span-6 lg:col-span-4'}
          >
            <GalleryCard item={item} onCardClick={onCardClick} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CompanyJourney
