import { motion } from 'framer-motion';
import { useState } from 'react';
import wave1 from '../../../assets/images/decor/coffee-steam1.svg';
import wave2 from '../../../assets/images/decor/coffee-steam2.svg';
import wave3 from '../../../assets/images/decor/coffee-steam3.svg';
import vector from '../../../assets/images/decor/coffee-vector.svg';

const BG = '#f7f2ed';

// sign flips rotate/x wobble between waves
function wave(cls: string, inset: string, src: string, s: 1 | -1, ys: number[], op: number[], rt: number[], isHovered: boolean) {
  const f = (a: number[]) => a.map((v) => v * s);
  return (
    <motion.div
      className={`absolute ${cls}`}
      initial={{ opacity: 1, rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
      animate={isHovered ? {
        opacity: [1, 1, 0, 0, 1, 1],
        rotate: f([0, -2.8, 3, -2.4, 1.5, 1.5, 0, 2.4, -2.6, 1.8, 0]),
        scaleX: [1, 1.07, 0.94, 1.06, 0.96, 0.96, 0.84, 1.05, 0.95, 1.04, 1],
        scaleY: [1, 1.02, 1.05, 1.08, 1.12, 1.12, 0.72, 0.8, 0.88, 0.95, 1],
        x: f([0, 2.5, -2.5, 2, -1.5, -1.5, 0, -2, 2.2, -1.6, 0]),
        y: [0, ys[0], ys[1], ys[2], ys[3], ys[3], 20, 15, 10, 5, 0],
      } : { opacity: 1, rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
      transition={{
        opacity: { duration: 3, times: op, ease: 'linear' },
        rotate: { duration: 3, times: rt, ease: 'linear' },
        scaleX: { duration: 3, times: rt, ease: 'linear' },
        scaleY: { duration: 3, times: rt, ease: 'linear' },
        x: { duration: 3, times: rt, ease: 'linear' },
        y: { duration: 3, times: rt, ease: 'linear' },
      }}
    >
      <div className={`absolute ${inset}`}>
        <img alt="" className="block size-full max-w-none" src={src} />
      </div>
    </motion.div>
  );
}

export default function CoffeeCell({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: BG }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {wave('left-[66.51px] top-[29.51px] h-[15.431px] w-[5.028px]', 'inset-[-1.62%_-4.97%]', wave1, 1, [-13.92, -28.42, -42.92, -58], [0, 0.24, 0.3333, 0.3533, 0.4133, 1], [0, 0.0833, 0.1667, 0.25, 0.3333, 0.3532, 0.3533, 0.515, 0.6767, 0.8383, 1], isHovered)}
      {wave('left-[83.19px] top-[29.51px] h-[15.431px] w-[5.031px]', 'inset-[-1.62%_-4.97%]', wave2, -1, [-14.4, -29.4, -44.4, -60], [0, 0.28, 0.3733, 0.3933, 0.4533, 1], [0, 0.0933, 0.1867, 0.28, 0.3733, 0.3932, 0.3933, 0.545, 0.6967, 0.8483, 1], isHovered)}
      {wave('left-[74.25px] top-[25.87px] h-[18.957px] w-[5.76px]', 'inset-[-1.32%_-4.34%]', wave3, 1, [-14.88, -30.38, -45.88, -62], [0, 0.32, 0.4133, 0.4333, 0.4933, 1], [0, 0.1033, 0.2067, 0.31, 0.4133, 0.4332, 0.4333, 0.575, 0.7167, 0.8583, 1], isHovered)}
      <div className="absolute left-[59.4px] top-[48.8px] h-[51.5px] w-[38.2px] rounded-b-[8px]" style={{ backgroundColor: BG }} />
      <div className="absolute inset-[36.77%_33.33%_20.77%_33.33%]">
        <div className="absolute inset-[-0.45%_-0.44%]">
          <img alt="" className="block size-full max-w-none" src={vector} />
        </div>
      </div>
    </motion.div>
  );
}
