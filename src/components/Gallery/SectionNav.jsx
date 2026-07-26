import { gallerySectionsInfo } from '../../data/galleryData'

function SectionNav({ activeSection, onSelectSection }) {
  return (
    <div className="sticky top-20 z-40 my-6 flex justify-center px-4">
      <div className="flex items-center gap-1 overflow-x-auto max-w-full rounded-full border border-white/15 bg-black/50 p-1.5 backdrop-blur-2xl shadow-2xl scrollbar-none">
        {gallerySectionsInfo.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelectSection(section.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
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
