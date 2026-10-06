import type { ReactNode } from 'react'

type MediaCardProps = {
  title: string
  count: number
  children: ReactNode
  onOpen?: () => void
  disabled?: boolean
  className?: string
  ariaLabel: string
}

export default function MediaCard({
  title,
  count,
  children,
  onOpen,
  disabled = false,
  className = '',
  ariaLabel,
}: MediaCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex w-full flex-col gap-3 rounded-2xl border border-[#e4e4e4] bg-[#fcfcfc] p-6 text-left transition-shadow ${
        disabled
          ? 'cursor-not-allowed opacity-50 grayscale'
          : 'hover:shadow-[0px_8px_20px_rgba(0,0,0,0.08)]'
      } ${className}`}
    >
      {children}
      <div className="flex w-full items-center justify-between">
        <p className="text-base font-semibold text-[#121212]">{title}</p>
        <p className="text-[13px] text-[#6b7280]">{count}</p>
      </div>
    </button>
  )
}

export function ThumbnailStrip({
  images,
  remaining,
}: {
  images: string[]
  remaining: number
}) {
  return (
    <div className="flex h-[78px] w-full gap-2">
      {images.map((src, i) => {
        const isLast = i === images.length - 1 && remaining > 0
        return (
          <div
            key={i}
            className={`relative h-full min-w-0 flex-1 overflow-hidden rounded-lg ${
              isLast ? '' : 'border-[1.5px] border-[#d6d6df]'
            }`}
          >
            <img src={src} alt="" className="size-full object-cover" />
            {isLast && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xs font-bold text-[#f2f2f4]">
                +{remaining}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
