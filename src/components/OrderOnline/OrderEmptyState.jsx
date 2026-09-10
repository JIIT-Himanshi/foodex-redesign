import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function OrderEmptyState() {
  return (
    <motion.div
      className="oo-empty"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <ShoppingBag size={56} className="oo-empty-icon" />
      <h2 className="oo-empty-heading font-display">Your Cart Is Waiting</h2>
      <p className="oo-empty-subtext">Ready for something delicious?</p>
      <p className="oo-empty-desc">
        Browse the Foodex collection and add your favourites to begin your order.
      </p>
      <Link to="/products" className="oo-empty-btn font-display">
        Browse Products
        <ArrowRight size={15} />
      </Link>
    </motion.div>
  )
}

export default OrderEmptyState
