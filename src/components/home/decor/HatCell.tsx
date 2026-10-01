import { motion } from 'framer-motion';
import frameLeft from '../../../assets/images/decor/hat-frame-left.svg';
import v0 from '../../../assets/images/decor/hat-v0.svg';
import v1 from '../../../assets/images/decor/hat-v1.svg';
import v2 from '../../../assets/images/decor/hat-v2.svg';
import crownTop from '../../../assets/images/decor/hat-crown-top.svg';
import brim from '../../../assets/images/decor/hat-brim.svg';
import outline from '../../../assets/images/decor/hat-outline.svg';

const BG = '#f2edf5';
const loop = { duration: 3, repeat: Infinity } as const;
const pop = [0.45, 1.45, 0.8, 1] as const;

const fill = 'absolute block size-full max-w-none';

export default function HatCell({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: BG }}
    >
      <motion.div
        className="absolute size-[33px]"
        style={{ left: 64.5, top: 53 }}
        initial={{ rotate: -22, x: 0, y: 0 }}
        animate={{
          rotate: [-22, -22, -17, -24, -22, -22, -25, -22, -22],
          x: [0, 0, -16, -14, -14, 0, 0],
          y: [0, 0, -42, -38, -38, 0, 0],
        }}
        transition={{
          rotate: { ...loop, times: [0, 0.0833, 0.2833, 0.35, 0.4167, 0.5833, 0.8167, 0.8833, 1], ease: ['linear', 'easeOut', 'easeInOut', 'easeInOut', 'linear', 'easeIn', 'easeOut', 'linear'] },
          x: { ...loop, times: [0, 0.0833, 0.3, 0.3733, 0.6067, 0.85, 1], ease: ['linear', pop, 'easeOut', 'linear', 'easeIn', 'linear'] },
          y: { ...loop, times: [0, 0.0833, 0.3, 0.3733, 0.6067, 0.85, 1], ease: ['linear', pop, 'easeOut', 'linear', 'easeIn', 'linear'] },
        }}
      >
        <img alt="" className={fill} src={frameLeft} />
      </motion.div>
      <motion.div
        className="absolute size-[33px] overflow-clip"
        style={{ left: 71.5, top: 45.1 }}
        initial={{ rotate: 22, x: 0, y: 0 }}
        animate={{
          rotate: [22, 22, 17, 24, 22, 22, 25, 22, 22],
          x: [0, 0, 20, 18, 18, 0, 0],
          y: [0, 0, -34, -30, -30, 0, 0],
        }}
        transition={{
          rotate: { ...loop, times: [0, 0.1333, 0.3333, 0.4, 0.4667, 0.6333, 0.8667, 0.9333, 1], ease: ['linear', 'easeOut', 'easeInOut', 'easeInOut', 'linear', 'easeIn', 'easeOut', 'linear'] },
          x: { ...loop, times: [0, 0.1333, 0.35, 0.4267, 0.66, 0.9, 1], ease: ['linear', pop, 'easeOut', 'linear', 'easeIn', 'linear'] },
          y: { ...loop, times: [0, 0.1333, 0.35, 0.4267, 0.66, 0.9, 1], ease: ['linear', pop, 'easeOut', 'linear', 'easeIn', 'linear'] },
        }}
      >
        <div className="absolute inset-[11.74%_12.5%_12.5%_12.46%]">
          <div className="absolute inset-[-4%_-4.04%]"><img alt="" className="block size-full max-w-none" src={v0} /></div>
        </div>
        <div className="absolute inset-[58.33%_66.67%_39.58%_33.33%]">
          <div className="absolute" style={{ inset: '-145.45% -1px' }}><img alt="" className="block size-full max-w-none" src={v1} /></div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_39.58%_66.67%]">
          <div className="absolute" style={{ inset: '-145.45% -1px' }}><img alt="" className="block size-full max-w-none" src={v1} /></div>
        </div>
        <div className="absolute inset-[67.71%_46.88%_29.17%_46.88%]">
          <div className="absolute inset-[-96.97%_-48.49%]"><img alt="" className="block size-full max-w-none" src={v2} /></div>
        </div>
      </motion.div>
      <div className="absolute h-[14px] w-[44px]" style={{ left: 63, top: 39 }}>
        <img alt="" className={fill} src={crownTop} />
      </div>
      <div className="absolute h-[25px] w-[44px]" style={{ left: 63, top: 46, backgroundColor: BG }} />
      <div className="absolute h-[21px] w-[80px]" style={{ left: 45, top: 68 }}>
        <img alt="" className={fill} src={brim} />
      </div>
      <div className="absolute inset-x-1/4 inset-y-[28.76%]">
        <img alt="" className={fill} src={outline} />
      </div>
    </div>
  );
}
