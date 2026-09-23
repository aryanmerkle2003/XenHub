import { useRef } from 'react'
import iconChevronLeft from '../../assets/images/icon-chevron-left.svg'
import iconChevronRight from '../../assets/images/icon-chevron-right.svg'

export default function ImageCarousel({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 240, behavior: 'smooth' })
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div
        ref={trackRef}
        className="flex w-full gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-[160px] w-[220px] shrink-0 rounded-[10px] object-cover"
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByCard(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-[#e4e4e4] bg-white transition-colors hover:bg-gray-50"
        >
          <img src={iconChevronLeft} alt="" className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByCard(1)}
          className="flex size-9 items-center justify-center rounded-full border border-[#e4e4e4] bg-white transition-colors hover:bg-gray-50"
        >
          <img src={iconChevronRight} alt="" className="size-4" />
        </button>
      </div>
    </div>
  )
}
