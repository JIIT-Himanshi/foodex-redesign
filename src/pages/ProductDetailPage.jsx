import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ChevronRight, Plus, Minus, ShoppingCart, 
  Truck, ShieldCheck, Leaf, PackageCheck, 
  Star, Heart
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard/ProductCard'
import QuickViewModal from '../components/QuickViewModal/QuickViewModal'

function ProductDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Find current product in dataset
  const product = products.find((p) => p.id === slug)

  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(null)
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState(null)

  // Initialize and reset states when slug changes
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Foodex India`
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(product.frontImage)
    } else {
      document.title = 'Product Not Found — Foodex India'
    }
  }, [slug, product])

  if (!product) {
    return (
      <div className="products-page-container flex flex-col items-center justify-center text-center py-20 px-4" style={{ minHeight: '80vh' }}>
        <h1 className="text-3xl font-bold font-display text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">The product you are looking for does not exist or may have been removed.</p>
        <Link to="/products" className="products-hero-button font-display">
          Back to Catalog
        </Link>
      </div>
    )
  }

  const { id, name, category, description, ingredients, storage, additionalInfo, variants, stockCount, frontImage, backImage } = product

  const isOutOfStock = stockCount === 0
  const hasBackImage = backImage && frontImage !== backImage

  const handleIncrement = () => {
    const maxQty = isOutOfStock ? 1 : Math.min(stockCount, 99)
    if (quantity < maxQty) {
      setQuantity((prev) => prev + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${name} (${selectedVariant.name}) to cart!`)
  }

  const handleBuyNow = () => {
    alert(`Initiating checkout for ${quantity} x ${name} (${selectedVariant.name})!`)
  }

  // Related products logic
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4)

  if (relatedProducts.length < 4) {
    const extraItems = products
      .filter((p) => p.id !== id && !relatedProducts.some((r) => r.id === p.id))
      .slice(0, 4 - relatedProducts.length)
    relatedProducts.push(...extraItems)
  }

  const discountPercentage = selectedVariant?.mrp && selectedVariant.mrp > selectedVariant.price
    ? Math.round(((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100)
    : 0

  const nutritionData = [
    { label: 'Energy', value: '520 kcal' },
    { label: 'Protein', value: '14 g' },
    { label: 'Total Fat', value: '28 g' },
    { label: 'Carbohydrates', value: '52 g' },
    { label: 'Sugar', value: '2 g' },
  ]

  return (
    <div className="products-page-container">
      <div className="detail-page-container">
        
        {/* Breadcrumbs */}
        <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="detail-breadcrumb-link">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="detail-breadcrumb-link">Products</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${encodeURIComponent(category)}`} className="detail-breadcrumb-link">{category}</Link>
          <ChevronRight size={14} />
          <span className="text-(--color-text-primary) font-semibold" aria-current="page">{name}</span>
        </nav>

        {/* Top Two-Column Layout */}
        <div className="detail-main-layout">
          
          {/* Left: Gallery (Sticky) */}
          <div className="detail-gallery-container">
            <div className="detail-gallery-sticky">
              <div className="detail-gallery-main-wrap">
                <span className="detail-gallery-glow" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    src={activeImage}
                    alt={`${name} featured packaging`}
                    className="detail-gallery-main-image"
                  />
                </AnimatePresence>
              </div>

              {hasBackImage && (
                <div className="detail-gallery-thumbnails">
                  <button
                    type="button"
                    aria-label="View front packaging"
                    className={`detail-gallery-thumbnail ${activeImage === frontImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(frontImage)}
                  >
                    <img src={frontImage} alt="Front thumbnail" />
                  </button>
                  <button
                    type="button"
                    aria-label="View back packaging"
                    className={`detail-gallery-thumbnail ${activeImage === backImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(backImage)}
                  >
                    <img src={backImage} alt="Back thumbnail" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Info and Actions */}
          <div className="detail-info-container">
            <span className="detail-category-badge">{category}</span>
            <h1 className="detail-title-premium font-display">{name}</h1>
            <p className="detail-short-description">{description}</p>

            {/* Price Section */}
            {selectedVariant && (
              <div className="detail-price-section">
                <span className="detail-price-premium">₹{selectedVariant.price}</span>
                {discountPercentage > 0 && (
                  <>
                    <span className="detail-mrp-premium">₹{selectedVariant.mrp}</span>
                    <span className="detail-discount-badge">{discountPercentage}% OFF</span>
                  </>
                )}
              </div>
            )}

            <div className={`detail-stock-row ${isOutOfStock ? 'out-of-stock' : 'in-stock'}`}>
              {isOutOfStock ? 'Out of Stock' : 'In Stock'}
            </div>

            {/* Weight Configuration */}
            <div className="config-group">
              <div className="config-label">Weight Options</div>
              <div className="variant-pills">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    className={`variant-pill-premium ${selectedVariant?.name === v.name ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedVariant(v)
                      setQuantity(1)
                    }}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            {!isOutOfStock && (
              <div className="config-group">
                <div className="config-label">Quantity</div>
                <div className="quantity-adjuster-premium">
                  <button type="button" className="quantity-btn" onClick={handleDecrement} aria-label="Decrease quantity">
                    <Minus size={16} />
                  </button>
                  <span className="quantity-value" aria-live="polite">{quantity}</span>
                  <button type="button" className="quantity-btn" onClick={handleIncrement} aria-label="Increase quantity">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Primary & Secondary Buttons */}
            <div className="detail-action-buttons-vertical">
              <button
                type="button"
                className="btn-add-to-cart font-display"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? 'Sold Out' : 'Add To Cart'}
              </button>
              <button
                type="button"
                className="btn-buy-now font-display"
                onClick={handleBuyNow}
                disabled={isOutOfStock}
              >
                Buy Now
              </button>
            </div>

            {/* Delivery Information Cards */}
            <div className="detail-features-grid">
              <div className="detail-feature-card">
                <Truck size={20} className="feature-icon" />
                <span>Fast Delivery</span>
              </div>
              <div className="detail-feature-card">
                <ShieldCheck size={20} className="feature-icon" />
                <span>Secure Packaging</span>
              </div>
              <div className="detail-feature-card">
                <Leaf size={20} className="feature-icon" />
                <span>100% Vegetarian</span>
              </div>
              <div className="detail-feature-card">
                <PackageCheck size={20} className="feature-icon" />
                <span>Freshly Packed</span>
              </div>
            </div>

            {/* Detailed Info Sections (scrolls naturally) */}
            <div className="detail-info-sections">
              
              <section className="info-section">
                <h3 className="info-heading font-display">Product Highlights</h3>
                <div className="detail-features-grid highlights-grid">
                  <div className="detail-feature-card">
                    <Star size={20} className="feature-icon" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="detail-feature-card">
                    <PackageCheck size={20} className="feature-icon" />
                    <span>Freshly Packed</span>
                  </div>
                  <div className="detail-feature-card">
                    <Heart size={20} className="feature-icon" />
                    <span>Traditional Taste</span>
                  </div>
                  <div className="detail-feature-card">
                    <Leaf size={20} className="feature-icon" />
                    <span>100% Vegetarian</span>
                  </div>
                </div>
              </section>

              <section className="info-section">
                <h3 className="info-heading font-display">Description</h3>
                <p className="info-text">{description}</p>
                {additionalInfo && <p className="info-text mt-2">{additionalInfo}</p>}
              </section>

              <section className="info-section">
                <h3 className="info-heading font-display">Ingredients</h3>
                <p className="info-text">{ingredients}</p>
              </section>

              <section className="info-section">
                <h3 className="info-heading font-display">Nutrition Facts</h3>
                <div className="nutrition-table-container">
                  <table className="nutrition-table">
                    <tbody>
                      {nutritionData.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="info-section">
                <h3 className="info-heading font-display">Storage Instructions</h3>
                <p className="info-text">{storage}</p>
              </section>

            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="related-section" aria-labelledby="related-products-title">
          <h2 id="related-products-title" className="related-title font-display">
            You May Also Like
          </h2>
          <div className="products-grid">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={setActiveQuickViewProduct}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Quick View overlay if active */}
      {activeQuickViewProduct && (
        <QuickViewModal
          product={activeQuickViewProduct}
          onClose={() => setActiveQuickViewProduct(null)}
        />
      )}
    </div>
  )
}

export default ProductDetailPage
