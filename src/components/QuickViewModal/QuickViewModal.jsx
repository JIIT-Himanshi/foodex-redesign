import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Plus, Minus, ShoppingCart, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function QuickViewModal({ product, onClose }) {
  if (!product) return null

  const { id, name, category, description, variants, stockCount, frontImage, backImage } = product
  const navigate = useNavigate()

  const [selectedVariant, setSelectedVariant] = useState(variants[0])
  const [quantity, setQuantity] = useState(1)
  const [showBackImage, setShowBackImage] = useState(false)

  // Reset local state when product changes
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setShowBackImage(false)
    }
  }, [product])

  const hasBackImage = backImage && frontImage !== backImage
  const currentImage = showBackImage && hasBackImage ? backImage : frontImage
  const isOutOfStock = stockCount === 0

  const handleIncrement = () => {
    // Cap quantity at stockCount or 99
    const maxQty = isOutOfStock ? 1 : Math.min(stockCount, 99)
    if (quantity < maxQty) {
      setQuantity(prev => prev + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${name} (${selectedVariant.name}) to cart!`)
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="quickview-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="quickview-modal-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            className="quickview-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Left Gallery Section */}
          <div className="quickview-gallery-side">
            <span className="quickview-gallery-glow" aria-hidden="true" />
            <div className="quickview-image-container">
              <img
                src={currentImage}
                alt={`${name} pack`}
                className="quickview-main-image"
              />
            </div>

            {hasBackImage && (
              <button
                type="button"
                className="quickview-toggle-btn"
                onClick={() => setShowBackImage(!showBackImage)}
              >
                <span>{showBackImage ? 'View Front Pack' : 'View Back Pack'}</span>
              </button>
            )}
          </div>

          {/* Right Info Section */}
          <div className="quickview-info-side">
            <span className="quickview-category">{category}</span>
            <h2 className="quickview-title font-display">{name}</h2>

            <div className="quickview-price-row">
              <span className="quickview-price">₹{selectedVariant.price}</span>
              {selectedVariant.mrp && selectedVariant.mrp > selectedVariant.price && (
                <span className="quickview-mrp">MRP ₹{selectedVariant.mrp}</span>
              )}
            </div>

            <div
              className={`quickview-stock-tag ${
                isOutOfStock ? 'out-of-stock' : 'in-stock'
              }`}
            >
              {isOutOfStock ? 'Out of Stock' : `${stockCount} In Stock`}
            </div>

            <p className="quickview-description">{description}</p>

            {/* Config: Weight variants */}
            <div className="config-group">
              <div className="config-label">Weight Options</div>
              <div className="variant-pills">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    className={`variant-pill ${
                      selectedVariant.name === v.name ? 'active' : ''
                    }`}
                    onClick={() => {
                      setSelectedVariant(v)
                      setQuantity(1) // Reset quantity to 1 when variant changes
                    }}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Config: Quantity Selector */}
            {!isOutOfStock && (
              <div className="config-group">
                <div className="config-label">Quantity</div>
                <div className="quantity-adjuster">
                  <button
                    type="button"
                    className="quantity-btn"
                    onClick={handleDecrement}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="quantity-value" aria-live="polite">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="quantity-btn"
                    onClick={handleIncrement}
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="quickview-actions">
              <button
                type="button"
                className="quickview-add-btn font-display"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="quickview-detail-link"
                onClick={() => {
                  onClose()
                  setTimeout(() => navigate(`/products/${id}`), 0)
                }}
              >
                View Full Details →
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default QuickViewModal
