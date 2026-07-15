import { motion } from 'framer-motion';
import { IoAirplane } from 'react-icons/io5';
import { cn } from '../../utils/cn';

export const FloatingPlane = ({ className, orbitRadius = 155, duration = 26 }) => (
  <motion.div
    className={cn('pointer-events-none absolute inset-0', className)}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    aria-hidden
  >
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        marginLeft: -orbitRadius,
        marginTop: -orbitRadius,
      }}
      animate={{ rotate: -360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-brand-md backdrop-blur-sm">
          <IoAirplane className="rotate-[-38deg] text-xl text-secondary" />
        </div>
        {/* Flight trail */}
        <div className="absolute right-full top-1/2 mr-1 h-px w-8 -translate-y-1/2 bg-gradient-to-l from-secondary/60 to-transparent" />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default FloatingPlane;
