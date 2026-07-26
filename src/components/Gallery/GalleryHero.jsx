import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import heroImg from '../../assets/gallery/director-founder-01.jpg'

function GalleryHero() {
  const scrollToFirstSection = () => {
    const target = document.getElementById('featured')
    if (target) {
      const offset = 100
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Full-Bleed Clear Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Foodex Corporate Legacy Photography"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Minimal gradient overlay to protect text contrast without hiding image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />
      </div>

      {/* Hero Minimal Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center px-4">
        {/* Minimal Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span className="font-display text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
            FOODEX INDIA • VISUAL HERITAGE
          </span>
        </motion.div>

        {/* Minimal Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl leading-none mb-6"
        >
          The Visual Legacy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-xl text-lg font-normal text-gray-200 sm:text-2xl mb-10 text-balance leading-relaxed"
        >
          Twenty-five years of leadership, partnership, and corporate excellence captured in moments.
        </motion.p>

        {/* Minimal Action & Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <button
            type="button"
            onClick={scrollToFirstSection}
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-red-600/40 transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Explore Gallery
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryHero
