import { motion, type Variants } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  delay = 0,
  className,
  id,
  style,
}: {
  children?: ReactNode
  delay?: number
  className?: string
  id?: string
  style?: CSSProperties
}) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
