import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2 } from 'lucide-react'

function GalleryCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 p-10 sm:p-16 text-center backdrop-blur-2xl shadow-2xl"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-500 mb-4 inline-block">
            ENTERPRISE PARTNERSHIPS
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Partner with Foodex India
          </h2>

          <p className="text-base sm:text-xl font-normal text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Join one of India’s most resilient and trusted FMCG distribution networks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/distributors"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              <Building2 className="h-4 w-4" />
              Become a Distributor
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default GalleryCTA
