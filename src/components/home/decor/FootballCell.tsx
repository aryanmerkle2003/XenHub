import { motion } from 'framer-motion';
import vector from '../../../assets/images/decor/football-vector.svg';

const BG = '#f5f0f7';
const D = 3;
const xs = [0, 42, 122, 122, -126, -76, -30, -10, 0, 0];
const ys = [0, -16, 20, 20, -18, 20, -7, 0, 0];
const xT = [0, 0.1267, 0.2833, 0.3399, 0.34, 0.4933, 0.65, 0.7833, 0.9167, 1];
const yT = [0, 0.1267, 0.2833, 0.34, 0.4933, 0.65, 0.7833, 0.9167, 1];
const xE = ['easeOut', 'easeIn', 'linear', 'linear', 'easeOut', 'easeIn', 'easeOut', 'easeIn', 'linear'] as const;
const yE = ['easeOut', 'easeIn', 'linear', 'easeOut', 'easeIn', 'easeOut', 'easeIn', 'linear'] as const;
const opE = ['linear', 'easeOut', 'linear', 'easeIn', 'linear', 'easeOut', 'linear', 'easeIn', 'linear', 'easeOut', 'linear', 'easeIn', 'linear'] as const;
const R = { repeat: Infinity };

const lines = [
  { cls: 'left-[42.85px] top-[75.25px] h-[2px] w-[12px] rounded-[1px]', op: [0, 0, 0.44, 0.3872, 0, 0, 0.44, 0.3608, 0, 0, 0.352, 0.2288, 0, 0], t: [0, 0.05, 0.08, 0.2567, 0.3067, 0.39, 0.4233, 0.65, 0.7433, 0.7567, 0.79, 0.8967, 0.9333, 1] },
  { cls: 'left-[38.85px] top-[63.25px] h-[2px] w-[18px] rounded-[1px]', op: [0, 0, 0.56, 0.4928, 0, 0, 0.56, 0.4592, 0, 0, 0.448, 0.2912, 0, 0], t: [0, 0.0383, 0.0683, 0.245, 0.3067, 0.3783, 0.4117, 0.6383, 0.7317, 0.745, 0.7783, 0.885, 0.9333, 1] },
  { cls: 'left-[34.85px] top-[51.25px] h-[2.5px] w-[24px] rounded-[1.25px]', op: [0, 0, 0.7, 0.616, 0, 0, 0.7, 0.574, 0, 0, 0.56, 0.364, 0, 0], t: [0, 0.0267, 0.0567, 0.2333, 0.3067, 0.3667, 0.4, 0.6267, 0.72, 0.7333, 0.7667, 0.8733, 0.9333, 1] },
];

export default function FootballCell({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`} style={{ backgroundColor: BG }}>
      {lines.map((l) => (
        <motion.div
          key={l.cls}
          className={`absolute ${l.cls}`}
          style={{ backgroundColor: BG }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: l.op, x: xs, y: ys }}
          transition={{
            opacity: { duration: D, times: l.t, ease: [...opE], ...R },
            x: { duration: D, times: xT, ease: [...xE], ...R },
            y: { duration: D, times: yT, ease: [...yE], ...R },
          }}
        />
      ))}
      <motion.div
        className="absolute inset-[22.5%_28.9%]"
        initial={{ rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
        animate={{
          rotate: [0, 220, 220, 480, 650, 720, 720],
          scaleX: [1, 0.97, 1.08, 1.08, 1, 0.96, 1.08, 1, 0.99, 1, 1],
          scaleY: [1, 1.04, 0.93, 0.93, 1, 1.05, 0.93, 1, 1.02, 1, 1],
          x: xs,
          y: ys,
        }}
        transition={{
          rotate: { duration: D, times: [0, 0.2833, 0.34, 0.65, 0.7833, 0.9167, 1], ease: 'linear', ...R },
          scaleX: { duration: D, times: [0, 0.1267, 0.2833, 0.3399, 0.34, 0.4933, 0.65, 0.6933, 0.7833, 0.9167, 1], ease: ['easeOut', 'easeIn', 'linear', 'linear', 'easeOut', 'easeIn', 'easeOut', 'easeOut', 'easeIn', 'linear'], ...R },
          scaleY: { duration: D, times: [0, 0.1267, 0.2833, 0.3399, 0.34, 0.4933, 0.65, 0.6933, 0.7833, 0.9167, 1], ease: ['easeOut', 'easeIn', 'linear', 'linear', 'easeOut', 'easeIn', 'easeOut', 'easeOut', 'easeIn', 'linear'], ...R },
          x: { duration: D, times: xT, ease: [...xE], ...R },
          y: { duration: D, times: yT, ease: [...yE], ...R },
        }}
      >
        <div className="absolute inset-[-0.35%]">
          <img alt="" className="block size-full max-w-none" src={vector} />
        </div>
      </motion.div>
    </div>
  );
}
