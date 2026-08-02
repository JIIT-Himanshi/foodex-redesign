import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function GalleryLightbox({ items, activeIndex, onClose, onSelectIndex }) {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const currentItem = items[activeIndex]
  const totalCount = items.length

  useEffect(() => {
    if (activeIndex === null || !currentItem) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + totalCount) % totalCount)
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % totalCount)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, currentItem, totalCount, onClose, onSelectIndex])

  if (activeIndex === null || !currentItem) return null

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      onSelectIndex((activeIndex + 1) % totalCount)
    } else if (isRightSwipe) {
      onSelectIndex((activeIndex - 1 + totalCount) % totalCount)
    }
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    onSelectIndex((activeIndex - 1 + totalCount) % totalCount)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    onSelectIndex((activeIndex + 1) % totalCount)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-2xl"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header Bar */}
        <div
          className="relative z-10 flex items-center justify-between py-2 px-2 sm:px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-gray-400">
            {String(activeIndex + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:text-white"
            aria-label="Close Lightbox (ESC)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Center Display Area */}
        <div
          className="relative flex-1 flex items-center justify-center py-4 px-10 sm:px-16 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-red-600 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main Image Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[68vh] sm:max-h-[72vh] max-w-full flex items-center justify-center"
            >
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-red-600 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Minimal Bottom Panel & Thumbnail Strip */}
        <div
          className="w-full max-w-4xl mx-auto py-2 px-4 text-center relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
              {currentItem.title}
            </h2>
            {currentItem.year && (
              <span className="text-xs font-mono text-amber-400 mt-1 inline-block">
                [{currentItem.year}]
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-1 max-w-full scrollbar-none">
            {items.map((item, index) => {
              const isSelected = index === activeIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectIndex(index)}
                  className={`relative flex-shrink-0 h-10 w-14 rounded-lg overflow-hidden border transition-all duration-200 ${
                    isSelected
                      ? 'border-red-500 ring-2 ring-red-500/50 scale-105 opacity-100'
                      : 'border-white/20 opacity-40 hover:opacity-80'
                  }`}
                >
                  <img src={item.src} alt="" className="h-full w-full object-cover" />
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GalleryLightbox
