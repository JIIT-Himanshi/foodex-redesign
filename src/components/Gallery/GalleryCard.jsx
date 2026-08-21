import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Maximize2 } from 'lucide-react'

function GalleryCard({ item, onCardClick, floating = false }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const cardRef = useRef(null)

  // Motion values for 3D mouse tilt perspective
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 25,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 25,
  })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5

    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const floatingAnimation = floating
    ? {
        y: [0, -8, 0],
        transition: {
          duration: 9 + (item.id % 3) * 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {}

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={floatingAnimation}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="gallery-card-shell group relative w-full h-full cursor-pointer overflow-hidden rounded-[28px] border border-white/15 bg-neutral-900/60 shadow-2xl backdrop-blur-md"
      onClick={() => onCardClick(item)}
      role="button"
      tabIndex={0}
      aria-label={`View photograph: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onCardClick(item)
        }
      }}
    >
      <div className={`gallery-card-img-wrap ${item.aspect || 'aspect-[4/3]'} relative w-full h-full overflow-hidden bg-neutral-950`}>
        {/* Shimmer skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 skeleton-shimmer z-0" aria-hidden="true" />
        )}

        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`gallery-card-img w-full h-full ${item.objectPos || 'object-center'} object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-0.5 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Minimal Glass Shine overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 transition-opacity duration-400 group-hover:opacity-90" />

        {/* Floating Top Icon */}
        <div className="absolute top-4 right-4 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-full bg-black/60 p-2.5 text-white/90 backdrop-blur-md border border-white/20 shadow-lg">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>

        {/* Minimal Bottom Caption */}
        <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-1 group-hover:translate-y-0">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug tracking-tight drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default GalleryCard
