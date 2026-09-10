import { Award, Layers, SlidersHorizontal, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const trustItems = [
  {
    Icon: Award,
    title: 'Quality Products',
    desc: 'Carefully presented Foodex product range.',
  },
  {
    Icon: Layers,
    title: 'Multiple Pack Options',
    desc: 'Choose from available product variants.',
  },
  {
    Icon: SlidersHorizontal,
    title: 'Easy Cart Management',
    desc: 'Update quantities anytime before checkout.',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Ordering',
    desc: 'Browse and manage your order across devices.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

function OrderTrustStrip() {
  return (
    <section className="oo-trust" aria-label="Ordering assurance">
      <div className="oo-trust-inner">
        <div className="oo-trust-grid">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="oo-trust-item"
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="oo-trust-icon">
                <item.Icon size={20} />
              </div>
              <div>
                <h3 className="oo-trust-title">{item.title}</h3>
                <p className="oo-trust-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderTrustStrip
