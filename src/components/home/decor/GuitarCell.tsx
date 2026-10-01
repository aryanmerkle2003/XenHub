import { motion } from 'framer-motion';
import note1 from '../../../assets/images/decor/guitar-note1.svg';
import note2 from '../../../assets/images/decor/guitar-note2.svg';
import note3 from '../../../assets/images/decor/guitar-note3.svg';
import note4 from '../../../assets/images/decor/guitar-note4.svg';
import note5 from '../../../assets/images/decor/guitar-note5.svg';
import note6 from '../../../assets/images/decor/guitar-note6.svg';
import body from '../../../assets/images/decor/guitar-body.svg';

const D = 2.6;

const NOTES = [
  {"n": 1, "left": 100.0, "top": 48.0, "r0": 26, "ot": [0, 0.0615, 0.6154, 0.75, 1], "ov": [0, 1, 1, 0, 0], "tt": [0, 0.3, 0.75, 1], "rot": [26, 16.2, -2, -2], "x": [0, 10.2, 30, 30], "y": [0, -21.6, -72, -72], "oe": ["easeOut", "linear", "easeIn", "linear"], "re": ["easeOut", "easeInOut", "linear"], "xe": ["easeOut", "easeIn", "linear"]},
  {"n": 2, "left": 51.53, "top": 25.53, "r0": 26, "ot": [0, 0.1308, 0.1923, 0.7462, 0.8808, 1], "ov": [0, 0, 1, 1, 0, 0], "tt": [0, 0.1308, 0.4308, 0.8808, 1], "rot": [26, 26, 38.6, 62, 62], "x": [0, 0, -8.16, -24, -24], "y": [0, 0, -22.2, -74, -74], "oe": ["linear", "easeOut", "linear", "easeIn", "linear"], "re": ["linear", "easeOut", "easeInOut", "linear"], "xe": ["linear", "easeOut", "easeIn", "linear"]},
  {"n": 3, "left": 117.53, "top": 38.53, "r0": 6, "ot": [0, 0.0462, 0.1077, 0.6615, 0.7962, 1], "ov": [0, 0, 1, 1, 0, 0], "tt": [0, 0.0462, 0.3462, 0.7962, 1], "rot": [6, 6, -8.7, -36, -36], "x": [0, 0, 14.28, 42, 42], "y": [0, 0, -24.6, -82, -82], "oe": ["linear", "easeOut", "linear", "easeIn", "linear"], "re": ["linear", "easeOut", "easeInOut", "linear"], "xe": ["linear", "easeOut", "easeIn", "linear"]},
  {"n": 4, "left": 57.0, "top": 47.0, "r0": -20, "ot": [0, 0.2231, 0.2846, 0.8385, 0.9731, 1], "ov": [0, 0, 1, 1, 0, 0], "tt": [0, 0.2231, 0.5231, 0.9731, 1], "rot": [-20, -20, -3.9, 26, 26], "x": [0, 0, -10.2, -30, -30], "y": [0, 0, -24, -80, -80], "oe": ["linear", "easeOut", "linear", "easeIn", "linear"], "re": ["linear", "easeOut", "easeInOut", "linear"], "xe": ["linear", "easeOut", "easeIn", "linear"]},
  {"n": 5, "left": 103.11, "top": 26.11, "r0": -20, "ot": [0, 0.0923, 0.1538, 0.7077, 0.8423, 1], "ov": [0, 0, 1, 1, 0, 0], "tt": [0, 0.0923, 0.3923, 0.8423, 1], "rot": [-20, -20, -11.6, 4, 4], "x": [0, 0, 5.1, 15, 15], "y": [0, 0, -23.4, -78, -78], "oe": ["linear", "easeOut", "linear", "easeIn", "linear"], "re": ["linear", "easeOut", "easeInOut", "linear"], "xe": ["linear", "easeOut", "easeIn", "linear"]},
  {"n": 6, "left": 39.11, "top": 41.11, "r0": -56, "ot": [0, 0.1769, 0.2385, 0.7923, 0.9269, 1], "ov": [0, 0, 1, 1, 0, 0], "tt": [0, 0.1769, 0.4769, 0.9269, 1], "rot": [-56, -56, -69.3, -94, -94], "x": [0, 0, -14.28, -42, -42], "y": [0, 0, -20.4, -68, -68], "oe": ["linear", "easeOut", "linear", "easeIn", "linear"], "re": ["linear", "easeOut", "easeInOut", "linear"], "xe": ["linear", "easeOut", "easeIn", "linear"]},
] as const;

export default function GuitarCell({ className = '' }: { className?: string }) {
  const imgs = [note1, note2, note3, note4, note5, note6];
  return (
    <div className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`} style={{ backgroundColor: '#edf2fa' }}>
      <div className="absolute inset-[15.63%_23.87%_15.62%_23.87%]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={body} />
      </div>
      {NOTES.map((n, i) => (
        <motion.div
          key={n.n}
          className="absolute size-[15px]"
          style={{ left: n.left, top: n.top }}
          initial={{ opacity: 0, rotate: n.r0, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: [...n.ov], rotate: [...n.rot], scale: n.tt.length === 4 ? [1, 1.14, 0.72, 0.72] : [1, 1, 1.14, 0.72, 0.72], x: [...n.x], y: [...n.y] }}
          transition={{
            opacity: { duration: D, times: [...n.ot], ease: [...n.oe], repeat: Infinity },
            rotate: { duration: D, times: [...n.tt], ease: [...n.re], repeat: Infinity },
            scale: { duration: D, times: [...n.tt], ease: [...n.xe], repeat: Infinity },
            x: { duration: D, times: [...n.tt], ease: [...n.xe], repeat: Infinity },
            y: { duration: D, times: [...n.tt], ease: [...n.xe], repeat: Infinity },
          }}
        >
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgs[i]} />
        </motion.div>
      ))}
    </div>
  );
}
