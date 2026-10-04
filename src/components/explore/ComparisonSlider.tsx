import { useRef, useState } from 'react'

export default function ComparisonSlider({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel,
}: {
  leftImage: string
  rightImage: string
  leftLabel: string
  rightLabel: string
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const handlePointerUp = () => {
    draggingRef.current = false
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative h-[225px] md:h-[338px] w-full shrink-0 touch-none select-none overflow-hidden rounded-xl shadow-[0px_11px_16px_rgba(31,31,25,0.6)] md:w-[489px]"
    >
      <img
        src={rightImage}
        alt={rightLabel}
        draggable={false}
        className="absolute inset-0 size-full object-cover"
      />
      <img
        src={leftImage}
        alt={leftLabel}
        draggable={false}
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <div
        className="absolute inset-y-0 flex w-9 -translate-x-1/2 items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white" />
        <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md">
          <svg viewBox="0 0 24 24" className="size-3.5 text-black">
            <path
              d="M9 6l-5 6 5 6M15 6l5 6-5 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
