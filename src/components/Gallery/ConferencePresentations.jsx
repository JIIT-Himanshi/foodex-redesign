import { motion } from 'framer-motion'
import GalleryCard from './GalleryCard'
import { galleryItems } from '../../data/galleryData'

function ConferencePresentations({ onCardClick }) {
  const conferenceItems = galleryItems.filter((item) => item.sectionId === 'conference')

  return (
    <section id="conference" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-32">
      {/* Minimal Header */}
      <div className="mb-12 flex items-baseline justify-between gallery-section-divider border-b pb-6">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight gallery-section-heading">
          <span className="text-(--color-brand-red) mr-4 font-mono text-2xl sm:text-4xl">04</span>
          Keynotes & Presentations
        </h2>
        <span className="text-xs font-mono uppercase tracking-widest gallery-section-meta hidden sm:inline">
          [ EXPO KEYNOTES ]
        </span>
      </div>

      {/* Multi-angle Grid */}
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
        {conferenceItems.map((item) => (
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

export default ConferencePresentations
