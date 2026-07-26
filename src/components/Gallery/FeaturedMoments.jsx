import { motion } from 'framer-motion'
import GalleryCard from './GalleryCard'
import { galleryItems } from '../../data/galleryData'

function FeaturedMoments({ onCardClick }) {
  const featuredItems = galleryItems.filter((item) => item.sectionId === 'featured')

  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-32">
      {/* Minimal Editorial Section Header */}
      <div className="mb-12 flex items-baseline justify-between border-b border-white/10 pb-6">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          <span className="text-red-500 mr-4 font-mono text-2xl sm:text-4xl">01</span>
          Flagship Moments
        </h2>
        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden sm:inline">
          [ 03 PHOTOGRAPHS ]
        </span>
      </div>

      {/* Editorial Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Large Flagship Hero Card (Span 7) */}
        {featuredItems[0] && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex"
          >
            <GalleryCard item={featuredItems[0]} onCardClick={onCardClick} floating={true} />
          </motion.div>
        )}

        {/* 2 Flagship Secondary Cards (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {featuredItems.slice(1, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1"
            >
              <GalleryCard item={item} onCardClick={onCardClick} floating={true} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedMoments
