import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Plus, Minus, ShoppingCart, ArrowLeft, Heart, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard/ProductCard'
import QuickViewModal from '../components/QuickViewModal/QuickViewModal'

const tabs = ['Description', 'Ingredients', 'Storage Information', 'Additional Information']

function ProductDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Find current product in dataset
  const product = products.find((p) => p.id === slug)

  // Subpages states
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(null)
  const [activeTab, setActiveTab] = useState('Description')
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState(null)

  // Initialize and reset states when slug changes
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Foodex India`
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(product.frontImage)
      setActiveTab('Description')
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

  const { name, category, description, ingredients, storage, additionalInfo, variants, stockCount, frontImage, backImage } = product

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

  // Get 4 related products of the same category (excluding current)
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4)

  // Fallback to other categories if less than 4 related items found
  if (relatedProducts.length < 4) {
    const extraItems = products
      .filter((p) => p.id !== id && !relatedProducts.some((r) => r.id === p.id))
      .slice(0, 4 - relatedProducts.length)
    relatedProducts.push(...extraItems)
  }

  // Helper to get raw database ID (maps to current slug)
  const id = product.id

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Ingredients':
        return <p>{ingredients}</p>
      case 'Storage Information':
        return <p>{storage}</p>
      case 'Additional Information':
        return <p>{additionalInfo}</p>
      case 'Description':
      default:
        return <p>{description}</p>
    }
  }

  return (
    <div className="products-page-container">
      <div className="detail-page-container">
        {/* Breadcrumbs */}
        <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="detail-breadcrumb-link">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/products" className="detail-breadcrumb-link">
            Products
          </Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${encodeURIComponent(category)}`} className="detail-breadcrumb-link">
            {category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-(--color-text-primary) font-semibold" aria-current="page">
            {name}
          </span>
        </nav>

        {/* Two-Column split details layout */}
        <div className="detail-main-layout">
          {/* Left Column: Image Gallery */}
          <div className="detail-gallery-container">
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

            {/* Thumbnails */}
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

          {/* Right Column: Information panel */}
          <div className="detail-info-container">
            <span className="detail-category-badge">{category}</span>
            <h1 className="detail-title font-display">{name}</h1>

            {selectedVariant && (
              <div className="detail-price-row">
                <span className="detail-price">₹{selectedVariant.price}</span>
                {selectedVariant.mrp && selectedVariant.mrp > selectedVariant.price && (
                  <span className="detail-mrp">MRP ₹{selectedVariant.mrp}</span>
                )}
              </div>
            )}

            <div
              className={`detail-stock-row ${
                isOutOfStock ? 'out-of-stock' : 'in-stock'
              }`}
            >
              {isOutOfStock ? 'Out of Stock' : `${stockCount} In Stock`}
            </div>

            <p className="detail-description">{description}</p>

            {/* Weight configuration */}
            <div className="config-group">
              <div className="config-label">Weight Options</div>
              <div className="variant-pills">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    className={`variant-pill ${
                      selectedVariant?.name === v.name ? 'active' : ''
                    }`}
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

            {/* Quantity configuration */}
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

            {/* Subpages actions */}
            <div className="detail-action-buttons">
              <button
                type="button"
                className="detail-add-btn font-display"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="detail-buy-btn font-display"
                onClick={handleBuyNow}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? 'Out of Stock' : 'Buy Now'}
              </button>
            </div>
          </div>
        </div>

        {/* Tab accordions */}
        <section className="detail-tabs-section" aria-label="Product specifications">
          <div className="detail-tabs-header" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="detail-tab-panel"
                className={`detail-tab-trigger font-display ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            id="detail-tab-panel"
            role="tabpanel"
            className="detail-tab-content"
          >
            {renderTabContent()}
          </div>
        </section>

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
