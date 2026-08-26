import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ChevronDown, SlidersHorizontal, Inbox } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard/ProductCard'
import QuickViewModal from '../components/QuickViewModal/QuickViewModal'
import '../styles/products-page.css'

const categories = ['All Products', 'Namkeen', 'Sweets', 'Ready To Eat', 'Cookies & Bakery']

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All Products'

  const initialSearch = searchParams.get('search') || ''
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState('Featured')
  const [activeProduct, setActiveProduct] = useState(null)

  const catalogRef = useRef(null)

  // Sync category and search state if URL parameters change
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      // Decode URI parameter safely
      const decoded = decodeURIComponent(cat)
      if (categories.includes(decoded)) {
        setSelectedCategory(decoded)
      }
    } else {
      setSelectedCategory('All Products')
    }

    // Sync search query from URL (used by global search overlay "View all results")
    const urlSearch = searchParams.get('search')
    if (urlSearch !== null) {
      setSearchQuery(decodeURIComponent(urlSearch))
    }
  }, [searchParams])

  // Update document title for SEO
  useEffect(() => {
    document.title = 'Products Catalog — Foodex India'
  }, [])

  // Handle category selection and update query parameters
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    if (category === 'All Products') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }

  // Scroll to catalog section
  const handleScrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Filter products by category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase()

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredients.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const getMinPrice = (p) => Math.min(...p.variants.map((v) => v.price))
    
    switch (sortBy) {
      case 'Price Low to High':
        return getMinPrice(a) - getMinPrice(b)
      case 'Price High to Low':
        return getMinPrice(b) - getMinPrice(a)
      case 'Name A-Z':
        return a.name.localeCompare(b.name)
      case 'Name Z-A':
        return b.name.localeCompare(a.name)
      case 'Featured':
      default:
        // Featured maps to raw dataset ordering
        return 0
    }
  })

  const handleResetFilters = () => {
    setSearchQuery('')
    handleCategorySelect('All Products')
    setSortBy('Featured')
  }

  return (
    <div className="products-page-container">
      {/* 1. Page Hero Section */}
      <section className="products-hero-section">
        <span className="products-hero-glow-1" aria-hidden="true" />
        <span className="products-hero-glow-2" aria-hidden="true" />
        <div className="products-hero-content">
          <p className="products-hero-kicker">Our Collection</p>
          <h1 className="products-hero-title font-display">Traditional Flavours, Reimagined</h1>
          <p className="products-hero-subtitle">
            Premium Namkeen, Sweets, Cookies &amp; Ready-to-Eat Snacks crafted with authentic taste and trusted quality.
          </p>
          <button
            type="button"
            className="products-hero-button font-display"
            onClick={handleScrollToCatalog}
          >
            Browse Collection
          </button>
        </div>
      </section>

      {/* 2. Controls and Search Bar (Sticky) */}
      <div className="products-controls-bar" ref={catalogRef}>
        <div className="products-controls-container">
          {/* Top Row: Count + Search/Sort */}
          <div className="products-controls-top-row">
            <span className="products-count">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </span>
            <div className="products-controls-actions">
              {/* Search Input */}
              <div className="search-input-wrapper">
                <Search className="search-input-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  className="search-input-field"
                  aria-label="Search products"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sort Dropdown */}
              <div className="sort-select-wrapper">
                <SlidersHorizontal className="sort-select-icon" size={15} />
                <select
                  value={sortBy}
                  className="sort-select-field font-body"
                  aria-label="Sort products"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Featured">Featured</option>
                  <option value="Price Low to High">Price: Low-High</option>
                  <option value="Price High to Low">Price: High-Low</option>
                  <option value="Name A-Z">Name: A-Z</option>
                  <option value="Name Z-A">Name: Z-A</option>
                </select>
                <ChevronDown className="sort-select-arrow" size={14} />
              </div>
            </div>
          </div>

          {/* Second Row: Category Pills */}
          <div className="products-controls-bottom-row">
            <div className="category-pills" role="tablist" aria-label="Product categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="products-grid"
                  className={`category-pill font-display ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Products Grid */}
      <section className="products-grid-section" id="products-grid">
        {sortedProducts.length > 0 ? (
          <div className="products-grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setActiveProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="products-empty-state">
            <Inbox className="products-empty-icon" size={48} />
            <h3 className="products-empty-title font-display">No Products Found</h3>
            <p className="products-empty-text">
              We couldn't find any products matching your search query or selected filters. Try clearing your filters or testing other terms.
            </p>
            <button
              type="button"
              className="products-empty-btn font-display"
              onClick={handleResetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Quick View Overlay Modal */}
      {activeProduct && (
        <QuickViewModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </div>
  )
}

export default ProductsPage
