import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'

function OrderSummary() {
  const { cartItemCount, cartSubtotal } = useCart()
  const [showToast, setShowToast] = useState(false)

  const handleCheckout = () => {
    setShowToast(true)
  }

  return (
    <div className="oo-summary-col">
      <div className="oo-summary-card">
        <h3 className="oo-summary-title">Order Summary</h3>

        <div className="oo-summary-row">
          <span className="oo-summary-label">
            Items ({cartItemCount})
          </span>
          <span className="oo-summary-value">₹{cartSubtotal}</span>
        </div>

        <hr className="oo-summary-divider" />

        <div className="oo-summary-total-row">
          <span className="oo-summary-total-label">Total</span>
          <span className="oo-summary-total-value">₹{cartSubtotal}</span>
        </div>

        <button
          type="button"
          className="oo-summary-checkout-btn font-display"
          onClick={handleCheckout}
        >
          Continue to Checkout
        </button>

        <AnimatePresence>
          {showToast && (
            <motion.div
              className="oo-checkout-toast"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
            >
              Checkout experience is coming next.
            </motion.div>
          )}
        </AnimatePresence>

        <p className="oo-summary-note">
          Review your order before continuing.
        </p>
      </div>
    </div>
  )
}

export default OrderSummary
