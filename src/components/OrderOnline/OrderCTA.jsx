import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

function OrderCTA() {
  const { cartItems, openCart } = useCart()
  const hasItems = cartItems.length > 0

  return (
    <section className="oo-cta" aria-label="Call to action">
      <motion.div
        className="oo-cta-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {hasItems ? (
          <>
            <p className="oo-cta-eyebrow">Almost There</p>
            <h2 className="oo-cta-heading font-display">
              Your Order Is Taking Shape.
            </h2>
            <p className="oo-cta-text">
              Review your selection or continue exploring the collection.
            </p>
            <div className="oo-cta-actions">
              <button
                type="button"
                className="oo-cta-btn-primary font-display"
                onClick={openCart}
              >
                Review Cart
              </button>
              <Link
                to="/products"
                className="oo-cta-btn-secondary font-display"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="oo-cta-eyebrow">Ready to Explore?</p>
            <h2 className="oo-cta-heading font-display">
              Find Your Foodex Favourite.
            </h2>
            <p className="oo-cta-text">
              From traditional namkeen to sweets, cookies and ready-to-eat
              snacks, explore the complete Foodex collection.
            </p>
            <div className="oo-cta-actions">
              <Link
                to="/products"
                className="oo-cta-btn-primary font-display"
              >
                Explore Products
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </section>
  )
}

export default OrderCTA
