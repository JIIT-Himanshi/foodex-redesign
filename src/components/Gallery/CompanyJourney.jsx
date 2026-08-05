import { motion } from 'framer-motion'
import GalleryCard from './GalleryCard'
import { galleryItems } from '../../data/galleryData'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

function CompanyJourney({ onCardClick }) {
  const journeyItems = galleryItems.filter((item) => item.sectionId === 'journey')

  // First item = featured banner (big), rest = smaller cards
  const [featured, ...smallItems] = journeyItems

  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-32"
    >
      {/* Section Header */}
      <div className="mb-12 flex items-baseline justify-between gallery-section-divider border-b pb-6">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight gallery-section-heading">
          <span className="text-(--color-brand-red) mr-4 font-mono text-2xl sm:text-4xl">02</span>
          Company Timeline
        </h2>
        <span className="text-xs font-mono uppercase tracking-widest gallery-section-meta hidden sm:inline">
          [ EDITORIAL SPREAD ]
        </span>
      </div>

      {/* Editorial Magazine Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-5"
        style={{ minHeight: '520px' }}
      >
        {/* LEFT — Featured / Large banner image */}
        {featured && (
          <motion.div variants={itemVariants} className="h-[340px] sm:h-[420px] lg:h-full min-h-[480px]">
            <GalleryCard
              item={{ ...featured, aspect: 'aspect-auto' }}
              onCardClick={onCardClick}
            />
          </motion.div>
        )}

        {/* RIGHT — 3 smaller cards stacked vertically */}
        <div className="flex flex-col gap-4 lg:gap-5">
          {smallItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex-1 min-h-[140px]"
            >
              <GalleryCard
                item={{ ...item, aspect: 'aspect-auto' }}
                onCardClick={onCardClick}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CompanyJourney
