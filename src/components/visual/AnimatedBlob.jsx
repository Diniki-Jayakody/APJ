import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { hoverLift } from '../../animations/variants';

export const AnimatedBlob = ({ className, color = 'sky', size = 'lg' }) => {
  const colors = {
    sky: 'bg-secondary/15',
    navy: 'bg-navy-900/10',
    accent: 'bg-secondary/20',
  };
  const sizes = {
    sm: 'h-32 w-32',
    md: 'h-48 w-48',
    lg: 'h-72 w-72',
    xl: 'h-96 w-96',
  };

  return (
    <motion.div
      variants={{
        animate: {
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.05, 1],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        },
      }}
      animate="animate"
      className={cn('absolute rounded-full blur-3xl pointer-events-none', colors[color], sizes[size], className)}
      aria-hidden
    />
  );
};

export default AnimatedBlob;
