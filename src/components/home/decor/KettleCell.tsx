import { motion } from 'framer-motion';
import vector from '../../../assets/images/decor/kettle-vector.svg';
import smoke1 from '../../../assets/images/decor/kettle-smoke1.svg';
import smoke2 from '../../../assets/images/decor/kettle-smoke2.svg';
import smoke3 from '../../../assets/images/decor/kettle-smoke3.svg';

const D = 3;
const R = { repeat: Infinity };
const bodyScaleT = [0, 0.0533, 0.1067, 0.16, 0.2133, 0.2733, 0.3667, 0.4267, 0.4667, 0.4867, 0.54, 0.5867, 0.76, 0.8267, 0.8733, 1];
const bodyScaleE = ['easeOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeOut', 'easeIn', 'easeOut', 'easeOut', 'easeIn', 'easeOut', 'easeOut', 'easeIn', 'easeOut', 'linear'] as const;

// smoke: [class, opacity peak, opacity tail, t0, t1, t2, t3, x end, y1, y end, x1]
function smoke(cls: string, src: string, p: number, tail: number, a: number, b: number, c: number, d: number, x1: number, x2: number, y1: number, y2: number) {
  return (
    <motion.div
      className={`absolute ${cls}`}
      initial={{ opacity: 0, scaleX: 1, scaleY: 0.75, x: 0, y: 0 }}
      animate={{
        opacity: [0, 0, p, tail, 0, 0],
        scaleX: [1, 1, 1.04, 1.04],
        scaleY: [0.75, 0.75, 0.95, 1.18, 1.18],
        x: [0, 0, x1, x2, x2],
        y: [0, 0, y1, y2, y2],
      }}
      transition={{
        opacity: { duration: D, times: [0, a, b, c, d, 1], ease: ['linear', 'easeOut', 'linear', 'easeIn', 'linear'], ...R },
        scaleX: { duration: D, times: [0, b, d, 1], ease: ['linear', 'easeInOut', 'linear'], ...R },
        scaleY: { duration: D, times: [0, a, b, d, 1], ease: ['linear', 'easeOut', 'easeInOut', 'linear'], ...R },
        x: { duration: D, times: [0, a, b, d, 1], ease: ['linear', 'easeOut', 'easeInOut', 'linear'], ...R },
        y: { duration: D, times: [0, a, b, d, 1], ease: ['linear', 'easeOut', 'easeInOut', 'linear'], ...R },
      }}
    >
      <div className="absolute inset-[-5%_-50%]">
        <img alt="" className="block size-full max-w-none" src={src} />
      </div>
    </motion.div>
  );
}

export default function KettleCell({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`} style={{ backgroundColor: '#edf0fa' }}>
      <motion.div
        className="absolute inset-[22.31%_28.33%_22.69%_29.24%]"
        initial={{ rotate: 0, scaleX: 1, scaleY: 1, y: 0 }}
        animate={{
          rotate: [0, 2.5, -2.2, 1.8, -1.3, 0, 1.2, -1.2, 0, 0.8, -0.8, 0, 0],
          scaleX: [1, 0.985, 1.015, 0.99, 1.01, 1, 0.975, 1.04, 1, 0.985, 1.025, 1, 0.99, 1.015, 1, 1],
          scaleY: [1, 1.015, 0.985, 1.01, 0.99, 1, 1.035, 0.965, 1, 1.02, 0.98, 1, 1.015, 0.985, 1, 1],
          y: [0, 1, -1, 1, -1, 0, -3, 0, -2, 0, -1, 0, 0],
        }}
        transition={{
          rotate: { duration: D, times: [0, 0.0533, 0.1067, 0.16, 0.2133, 0.2733, 0.36, 0.4133, 0.4733, 0.76, 0.8067, 0.8733, 1], ease: ['easeOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'linear'], ...R },
          scaleX: { duration: D, times: bodyScaleT, ease: [...bodyScaleE], ...R },
          scaleY: { duration: D, times: bodyScaleT, ease: [...bodyScaleE], ...R },
          y: { duration: D, times: [0, 0.0533, 0.1067, 0.16, 0.2133, 0.2733, 0.3667, 0.4267, 0.4867, 0.54, 0.76, 0.8267, 1], ease: ['easeOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeOut', 'easeIn', 'easeOut', 'easeIn', 'easeOut', 'easeIn', 'linear'], ...R },
        }}
      >
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={vector} />
      </motion.div>
      <div className="absolute left-[85px] top-[4px] size-[24px]">
        {smoke('inset-[8.33%_45.83%]', smoke2, 0.76, 0.5472, 0.2867, 0.34, 0.5667, 0.66, 0.3, 2, -1.52, -19)}
        {smoke('inset-[8.33%_4.17%_8.33%_87.5%]', smoke3, 0.58, 0.4176, 0.3467, 0.4, 0.6533, 0.7467, -0.15, -1, -1.36, -17)}
        {smoke('inset-[8.33%_87.5%_8.33%_4.17%]', smoke1, 0.64, 0.4608, 0.2267, 0.28, 0.48, 0.5733, -0.3, -2, -1.28, -16)}
      </div>
    </div>
  );
}
