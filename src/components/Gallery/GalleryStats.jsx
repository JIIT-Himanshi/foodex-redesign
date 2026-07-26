import { motion } from 'framer-motion'

function GalleryStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl text-gray-300"
      >
        <span className="font-display text-sm font-semibold tracking-wider uppercase text-gray-400">
          Curated Visual Index
        </span>
        <div className="flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
          <span>22 Selected Photographs</span>
          <span className="text-gray-600">•</span>
          <span>7 Editorial Chapters</span>
          <span className="text-gray-600">•</span>
          <span className="text-amber-400 font-semibold">1998 — 2024</span>
        </div>
      </motion.div>
    </section>
  )
}

export default GalleryStats
