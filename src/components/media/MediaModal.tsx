import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import iconClose from '../../assets/images/media/icon-close.svg'

type MediaModalProps = {
  open: boolean
  onClose: () => void
  title: string
  subtitle: string
  variant: 'sheet' | 'sheet-fit' | 'center'
  children: ReactNode
}

export default function MediaModal({ open, onClose, title, subtitle, variant, children }: MediaModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  const isSheet = variant !== 'center'
  const isFit = variant === 'sheet-fit'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`fixed inset-0 z-50 flex justify-center bg-black/40 px-4 md:px-[100px] ${
            isSheet ? 'items-end pt-[100px]' : 'items-center'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} ${subtitle}`}
            className={`flex w-full max-w-[1400px] flex-col gap-8 bg-white px-6 pt-[50px] md:px-[75px] ${
              isSheet
                ? `${isFit ? 'max-h-full' : 'h-full'} rounded-t-2xl`
                : 'max-h-[90vh] overflow-y-auto rounded-2xl pb-[75px]'
            }`}
            initial={{ opacity: 0, y: isSheet ? 60 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isSheet ? 60 : 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex shrink-0 items-start justify-between">
              <div className="flex flex-col gap-0.5">
                <p className="text-4xl font-bold leading-[normal] text-[#121212]">{title}</p>
                <p className="text-[11px] font-semibold tracking-[1px] text-[#6b7280]">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-[34px] shrink-0 items-center justify-center rounded-lg border border-[#e5e5e9] bg-white transition-colors hover:bg-gray-50"
              >
                <img src={iconClose} alt="" className="size-4" />
              </button>
            </div>
            {isSheet ? (
              <div className={`min-h-0 overflow-y-auto ${isFit ? 'pb-[50px]' : 'flex-1 pb-[75px]'}`}>{children}</div>
            ) : (
              children
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
