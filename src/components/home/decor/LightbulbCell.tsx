import { motion, type TargetAndTransition, type Transition } from 'framer-motion';
import bulbBody from '../../../assets/images/decor/bulb-body.svg';
import dash1s1 from '../../../assets/images/decor/bulb-dash1-set1.svg';
import dash2s1 from '../../../assets/images/decor/bulb-dash2-set1.svg';
import dash3s1 from '../../../assets/images/decor/bulb-dash3-set1.svg';
import dash4s1 from '../../../assets/images/decor/bulb-dash4-set1.svg';
import dash5s1 from '../../../assets/images/decor/bulb-dash5-set1.svg';
import dash6s1 from '../../../assets/images/decor/bulb-dash6-set1.svg';
import dash7s1 from '../../../assets/images/decor/bulb-dash7-set1.svg';
import dash8s1 from '../../../assets/images/decor/bulb-dash8-set1.svg';
import dash9s1 from '../../../assets/images/decor/bulb-dash9-set1.svg';
import dash1s2 from '../../../assets/images/decor/bulb-dash1-set2.svg';
import dash2s2 from '../../../assets/images/decor/bulb-dash2-set2.svg';
import dash3s2 from '../../../assets/images/decor/bulb-dash3-set2.svg';
import dash4s2 from '../../../assets/images/decor/bulb-dash4-set2.svg';
import dash5s2 from '../../../assets/images/decor/bulb-dash5-set2.svg';
import dash6s2 from '../../../assets/images/decor/bulb-dash6-set2.svg';
import dash7s2 from '../../../assets/images/decor/bulb-dash7-set2.svg';
import dash8s2 from '../../../assets/images/decor/bulb-dash8-set2.svg';
import dash9s2 from '../../../assets/images/decor/bulb-dash9-set2.svg';
import dash1s3 from '../../../assets/images/decor/bulb-dash1-set3.svg';
import dash2s3 from '../../../assets/images/decor/bulb-dash2-set3.svg';
import dash3s3 from '../../../assets/images/decor/bulb-dash3-set3.svg';
import dash4s3 from '../../../assets/images/decor/bulb-dash4-set3.svg';
import dash5s3 from '../../../assets/images/decor/bulb-dash5-set3.svg';
import dash6s3 from '../../../assets/images/decor/bulb-dash6-set3.svg';
import dash7s3 from '../../../assets/images/decor/bulb-dash7-set3.svg';
import dash8s3 from '../../../assets/images/decor/bulb-dash8-set3.svg';
import dash9s3 from '../../../assets/images/decor/bulb-dash9-set3.svg';

const imgs: Record<string, string> = {
  '1-1': dash1s1,
  '1-2': dash2s1,
  '1-3': dash3s1,
  '1-4': dash4s1,
  '1-5': dash5s1,
  '1-6': dash6s1,
  '1-7': dash7s1,
  '1-8': dash8s1,
  '1-9': dash9s1,
  '2-1': dash1s2,
  '2-2': dash2s2,
  '2-3': dash3s2,
  '2-4': dash4s2,
  '2-5': dash5s2,
  '2-6': dash6s2,
  '2-7': dash7s2,
  '2-8': dash8s2,
  '2-9': dash9s2,
  '3-1': dash1s3,
  '3-2': dash2s3,
  '3-3': dash3s3,
  '3-4': dash4s3,
  '3-5': dash5s3,
  '3-6': dash6s3,
  '3-7': dash7s3,
  '3-8': dash8s3,
  '3-9': dash9s3,
};

type Dash = [set: number, n: number, left: number, top: number, w: number, h: number, inset: string, dx: number, dy: number];

const DASHES: Dash[] = [
  [1, 1, 56.74, 45.41, 7.653, 5.243, "-3.81% -2.61%", -82.173, -39.141],
  [1, 2, 106.49, 45.41, 7.653, 5.244, "-3.81% -2.61%", 82.216, -39.079],
  [1, 3, 84.51, 29.25, 1.957, 8.804, "-2.27% -10.22%", 0.001, -78],
  [1, 4, 97.22, 33.54, 5.332, 7.795, "-2.57% -3.75%", 47.651, -67.478],
  [1, 5, 68.26, 33.52, 5.352, 7.835, "-2.55% -3.74% -3.03% -3.74%", -47.587, -67.509],
  [1, 6, 106.44, 74.16, 7.188, 4.972, "-4.62% -2.78% -4.02% -2.78%", 82.268, 39.006],
  [1, 7, 52.72, 61.55, 8.298, 1.955, "-10.23% -2.41%", -95, 0.005],
  [1, 8, 110, 61.55, 8.276, 1.955, "-10.23% -2.42%", 95, 0.005],
  [1, 9, 57.1, 74.16, 7.188, 4.972, "-4.02% -2.78%", -82.27, 39.003],
  [2, 1, 56.74, 45.41, 7.653, 5.243, "-3.81% -2.61%", -82.173, -39.141],
  [2, 2, 106.49, 45.41, 7.653, 5.244, "-3.81% -2.61%", 82.216, -39.079],
  [2, 3, 84.51, 29.25, 1.957, 8.804, "-2.27% -10.22%", 0.001, -78],
  [2, 4, 97.22, 33.54, 5.332, 7.795, "-2.57% -3.75%", 47.651, -67.478],
  [2, 5, 68.26, 33.52, 5.352, 7.835, "-2.55% -3.74% -3.03% -3.74%", -47.587, -67.509],
  [2, 6, 106.44, 74.16, 7.188, 4.972, "-4.62% -2.78% -4.02% -2.78%", 82.268, 39.006],
  [2, 7, 52.72, 61.55, 8.298, 1.955, "-10.23% -2.41%", -95, 0.005],
  [2, 8, 110, 61.55, 8.276, 1.955, "-10.23% -2.42%", 95, 0.005],
  [2, 9, 57.1, 74.16, 7.188, 4.972, "-4.02% -2.78%", -82.27, 39.003],
  [3, 1, 56.74, 45.41, 7.653, 5.243, "-3.81% -2.61%", -82.173, -39.141],
  [3, 2, 106.49, 45.41, 7.653, 5.244, "-3.81% -2.61%", 82.216, -39.079],
  [3, 3, 84.51, 29.25, 1.957, 8.804, "-2.27% -10.22%", 0.001, -78],
  [3, 4, 97.22, 33.54, 5.332, 7.795, "-2.57% -3.75%", 47.651, -67.478],
  [3, 5, 68.26, 33.52, 5.352, 7.835, "-2.55% -3.74% -3.03% -3.74%", -47.587, -67.509],
  [3, 6, 106.44, 74.16, 7.188, 4.972, "-4.62% -2.78% -4.02% -2.78%", 82.268, 39.006],
  [3, 7, 52.72, 61.55, 8.298, 1.955, "-10.23% -2.41%", -95, 0.005],
  [3, 8, 110, 61.55, 8.276, 1.955, "-10.23% -2.42%", 95, 0.005],
  [3, 9, 57.1, 74.16, 7.188, 4.972, "-4.02% -2.78%", -82.27, 39.003],
];

const D = 2.2;
const loop = { duration: D, repeat: Infinity } as const;

function motionFor(set: number, dx: number, dy: number): { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition } {
  if (set === 1) {
    return {
      initial: { opacity: 1, scale: 1, x: 0, y: 0 },
      animate: { opacity: [1, 1, 0, 0], scale: [1, 1.16, 1.16], x: [0, dx, dx], y: [0, dy, dy] },
      transition: {
        opacity: { ...loop, times: [0, 0.2955, 0.4545, 1], ease: ['linear', 'easeIn', 'linear'] },
        scale: { ...loop, times: [0, 0.4545, 1], ease: 'linear' },
        x: { ...loop, times: [0, 0.4545, 1], ease: 'linear' },
        y: { ...loop, times: [0, 0.4545, 1], ease: 'linear' },
      },
    };
  }
  if (set === 2) {
    const t = [0, 0.1273, 0.7045, 1];
    return {
      initial: { opacity: 0, scale: 1, x: 0, y: 0 },
      animate: { opacity: [0, 0, 1, 1, 0, 0], scale: [1, 1, 1.16, 1.16], x: [0, 0, dx, dx], y: [0, 0, dy, dy] },
      transition: {
        opacity: { ...loop, times: [0, 0.1272, 0.1273, 0.5818, 0.7045, 1], ease: ['linear', 'linear', 'linear', 'easeIn', 'linear'] },
        scale: { ...loop, times: t, ease: 'linear' },
        x: { ...loop, times: t, ease: 'linear' },
        y: { ...loop, times: t, ease: 'linear' },
      },
    };
  }
  return {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: [0, 0, 1, 1], scale: [1, 1, 0.82, 1, 1] },
    transition: {
      opacity: { ...loop, times: [0, 0.2636, 0.3727, 1], ease: ['linear', 'easeOut', 'linear'] },
      scale: { ...loop, times: [0, 0.2635, 0.2636, 0.3727, 1], ease: ['linear', 'linear', 'easeOut', 'linear'] },
    },
  };
}

export default function LightbulbCell({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#f0f5f2' }}
    >
      <div className="absolute inset-[30.86%_37.66%_23.22%_37.66%]">
        <div className="absolute" style={{ inset: '-0.33% -0.48% -0.33% -0.47%' }}>
          <img alt="" className="block size-full max-w-none" src={bulbBody} />
        </div>
      </div>
      {DASHES.map(([set, n, left, top, w, h, inset, dx, dy]) => (
        <motion.div
          key={`${set}-${n}`}
          className="absolute"
          style={{ left, top, width: w, height: h }}
          {...motionFor(set, dx, dy)}
        >
          <div className="absolute" style={{ inset }}>
            <img alt="" className="block size-full max-w-none" src={imgs[`${set}-${n}`]} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
