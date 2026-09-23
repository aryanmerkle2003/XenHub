import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function ConnectBanner() {
  return (
    <section id="contact" className="w-full px-6 py-8 md:px-[76px] md:py-[30px]">
      <Reveal>
        <div
          className="flex w-full flex-col items-start justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center md:p-[30px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #0326d1 0%, #462e6c 45%, #e25454 100%)',
          }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white md:text-2xl">
              Have a question?
            </p>
            <p className="text-[13px] leading-[1.65] text-white/85">
              We'd love to hear from you.
            </p>
          </div>
          <motion.a
            href="mailto:xen.core@merkle.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex h-[41px] shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#2f27c8]"
          >
            Email us
            <span aria-hidden>→</span>
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
