import { motion } from 'framer-motion';
import { useState } from 'react';
import bowl from '../../../assets/images/decor/icecream-bowl.svg';
import dropA from '../../../assets/images/decor/icecream-drop-a.svg';
import dropB from '../../../assets/images/decor/icecream-drop-b.svg';
import dropC from '../../../assets/images/decor/icecream-drop-c.svg';

const D = 2.5;

export default function IceCreamCell({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#f2edf7' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-[22.5%_30.13%]">
        <div className="absolute inset-[-0.35%_-0.37%]">
          <img alt="" className="block size-full max-w-none" src={bowl} />
        </div>
      </div>
      <motion.div
        className="absolute left-[72px] top-[70px] size-[13px] overflow-clip"
        initial={{ opacity: 0, scaleY: 0.82, y: 0 }}
        animate={isHovered ? { opacity: [0, 0, 1, 1, 0, 0], scaleY: [0.82, 0.82, 1.08, 1.18, 1.18], y: [0, 0, 16, 16] } : { opacity: 0, scaleY: 0.82, y: 0 }}
        transition={{
          opacity: { duration: D, times: [0, 0.02, 0.076, 0.72, 0.9, 1], ease: ['linear', 'easeOut', 'linear', 'easeOut', 'linear'] },
          scaleY: { duration: D, times: [0, 0.02, 0.16, 0.9, 1], ease: ['linear', 'easeOut', 'easeIn', 'linear'] },
          y: { duration: D, times: [0, 0.02, 0.9, 1], ease: ['linear', 'easeIn', 'linear'] },
        }}
      >
        <div className="absolute inset-[22.08%_54.17%_32.08%_12.5%]">
          <div className="absolute inset-[-12.59%_-17.31%]">
            <img alt="" className="block size-full max-w-none" src={dropA} />
          </div>
        </div>
        <div className="absolute inset-[12.58%_12.5%_8.21%_37.88%]">
          <div className="absolute inset-[-7.28%_-11.63%]">
            <img alt="" className="block size-full max-w-none" src={dropB} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-[88px] top-[77px] size-[13px] overflow-clip"
        initial={{ opacity: 0, scaleY: 0.82, y: 0 }}
        animate={isHovered ? { opacity: [0, 0, 1, 1, 0, 0], scaleY: [0.82, 0.82, 1.08, 1.18, 1.18], y: [0, 0, 9, 9] } : { opacity: 0, scaleY: 0.82, y: 0 }}
        transition={{
          opacity: { duration: D, times: [0, 0.1, 0.156, 0.8, 0.98, 1], ease: ['linear', 'easeOut', 'linear', 'easeOut', 'linear'] },
          scaleY: { duration: D, times: [0, 0.1, 0.24, 0.98, 1], ease: ['linear', 'easeOut', 'easeIn', 'linear'] },
          y: { duration: D, times: [0, 0.1, 0.98, 1], ease: ['linear', 'easeIn', 'linear'] },
        }}
      >
        <div className="absolute inset-[12.5%_20.83%_8.33%_20.83%]">
          <div className="absolute inset-[-7.29%_-9.89%]">
            <img alt="" className="block size-full max-w-none" src={dropC} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
