import { Eye, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProductCard({ product, onQuickView }) {
  const { id, name, category, variants, stockCount, frontImage } = product

  const prices = variants.map((v) => v.price)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const isOutOfStock = stockCount === 0

  const renderPrice = () => {
    if (minPrice === maxPrice) {
      const variant = variants[0]
      const hasDiscount = variant.mrp && variant.mrp > variant.price
      return (
        <div className="product-card-price-container">
          {hasDiscount && (
            <span className="product-card-mrp-struck" aria-label={`Original Price ₹${variant.mrp}`}>
              ₹{variant.mrp}
            </span>
          )}
          <span className="product-card-price">₹{minPrice}</span>
        </div>
      )
    }
    return (
      <div className="product-card-price-container">
        <span className="product-card-price">
          ₹{minPrice} - ₹{maxPrice}
        </span>
      </div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="product-card group"
    >
      {/* Quick View Floating Action */}
      <button
        type="button"
        className="product-card-quick-view-btn"
        aria-label={`Quick view ${name}`}
        onClick={() => onQuickView(product)}
      >
        <Eye size={18} />
      </button>

      {/* Image zone */}
      <Link to={`/products/${id}`} className="product-card-image-zone" aria-label={`View details of ${name}`}>
        <span className="product-card-shadow" aria-hidden="true" />
        <span className="product-card-glow" aria-hidden="true" />
        <img
          src={frontImage}
          alt={`Front packaging of ${name}`}
          className="product-card-image"
          loading="lazy"
        />
      </Link>

      {/* Info zone */}
      <div className="product-card-info">
        <span className="product-card-category">{category}</span>
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
          <h3 className="product-card-title font-display hover:text-(--color-brand-red) transition-colors duration-200">
            {name}
          </h3>
        </Link>
        {/* Price */}
        <div className="product-card-bottom-row">
          {renderPrice()}
          <button
            type="button"
            className={`product-card-add-btn ${isOutOfStock ? 'disabled' : ''}`}
            disabled={isOutOfStock}
            aria-label={isOutOfStock ? `${name} is out of stock` : `Add ${name} to cart`}
            onClick={(e) => {
              e.stopPropagation()
              alert(`Added ${name} (${variants[0].name}) to cart!`)
            }}
          >
            {!isOutOfStock && <ShoppingCart size={16} />}
            <span>{isOutOfStock ? 'Sold Out' : '+ Add'}</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard
