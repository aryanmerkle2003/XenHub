import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero.jpg'
import logoMark from '../../assets/images/logo-mark.svg'
import logoWordmark from '../../assets/images/logo-wordmark.svg'

export default function Hero() {
  return (
    <section className="relative flex h-[420px] w-full items-center overflow-clip px-6 py-12 md:h-[560px] md:px-[76px] md:py-16 lg:h-[640px]">
      <div aria-hidden className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040419] via-[#040419]/70 to-transparent" />
      </div>

      <motion.div
        className="relative flex w-full max-w-[640px] flex-col items-start gap-8 md:gap-[50px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2">
          <img src={logoWordmark} alt="" className="h-8 w-auto md:h-[33px]" />
          <img src={logoMark} alt="XEN HUB" className="h-6 w-auto md:h-[23px]" />
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h1 className="text-3xl font-bold leading-tight md:text-[44px] md:leading-[52px]">
            Your destination for
            <br />
            everything XEN.
          </h1>
          <p className="max-w-[573px] text-base leading-normal">
            Discover XEN — a mindset and methodology for problem-solving,
            brought to life through research-driven, design-doing workshops.
            Explore offerings, tools, and resources to help you think like a
            XEN practitioner.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/explore-xen"
              className="flex h-[41px] items-center justify-center gap-2 rounded-lg bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Explore XEN
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex h-[41px] items-center justify-center rounded-lg border border-[#d9d9d9] bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-gray-50"
          >
            Connect with Us
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
