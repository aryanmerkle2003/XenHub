import { motion } from 'framer-motion';
import unionRight from '../../../assets/images/decor/tape-union-right.svg';
import unionLeft from '../../../assets/images/decor/tape-union-left.svg';
import v0 from '../../../assets/images/decor/tape-v0.svg';
import v1 from '../../../assets/images/decor/tape-v1.svg';
import v2 from '../../../assets/images/decor/tape-v2.svg';
import v3 from '../../../assets/images/decor/tape-v3.svg';
import v4 from '../../../assets/images/decor/tape-v4.svg';
import v5 from '../../../assets/images/decor/tape-v5.svg';
import v6 from '../../../assets/images/decor/tape-v6.svg';
import v7 from '../../../assets/images/decor/tape-v7.svg';

const spin = { duration: 2, ease: 'linear', repeat: Infinity } as const;
const hold = { rotate: { ...spin, times: [0, 0.25, 1] } };

const STATIC = [
  ['inset-[30%_28.65%_30.77%_28.65%]', v0],
  ['inset-[43.85%_35.67%_44.62%_35.09%]', v1],
  ['inset-[48.46%_47.37%_49.23%_47.37%]', v2],
  ['inset-[60%_41.52%_37.69%_40.94%]', v3],
] as const;

const REELS = [
  ['inset-[33.08%_67.25%_64.62%_30.99%]', v4],
  ['inset-[33.08%_31.29%_64.62%_66.96%]', v5],
  ['inset-[63.85%_67.25%_33.85%_30.99%]', v6],
  ['inset-[63.85%_31.29%_33.85%_66.96%]', v7],
] as const;

export default function CassetteCell({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#f0f7f7' }}
    >
      {STATIC.map(([pos, src]) => (
        <div key={pos} className={`absolute ${pos}`}>
          <img alt="" className="absolute block size-full max-w-none" src={src} />
        </div>
      ))}
      {REELS.map(([pos, src]) => (
        <motion.div
          key={pos}
          className={`absolute ${pos}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 0, 360] }}
          transition={hold}
        >
          <img alt="" className="absolute block size-full max-w-none" src={src} />
        </motion.div>
      ))}
      <motion.div
        className="absolute size-[13px]"
        style={{ left: 96, top: 58 }}
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{ rotate: { ...spin, times: [0, 1] } }}
      >
        <img alt="" className="absolute block size-full max-w-none" src={unionRight} />
      </motion.div>
      <motion.div
        className="absolute size-[13px]"
        style={{ left: 61, top: 58 }}
        initial={{ rotate: 180 }}
        animate={{ rotate: [180, 540] }}
        transition={{ rotate: { ...spin, times: [0, 1] } }}
      >
        <img alt="" className="absolute block size-full max-w-none -scale-x-100" src={unionLeft} />
      </motion.div>
    </div>
  );
}
