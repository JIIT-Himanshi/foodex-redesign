import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import '../../styles/cart-drawer.css'

function CartDrawer() {
  const {
    cartItems,
    cartItemCount,
    cartSubtotal,
    isCartOpen,
    closeCart,
  } = useCart()

  const navigate = useNavigate()

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  // Escape key handler
  useEffect(() => {
    if (!isCartOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeCart()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, closeCart])

  const handleExploreProducts = useCallback(() => {
    closeCart()
    navigate('/products')
  }, [closeCart, navigate])

  const handleContinueShopping = useCallback(() => {
    closeCart()
  }, [closeCart])

  const isEmpty = cartItems.length === 0

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="cart-header">
              <div className="cart-header-left">
                <h2 className="cart-header-title">YOUR CART</h2>
                {!isEmpty && (
                  <span className="cart-header-count">
                    {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="cart-close-btn"
                onClick={closeCart}
                aria-label="Close shopping cart"
              >
                <X size={18} />
              </button>
            </div>

            {isEmpty ? (
              /* Empty state */
              <div className="cart-empty-state">
                <ShoppingBag size={52} className="cart-empty-icon" />
                <h3 className="cart-empty-title">Your cart is empty</h3>
                <p className="cart-empty-text">
                  Looks like you haven&apos;t added anything yet.
                </p>
                <button
                  type="button"
                  className="cart-empty-explore-btn"
                  onClick={handleExploreProducts}
                >
                  Explore Products
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <>
                {/* Items list */}
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <CartItem key={item.key} item={item} />
                  ))}
                </div>

                {/* Footer */}
                <div className="cart-footer">
                  <div className="cart-subtotal-row">
                    <span className="cart-subtotal-label">Subtotal</span>
                    <span className="cart-subtotal-value">₹{cartSubtotal}</span>
                  </div>
                  <button
                    type="button"
                    className="cart-checkout-btn font-display"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    type="button"
                    className="cart-continue-btn"
                    onClick={handleContinueShopping}
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
