import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const { key, name, image, variantName, price, quantity } = item

  return (
    <div className="cart-item">
      {/* Product thumbnail */}
      <div className="cart-item-thumb">
        <img
          src={image}
          alt={`${name} — ${variantName}`}
          loading="lazy"
        />
      </div>

      {/* Item details */}
      <div className="cart-item-info">
        <p className="cart-item-name">{name}</p>
        <span className="cart-item-variant">{variantName}</span>
        <span className="cart-item-price">₹{price * quantity}</span>

        {/* Quantity controls + Remove */}
        <div className="cart-item-actions">
          <div className="cart-item-qty">
            <button
              type="button"
              className="cart-item-qty-btn"
              onClick={() => decreaseQuantity(key)}
              disabled={quantity <= 1}
              aria-label={`Decrease ${name} quantity`}
            >
              <Minus size={14} />
            </button>
            <span className="cart-item-qty-value" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              className="cart-item-qty-btn"
              onClick={() => increaseQuantity(key)}
              aria-label={`Increase ${name} quantity`}
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            type="button"
            className="cart-item-remove-btn"
            onClick={() => removeFromCart(key)}
            aria-label={`Remove ${name} ${variantName} from cart`}
          >
            <Trash2 size={13} />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
