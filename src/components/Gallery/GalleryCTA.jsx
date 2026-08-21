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
        className="relative overflow-hidden rounded-[32px] p-10 sm:p-16 text-center shadow-[0_18px_50px_rgba(217,4,41,0.18)] dark:shadow-2xl bg-[var(--color-brand-red)] dark:bg-gradient-to-br dark:from-neutral-900 dark:via-black dark:to-neutral-900 border border-black/5 dark:border-white/15"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/70 mb-4 inline-block">
            ENTERPRISE PARTNERSHIPS
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Partner with Foodex India
          </h2>

          <p className="text-base sm:text-xl font-normal text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Join one of India's most resilient and trusted FMCG distribution networks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/distributors"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
              style={{ color: 'var(--color-brand-red)' }}
            >
              <Building2 className="h-4 w-4" />
              Become a Distributor
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/12 hover:border-white/80 hover:-translate-y-0.5"
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
