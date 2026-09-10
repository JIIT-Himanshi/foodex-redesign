import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import OrderItem from './OrderItem'
import OrderSummary from './OrderSummary'
import OrderEmptyState from './OrderEmptyState'

function OrderReview() {
  const { cartItems } = useCart()
  const isEmpty = cartItems.length === 0

  if (isEmpty) {
    return (
      <section className="oo-review" aria-label="Order review">
        <OrderEmptyState />
      </section>
    )
  }

  return (
    <section className="oo-review" aria-label="Order review">
      <div className="oo-review-inner">
        <div className="oo-review-header">
          <h2 className="oo-review-heading font-display">Review Your Order</h2>
          <p className="oo-review-subtext">
            Check your selected products and quantities before continuing.
          </p>
        </div>

        <div className="oo-review-layout">
          {/* Items Column */}
          <div className="oo-items-column">
            <div className="oo-items-list">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <OrderItem key={item.key} item={item} />
                ))}
              </AnimatePresence>
            </div>

            <Link to="/products" className="oo-continue-shopping">
              <ArrowLeft size={15} />
              Continue Shopping
            </Link>
          </div>

          {/* Summary Column */}
          <OrderSummary />
        </div>
      </div>
    </section>
  )
}

export default OrderReview
