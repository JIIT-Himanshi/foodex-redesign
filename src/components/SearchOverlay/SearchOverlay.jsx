import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ChevronRight, Sparkles, SearchX, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../../data/products'
import '../../styles/search-overlay.css'

const MAX_VISIBLE_RESULTS = 8

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const panelRef = useRef(null)
  const navigate = useNavigate()

  // Filter products based on trimmed, case-insensitive query
  const trimmedQuery = query.trim().toLowerCase()

  const filteredProducts = trimmedQuery
    ? products.filter((product) => {
        const q = trimmedQuery
        return (
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q)
        )
      })
    : []

  const visibleResults = filteredProducts.slice(0, MAX_VISIBLE_RESULTS)
  const hasMoreResults = filteredProducts.length > MAX_VISIBLE_RESULTS

  // Auto-focus input when overlay opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to wait for animation to start
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 80)
      return () => clearTimeout(timer)
    } else {
      setQuery('')
    }
  }, [isOpen])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Handle backdrop click (close if clicked outside panel)
  const handleBackdropClick = useCallback(
    (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose()
      }
    },
    [onClose]
  )

  // Navigate to product detail page
  const handleResultClick = useCallback(
    (productId) => {
      onClose()
      navigate(`/products/${productId}`)
    },
    [onClose, navigate]
  )

  // Navigate to products page with search query
  const handleViewAll = useCallback(() => {
    onClose()
    navigate(`/products?search=${encodeURIComponent(query.trim())}`)
  }, [onClose, navigate, query])

  // Keyboard navigation for result cards
  const handleResultKeyDown = useCallback(
    (e, productId) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleResultClick(productId)
      }
    },
    [handleResultClick]
  )

  // Get price display string
  const getPriceRange = (variants) => {
    const prices = variants.map((v) => v.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    return min === max ? `₹${min}` : `₹${min} – ₹${max}`
  }

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const panelVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 28, stiffness: 350 },
    },
    exit: {
      opacity: 0,
      y: -12,
      scale: 0.98,
      transition: { duration: 0.18, ease: 'easeIn' },
    },
  }

  const resultVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.2, ease: 'easeOut' },
    }),
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-overlay-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          <motion.div
            ref={panelRef}
            className="search-overlay-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="search-overlay-header">
              <div className="search-overlay-top-row">
                <h2 className="search-overlay-title">Search Foodex</h2>
                <button
                  type="button"
                  className="search-overlay-close-btn"
                  onClick={onClose}
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="search-overlay-subtitle">What are you craving today?</p>

              {/* Search Input */}
              <div className="search-overlay-input-wrapper">
                <Search size={18} className="search-overlay-input-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  className="search-overlay-input"
                  placeholder="Search namkeen, sweets & more..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search products"
                  autoComplete="off"
                />
                {query.length > 0 && (
                  <button
                    type="button"
                    className="search-overlay-clear-btn"
                    onClick={() => {
                      setQuery('')
                      inputRef.current?.focus()
                    }}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="search-overlay-divider" />

            {/* Results Area */}
            <div className="search-overlay-results">
              {/* Initial state — no query */}
              {!trimmedQuery && (
                <div className="search-overlay-state">
                  <Sparkles size={36} className="search-overlay-state-icon" />
                  <p className="search-overlay-state-title">Discover Foodex Products</p>
                  <p className="search-overlay-state-text">
                    Start typing to discover namkeen, sweets, cookies & more from our collection.
                  </p>
                </div>
              )}

              {/* No results state */}
              {trimmedQuery && filteredProducts.length === 0 && (
                <div className="search-overlay-state">
                  <SearchX size={36} className="search-overlay-state-icon" />
                  <p className="search-overlay-state-title">No products found</p>
                  <p className="search-overlay-state-text">
                    We couldn't find a product matching "{query.trim()}". Try another name or category.
                  </p>
                </div>
              )}

              {/* Results */}
              {visibleResults.length > 0 && (
                <>
                  <p className="search-results-count">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                  </p>

                  {visibleResults.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="search-result-card"
                      custom={index}
                      variants={resultVariants}
                      initial="hidden"
                      animate="visible"
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${product.name}`}
                      onClick={() => handleResultClick(product.id)}
                      onKeyDown={(e) => handleResultKeyDown(e, product.id)}
                    >
                      <div className="search-result-thumbnail-wrap">
                        <img
                          src={product.frontImage}
                          alt={product.name}
                          className="search-result-thumbnail"
                          loading="lazy"
                        />
                      </div>

                      <div className="search-result-info">
                        <p className="search-result-name">{product.name}</p>
                        <div className="search-result-meta">
                          <span className="search-result-category">{product.category}</span>
                          <span className="search-result-price">{getPriceRange(product.variants)}</span>
                        </div>
                      </div>

                      <ChevronRight size={16} className="search-result-arrow" />
                    </motion.div>
                  ))}

                  {/* View All Results */}
                  {hasMoreResults && (
                    <button
                      type="button"
                      className="search-overlay-view-all"
                      onClick={handleViewAll}
                    >
                      View all {filteredProducts.length} results
                      <ArrowRight size={15} className="search-overlay-view-all-arrow" />
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchOverlay
