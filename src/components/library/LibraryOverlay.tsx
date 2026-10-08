import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { CloseIcon } from '../recommender/icons'
import LibraryContent from './LibraryContent'

export default function LibraryOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pt-12 md:px-[100px] md:pt-[100px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        exit={{ y: 24 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="XENTools Library"
        className="h-full w-full overflow-y-auto rounded-t-2xl bg-white px-6 pt-[60px] md:px-[75px]"
      >
        <LibraryContent
          action={
            <button
              type="button"
              onClick={onClose}
              aria-label="Close XENTools Library"
              className="flex h-8 w-[31px] shrink-0 items-center justify-center rounded-lg border border-[#e5e5e9] bg-white text-[#111827] transition-colors hover:bg-[#f3f4f6]"
            >
              <CloseIcon className="size-4" />
            </button>
          }
        />
      </motion.div>
    </motion.div>
  )
}
