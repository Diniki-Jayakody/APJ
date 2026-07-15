import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { hoverLift } from '../../animations/variants';

export const GlassCard = ({ children, className, hover = true, ...props }) => (
  <motion.div
    variants={hover ? hoverLift : undefined}
    initial="rest"
    whileHover={hover ? 'hover' : undefined}
    className={cn(
      'rounded-2xl border border-white/60 bg-white/85 backdrop-blur-xl shadow-brand-md',
      className,
    )}
    {...props}
  >
    {children}
  </motion.div>
);

export default GlassCard;
