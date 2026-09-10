import { Minus, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

function OrderItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const { key, name, image, variantName, price, quantity } = item

  return (
    <motion.div
      className="oo-item"
      layout="position"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Product thumbnail */}
      <div className="oo-item-thumb">
        <img
          src={image}
          alt={`${name} — ${variantName}`}
          loading="lazy"
        />
      </div>

      {/* Item details */}
      <div className="oo-item-details">
        <p className="oo-item-name">{name}</p>
        <span className="oo-item-variant">{variantName}</span>
        <span className="oo-item-unit-price">₹{price} each</span>

        {/* Quantity controls + Remove */}
        <div className="oo-item-actions">
          <div className="oo-item-qty">
            <button
              type="button"
              className="oo-item-qty-btn"
              onClick={() => decreaseQuantity(key)}
              disabled={quantity <= 1}
              aria-label={`Decrease quantity of ${name}`}
            >
              <Minus size={14} />
            </button>
            <span className="oo-item-qty-value" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              className="oo-item-qty-btn"
              onClick={() => increaseQuantity(key)}
              aria-label={`Increase quantity of ${name}`}
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            type="button"
            className="oo-item-remove-btn"
            onClick={() => removeFromCart(key)}
            aria-label={`Remove ${name} from cart`}
          >
            <Trash2 size={13} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Item total */}
      <span className="oo-item-total">₹{price * quantity}</span>
    </motion.div>
  )
}

export default OrderItem
