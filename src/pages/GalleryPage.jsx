import { useEffect, useState } from 'react'
import GalleryHero from '../components/Gallery/GalleryHero'
import GalleryStats from '../components/Gallery/GalleryStats'
import SectionNav from '../components/Gallery/SectionNav'
import FeaturedMoments from '../components/Gallery/FeaturedMoments'
import CompanyJourney from '../components/Gallery/CompanyJourney'
import BusinessPartnersMeet from '../components/Gallery/BusinessPartnersMeet'
import ConferencePresentations from '../components/Gallery/ConferencePresentations'
import LeadershipMoments from '../components/Gallery/LeadershipMoments'
import AwardsRecognition from '../components/Gallery/AwardsRecognition'
import AudienceNetworking from '../components/Gallery/AudienceNetworking'
import GalleryCTA from '../components/Gallery/GalleryCTA'
import GalleryLightbox from '../components/Gallery/GalleryLightbox'

import { galleryItems } from '../data/galleryData'
import '../styles/gallery-page.css'

function GalleryPage() {
  const [activeSection, setActiveSection] = useState('featured')
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null)

  useEffect(() => {
    document.title = 'Corporate Gallery & Legacy | Foodex India'
    window.scrollTo(0, 0)
  }, [])

  // Active section scrollspy listener
  useEffect(() => {
    const sectionIds = [
      'featured',
      'journey',
      'business-partners',
      'conference',
      'leadership',
      'awards',
      'audience',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i])
        if (sectionEl) {
          const top = sectionEl.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId)
    const target = document.getElementById(sectionId)
    if (target) {
      const offset = 120
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  const handleOpenLightbox = (item) => {
    const index = galleryItems.findIndex((gItem) => gItem.id === item.id)
    if (index !== -1) {
      setActiveLightboxIndex(index)
    }
  }

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null)
  }

  return (
    <div className="gallery-page-shell flex flex-col min-h-screen pt-[72px]">
      <GalleryHero />
      <GalleryStats />

      {/* Sticky Section Navigation */}
      <SectionNav activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Storytelling Sections */}
      <div className="space-y-4">
        <FeaturedMoments onCardClick={handleOpenLightbox} />
        <CompanyJourney onCardClick={handleOpenLightbox} />
        <BusinessPartnersMeet onCardClick={handleOpenLightbox} />
        <ConferencePresentations onCardClick={handleOpenLightbox} />
        <LeadershipMoments onCardClick={handleOpenLightbox} />
        <AwardsRecognition onCardClick={handleOpenLightbox} />
        <AudienceNetworking onCardClick={handleOpenLightbox} />
      </div>

      <GalleryCTA />

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={galleryItems}
        activeIndex={activeLightboxIndex}
        onClose={handleCloseLightbox}
        onSelectIndex={setActiveLightboxIndex}
      />
    </div>
  )
}

export default GalleryPage
