import { motion } from 'framer-motion'

function GalleryStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="gallery-index-container flex flex-wrap items-center justify-between gap-6 rounded-2xl px-8 py-5"
      >
        <span className="gallery-index-label font-display text-sm font-semibold tracking-wider uppercase">
          Curated Visual Index
        </span>
        <div className="gallery-index-text flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
          <span>22 Selected Photographs</span>
          <span className="opacity-40">•</span>
          <span>7 Editorial Chapters</span>
          <span className="opacity-40">•</span>
          <span className="text-(--color-brand-red) font-semibold">1998 — 2024</span>
        </div>
      </motion.div>
    </section>
  )
}

export default GalleryStats
