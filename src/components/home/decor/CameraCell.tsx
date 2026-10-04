import { motion } from 'framer-motion';
import { useState } from 'react';
import vector from '../../../assets/images/decor/camera-vector.svg';
import lensFlash from '../../../assets/images/decor/camera-lens-flash.svg';

const BG = '#f5edf5';

export default function CameraCell({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: BG }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute bottom-[26.89%] left-1/4 right-1/4 top-[26.89%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={vector} />
      </div>
      <motion.div
        className="absolute left-[75px] top-[56px] size-[29px]"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0] } : { opacity: 0 }}
        transition={{
          opacity: {
            duration: 1.966,
            times: [0, 0.2339, 0.234, 0.3154, 0.4171, 0.4984, 0.4985, 0.5799, 0.6816, 1],
            ease: ['linear', 'linear', 'linear', 'easeOut', 'linear', 'linear', 'linear', 'easeOut', 'linear'],
          },
        }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={lensFlash} />
      </motion.div>
      <motion.div
        className="absolute left-[49.75px] top-[35.95px] h-[6px] w-[18px] rounded-[2px]"
        style={{ backgroundColor: BG }}
        initial={{ x: 0, y: -1.954 }}
        animate={isHovered ? { x: [0, 0.25, 0.25], y: [-1.954, 0, 3, 4.046, -1.954, -1.954] } : { x: 0, y: -1.954 }}
        transition={{
          x: { duration: 1.966, times: [0, 0.295, 1], ease: 'linear' },
          y: {
            duration: 1.966,
            times: [0, 0.1729, 0.2238, 0.2248, 0.293, 1],
            ease: ['linear', 'easeOut', 'linear', 'linear', 'linear'],
          },
        }}
      />
    </motion.div>
  );
}
