import { motion } from 'framer-motion';
import { useState } from 'react';
import left from '../../../assets/images/decor/slippers-left.svg';
import right from '../../../assets/images/decor/slippers-right.svg';

const t1 = [0, 0.0667, 0.14, 0.2167, 0.29, 0.3667, 0.44, 0.5167, 0.59, 0.6667, 0.74, 0.8167, 0.9067, 1];
const e1 = ['linear', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeOut'] as const;
const t2 = [0, 0.0667, 0.2167, 0.29, 0.3667, 0.44, 0.5167, 0.59, 0.6667, 0.74, 0.8167, 0.9067, 1];
const e2 = ['linear', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut', 'easeInOut', 'easeOut'] as const;
const e2y = [...e2.slice(0, 11), 'linear'] as const;

export default function SlippersCell({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#f7edf2' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0, y: 0 }}
        animate={isHovered ? { x: [0, 0, 2, -2, 1, 0, 0, -2, 2, -1, 1, 0], y: [0, 0, -24, -54, -84, -110, -110, 120, 84, 53, 27, 10, 0] } : { x: 0, y: 0 }}
        transition={{
          x: { duration: 3, times: [0, 0.05, 0.15, 0.25, 0.35, 0.4, 0.4467, 0.5733, 0.6933, 0.8067, 0.9067, 1], ease: ['linear', 'linear', 'linear', 'linear', 'easeIn', 'linear', 'linear', 'linear', 'linear', 'linear', 'easeOut'] },
          y: { duration: 3, times: [0, 0.05, 0.15, 0.25, 0.35, 0.4, 0.4466, 0.4467, 0.5733, 0.6933, 0.8067, 0.9067, 1], ease: ['linear', 'linear', 'linear', 'linear', 'easeIn', 'linear', 'linear', 'linear', 'linear', 'linear', 'linear', 'easeOut'] },
        }}
      >
        <motion.div
          className="absolute inset-[22.5%_50.51%_22.5%_29.59%]"
          initial={{ rotate: 0, scaleY: 1, y: 0 }}
          animate={isHovered ? {
            rotate: [0, 0, 9, -5, 9, -5, 9, -5, 9, -5, 9, -5, 9, 0],
            scaleY: [1, 1, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1.06, 1],
            y: [0, 0, -7, 0, -7, 0, -7, 0, -7, 0, -7, 0, -7, 0],
          } : { rotate: 0, scaleY: 1, y: 0 }}
          transition={{ rotate: { duration: 3, times: t1, ease: [...e1] }, scaleY: { duration: 3, times: t1, ease: [...e1] }, y: { duration: 3, times: t1, ease: [...e1] } }}
        >
          <div className="absolute inset-[-0.35%_-0.74%_-0.35%_-0.73%]">
            <img alt="" className="block size-full max-w-none" src={left} />
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-[22.5%_29.59%_22.5%_50.51%]"
          initial={{ rotate: 0, scaleY: 1, y: 0 }}
          animate={isHovered ? {
            rotate: [0, 0, -9, 5, -9, 5, -9, 5, -9, 5, -9, 5, 0],
            scaleY: [1, 1, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1.06, 0.94, 1],
            y: [0, 0, -7, 0, -7, 0, -7, 0, -7, 0, -7, 0, 0],
          } : { rotate: 0, scaleY: 1, y: 0 }}
          transition={{ rotate: { duration: 3, times: t2, ease: [...e2] }, scaleY: { duration: 3, times: t2, ease: [...e2] }, y: { duration: 3, times: t2, ease: [...e2y] } }}
        >
          <div className="absolute inset-[-0.35%_-0.74%]">
            <img alt="" className="block size-full max-w-none" src={right} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
