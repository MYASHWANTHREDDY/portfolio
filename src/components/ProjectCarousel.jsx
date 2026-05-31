import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function ProjectCarousel({ screenshots }) {
  const [idx, setIdx] = useState(0)

  if (!screenshots?.length) return null

  const prev = () => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length)
  const next = () => setIdx((i) => (i + 1) % screenshots.length)

  return (
    <div className="mb-5">
      <div className="relative rounded-xl overflow-hidden border border-border group/carousel">
        {/* Image */}
        <a href={screenshots[idx]} target="_blank" rel="noopener noreferrer">
          <img
            src={screenshots[idx]}
            alt={`Screenshot ${idx + 1}`}
            className="w-full h-48 object-cover object-top transition-opacity duration-300"
          />
          {/* View hint */}
          <div className="absolute inset-0 bg-black/0 group-hover/carousel:bg-black/20 transition-all duration-200 flex items-center justify-center">
            <span className="text-white text-xs font-medium opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-black/60 px-3 py-1 rounded-full">
              Click to view full size
            </span>
          </div>
        </a>

        {/* Prev / Next arrows — only show if more than 1 image */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100"
              aria-label="Previous screenshot"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100"
              aria-label="Next screenshot"
            >
              <FiChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === idx ? 'bg-accent w-4' : 'bg-border hover:bg-textSecondary'
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
