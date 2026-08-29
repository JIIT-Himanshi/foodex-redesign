import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'foodex-cart'

/**
 * Generates a stable composite key for a cart item.
 * Same product + same variant = same key (merge quantities).
 * Same product + different variant = different key (separate entries).
 */
function makeCartKey(productId, variantName) {
  return `${productId}__${variantName}`
}

/**
 * Safely read cart data from localStorage.
 * Returns an empty array on failure or malformed data.
 */
function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    // Validate each item has required fields
    return parsed.filter(
      (item) =>
        item &&
        typeof item.productId === 'string' &&
        typeof item.variantName === 'string' &&
        typeof item.price === 'number' &&
        typeof item.quantity === 'number' &&
        item.quantity > 0
    )
  } catch {
    return []
  }
}

function saveCartToStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Storage full or unavailable — silently fail
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => loadCartFromStorage())
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Persist to localStorage whenever cartItems changes
  useEffect(() => {
    saveCartToStorage(cartItems)
  }, [cartItems])

  /**
   * Add a product to the cart.
   * If the same product + variant already exists, increment quantity.
   * Otherwise, create a new entry.
   *
   * @param {Object} product — full product object from products.js
   * @param {Object} variant — the selected variant { name, price, mrp? }
   * @param {number} qty — quantity to add (default 1)
   */
  const addToCart = useCallback((product, variant, qty = 1) => {
    const key = makeCartKey(product.id, variant.name)

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === key)

      if (existingIndex !== -1) {
        // Merge: increase quantity
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty,
        }
        return updated
      }

      // New entry
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          image: product.frontImage,
          variantName: variant.name,
          price: variant.price,
          quantity: qty,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((cartItemKey) => {
    setCartItems((prev) => prev.filter((item) => item.key !== cartItemKey))
  }, [])

  const increaseQuantity = useCallback((cartItemKey) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === cartItemKey
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }, [])

  const decreaseQuantity = useCallback((cartItemKey) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === cartItemKey && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }, [])

  const updateQuantity = useCallback((cartItemKey, newQty) => {
    if (newQty < 1) return
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === cartItemKey ? { ...item, quantity: newQty } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const openCart = useCallback(() => {
    setIsCartOpen(true)
  }, [])

  const closeCart = useCallback(() => {
    setIsCartOpen(false)
  }, [])

  // Derived values
  const cartItemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
      cartItemCount,
      cartSubtotal,
      isCartOpen,
      openCart,
      closeCart,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
      cartItemCount,
      cartSubtotal,
      isCartOpen,
      openCart,
      closeCart,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
