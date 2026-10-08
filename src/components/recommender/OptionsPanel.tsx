import { motion } from 'framer-motion'
import type { BlankOption } from '../../data/recommender'

type Props = {
  title: string
  options: BlankOption[]
  onSelect: (option: BlankOption, el: HTMLElement) => void
  hiddenValue?: string
  disabled?: boolean
}

export default function OptionsPanel({
  title,
  options,
  onSelect,
  hiddenValue,
  disabled,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex w-full max-w-[760px] flex-col items-center gap-4 rounded-3xl border border-[#edeff2] bg-white p-8"
    >
      <p className="text-sm font-semibold uppercase text-[#6b7280]">{title}</p>
      <div className="flex w-full flex-wrap justify-center gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={(e) => onSelect(option, e.currentTarget)}
            disabled={disabled}
            style={option.value === hiddenValue ? { visibility: 'hidden' } : undefined}
            className="rounded-[22px] border border-[#e5e7eb] bg-[#fcfcfc] px-5 py-2.5 text-sm font-medium text-[#4b5563] transition-colors hover:border-[#1e1eb5] hover:bg-[#f2f5ff] hover:text-[#1e1eb5]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
