import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

function OrderHero() {
  const { cartItemCount, openCart } = useCart()

  return (
    <section className="oo-hero" aria-label="Order Online hero">
      <span className="oo-hero-glow-1" aria-hidden="true" />
      <span className="oo-hero-glow-2" aria-hidden="true" />

      <motion.div
        className="oo-hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="oo-hero-eyebrow">Order Online</p>
        <h1 className="oo-hero-heading">
          Your Foodex Favourites,
          <br />
          Just a Few Steps Away.
        </h1>
        <p className="oo-hero-subtext">
          Browse your favourite Foodex products, build your cart and review your
          selection before continuing with your order.
        </p>
        <div className="oo-hero-actions">
          <Link to="/products" className="oo-hero-btn-primary font-display">
            Browse Products
          </Link>
          <button
            type="button"
            className="oo-hero-btn-secondary font-display"
            onClick={openCart}
            aria-label={`View shopping cart with ${cartItemCount} items`}
          >
            <ShoppingBag size={16} />
            View My Cart
            {cartItemCount > 0 && (
              <span className="oo-hero-cart-count">{cartItemCount}</span>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default OrderHero
