import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { hoverLift } from '../../animations/variants';

export const Card = ({ children, className, hover = true, padding = 'md', ...props }) => {
  const paddingMap = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      variants={hover ? hoverLift : undefined}
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      className={cn(
        'rounded-2xl border border-line bg-white shadow-brand-sm',
        paddingMap[padding],
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
