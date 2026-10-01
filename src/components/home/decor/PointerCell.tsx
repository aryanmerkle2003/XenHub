import { motion } from 'framer-motion';
import hand from '../../../assets/images/decor/pointer-hand.svg';
import dart from '../../../assets/images/decor/pointer-dart.svg';

export default function PointerCell({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#edf5f7' }}
    >
      <motion.div
        className="absolute left-[49px] top-[33px] h-[64px] w-[71px]"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 0, -45, 0, 0] }}
        transition={{
          rotate: {
            duration: 2,
            times: [0, 0.3, 0.55, 0.8, 1],
            ease: ['linear', [0.25, 0.1, 0.25, 1], [0.25, 0.1, 0.25, 1], 'linear'],
            repeat: Infinity,
          },
        }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={hand} />
      </motion.div>
      <motion.div
        className="absolute left-[123px] top-[51px] flex h-[22px] w-[24px] items-center justify-center"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: [0, 0, 1, 1], x: [0, 0, 80, 80] }}
        transition={{
          opacity: { duration: 2, times: [0, 0.2999, 0.3, 1], ease: 'linear', repeat: Infinity },
          x: {
            duration: 2,
            times: [0, 0.3, 0.75, 1],
            ease: ['linear', [0.15, 0, 0.7, 1], 'linear'],
            repeat: Infinity,
          },
        }}
      >
        <div className="h-[24px] w-[22px] shrink-0 rotate-90">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={dart} />
        </div>
      </motion.div>
    </div>
  );
}
