import { PackageSearch, ShoppingCart, ClipboardCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Browse',
    desc: 'Explore the Foodex product collection.',
    Icon: PackageSearch,
  },
  {
    number: '02',
    title: 'Add to Cart',
    desc: 'Choose your preferred products and pack sizes.',
    Icon: ShoppingCart,
  },
  {
    number: '03',
    title: 'Review',
    desc: 'Check your items and quantities before proceeding.',
    Icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Checkout',
    desc: 'Continue to the next step to complete your order.',
    Icon: ArrowRight,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

function OrderSteps() {
  return (
    <section className="oo-steps" aria-label="How ordering works">
      <div className="oo-steps-inner">
        <motion.h2
          className="oo-steps-heading font-display"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="oo-steps-subtext"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
        >
          Ordering your Foodex favourites is simple.
        </motion.p>

        <div className="oo-steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="oo-step-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="oo-step-icon">
                <step.Icon size={22} />
              </div>
              <div>
                <span className="oo-step-number">{step.number}</span>
                <h3 className="oo-step-title">{step.title}</h3>
                <p className="oo-step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderSteps
