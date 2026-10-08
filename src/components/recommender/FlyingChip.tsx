import { motion } from 'framer-motion'

export type FlightRect = { left: number; top: number; width: number; height: number }

type Props = {
  label: string
  from: FlightRect
  to: FlightRect
  onComplete: () => void
}

export default function FlyingChip({ label, from, to, onComplete }: Props) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 flex items-center justify-center overflow-hidden whitespace-nowrap border-solid"
      initial={{
        ...from,
        backgroundColor: '#fcfcfc',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        borderRadius: 22,
        color: '#4b5563',
        fontSize: 14,
        fontWeight: 500,
        boxShadow: '0 0 0 rgba(30,30,181,0)',
      }}
      animate={{
        ...to,
        backgroundColor: '#1e1eb5',
        borderColor: '#1e1eb5',
        borderWidth: 2,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 600,
        boxShadow: '0 8px 24px rgba(30,30,181,0.35)',
      }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onComplete}
    >
      {label}
    </motion.div>
  )
}
