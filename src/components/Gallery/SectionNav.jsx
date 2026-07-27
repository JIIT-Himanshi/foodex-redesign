import { gallerySectionsInfo } from '../../data/galleryData'

function SectionNav({ activeSection, onSelectSection }) {
  return (
    <div className="sticky top-20 z-40 my-6 flex justify-center px-4">
      <div className="gallery-floating-nav flex items-center gap-1 overflow-x-auto max-w-full rounded-full p-1.5 scrollbar-none">
        {gallerySectionsInfo.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelectSection(section.id)}
              className={`gallery-floating-nav-btn whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-wide ${
                isActive ? 'active' : ''
              }`}
            >
              <span className="opacity-60 mr-1.5">{section.number}</span>
              {section.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SectionNav
