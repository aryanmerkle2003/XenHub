import type { Ref } from 'react'
import { CloseIcon } from './icons'

export const pillBase =
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-[22px] px-6 py-2.5 text-[20px] transition-colors'

export const filledPillClasses =
  'border-2 border-[#1e1eb5] bg-[#1e1eb5] font-semibold text-white'

type PillProps = {
  pillRef: Ref<HTMLSpanElement>
  placeholder: string
  label?: string
  active: boolean
  onClear: () => void
}

function Pill({ pillRef, placeholder, label, active, onClear }: PillProps) {
  if (label) {
    return (
      <span
        ref={pillRef}
        className={`${pillBase} group ${filledPillClasses}`}
      >
        {label}
        <button
          type="button"
          onClick={onClear}
          aria-label={`Remove ${label}`}
          className="absolute right-1.5 top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-transparent transition-colors group-hover:bg-white/25 group-hover:text-white focus-visible:bg-white/25 focus-visible:text-white"
        >
          <CloseIcon className="size-2.5" strokeWidth={3} />
        </button>
      </span>
    )
  }

  return (
    <span
      ref={pillRef}
      className={`${pillBase} ${
        active
          ? 'border-2 border-dashed border-[#1e1eb5] bg-[#f2f5ff] font-semibold text-[#1e1eb5]'
          : 'border border-[#e5e7eb] bg-white font-medium text-[#6b7280]'
      }`}
    >
      {placeholder}
    </span>
  )
}

type Props = {
  focusRef: Ref<HTMLSpanElement>
  outcomeRef: Ref<HTMLSpanElement>
  sentenceParts: string[]
  focusPlaceholder: string
  outcomePlaceholder: string
  focusLabel?: string
  outcomeLabel?: string
  onClearFocus: () => void
  onClearOutcome: () => void
}

export default function SentencePicker({
  focusRef,
  outcomeRef,
  sentenceParts,
  focusPlaceholder,
  outcomePlaceholder,
  focusLabel,
  outcomeLabel,
  onClearFocus,
  onClearOutcome,
}: Props) {
  const textClass = 'text-[24px] font-medium text-[#111827]'

  return (
    <div className="flex min-h-[56px] flex-wrap items-center justify-center gap-x-3.5 gap-y-3">
      <p className={textClass}>{sentenceParts[0]}</p>
      <Pill
        pillRef={focusRef}
        placeholder={focusPlaceholder}
        label={focusLabel}
        active={!focusLabel}
        onClear={onClearFocus}
      />
      <p className={textClass}>{sentenceParts[1]}</p>
      <Pill
        pillRef={outcomeRef}
        placeholder={outcomePlaceholder}
        label={outcomeLabel}
        active={!!focusLabel && !outcomeLabel}
        onClear={onClearOutcome}
      />
    </div>
  )
}
