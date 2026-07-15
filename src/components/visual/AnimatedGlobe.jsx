import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { globeRotate } from '../../animations/variants';
import globeEarth from '../../assets/globe-earth.svg';

export const AnimatedGlobe = ({ className, size = 'lg' }) => {
  const sizes = {
    md: 'h-full w-full',
    lg: 'h-full w-full',
  };

  return (
    <div className={cn('relative flex items-center justify-center', sizes[size], className)}>
      {/* Ground shadow */}
      <div
        className="absolute -bottom-4 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[100%] bg-primary-dark/20 blur-xl"
        aria-hidden
      />

      {/* Ambient glow */}
      <div className="absolute inset-2 rounded-full bg-secondary/15 blur-3xl" aria-hidden />

      {/* Rotating globe */}
      <motion.div
        variants={globeRotate}
        animate="animate"
        className="relative z-10 h-full w-full"
      >
        <img
          src={globeEarth}
          alt=""
          aria-hidden
          className="h-full w-full object-contain drop-shadow-2xl"
          draggable={false}
        />
        {/* Specular highlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 28% 22%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 28%, transparent 52%)',
          }}
          aria-hidden
        />
      </motion.div>

      {/* Atmosphere ring */}
      <div
        className="pointer-events-none absolute inset-[-6%] rounded-full border border-secondary/25 shadow-brand-glow"
        aria-hidden
      />
    </div>
  );
};

export default AnimatedGlobe;
