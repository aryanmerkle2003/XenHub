import { motion } from 'framer-motion';
import vector from '../../../assets/images/decor/jar-vector.svg';
import cookie from '../../../assets/images/decor/jar-cookie.png';

const D = 2.58;
const E = ['linear', [0.34, 0, 0.64, 1], [0.18, 0.8, 0.25, 1], [0.4, 0, 0.8, 1], 'linear', [0.15, 0.75, 0.3, 1], [0.3, 0, 0.55, 1], [0.22, 1, 0.36, 1], 'linear'] as const;

// t = start time (fraction) of the wobble; s = mirror sign for rotate/x
function cookieProps(t: number, s: 1 | -1) {
  const times = [0, t, t + 0.0388, t + 0.0853, t + 0.1241, 0.6938, 0.6977, 0.7519, 0.8062, 1];
  const ot = [0, t + 0.0853, t + 0.1241, 0.6976, 0.6977, 1];
  const mk = (ease: unknown, tm: number[]) => ({ duration: D, times: tm, ease: ease as never, repeat: Infinity });
  return {
    initial: { opacity: 1, rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: {
      opacity: [1, 1, 0, 0, 1, 1],
      rotate: [0, 0, 2 * s, -6 * s, -9 * s, -9 * s, 4 * s, -2 * s, 0, 0],
      scaleX: [1, 1, 1.07, 0.95, 0.72, 0.72, 1.1, 0.96, 1, 1],
      scaleY: [1, 1, 0.93, 1.08, 0.72, 0.72, 0.9, 1.05, 1, 1],
      x: [0, 0, -0.8 * s, 1.8 * s, 2.8 * s, 2.8 * s, -0.8 * s, 0.6 * s, 0, 0],
      y: [0, 0, 1.2, -5.5, -10, -10, 2.2, -2.1, 0, 0],
    },
    transition: {
      opacity: mk(['linear', [0.4, 0, 0.8, 1], 'linear', 'linear', 'linear'], ot),
      rotate: mk(E, times),
      scaleX: mk(E, times),
      scaleY: mk(E, times),
      x: mk(E, times),
      y: mk(E, times),
    },
  };
}

export default function CookieJarCell({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg ${className}`}
      style={{ backgroundColor: '#f7f0f0' }}
    >
      <div className="absolute inset-[22.5%_31.87%]">
        <div className="absolute inset-[-0.35%_-0.4%]">
          <img alt="" className="block max-w-none size-full" src={vector} />
        </div>
      </div>
      {/* image 1 */}
      <motion.div className="absolute inset-[60.77%_53.8%_23.85%_32.75%]" {...cookieProps(0.4302, 1)}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={cookie} />
      </motion.div>
      {/* image 2 */}
      <div className="absolute left-[53.22%] right-[32.16%] top-[calc(50%+24.5px)] aspect-[25/21] -translate-y-1/2">
        <motion.div className="absolute inset-0" {...cookieProps(0.5233, -1)}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[1.62%] max-w-none top-0 w-[96.77%]" src={cookie} />
          </div>
        </motion.div>
      </div>
      {/* image 3 */}
      <motion.div className="absolute inset-[53.08%_43.27%_31.54%_43.27%]" {...cookieProps(0.3372, -1)}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={cookie} />
      </motion.div>
      {/* image 4 */}
      <motion.div className="absolute inset-[45.38%_32.16%_39.23%_54.39%]" {...cookieProps(0.1512, -1)}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={cookie} />
      </motion.div>
      {/* image 6 */}
      <motion.div className="absolute inset-[38.46%_43.27%_46.15%_43.27%]" {...cookieProps(0.0581, 1)}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={cookie} />
      </motion.div>
      {/* image 5 */}
      <motion.div className="absolute inset-[46.15%_54.39%_38.46%_32.16%]" {...cookieProps(0.2442, 1)}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={cookie} />
      </motion.div>
    </div>
  );
}
