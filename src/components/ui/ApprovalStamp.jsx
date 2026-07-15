import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const ApprovalStamp = ({ src, alt, rotate = 0, className, index = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 1000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      className={cn('relative w-[136px] select-none sm:w-[152px] md:w-[168px] xl:w-[186px]', className)}
      initial={{ opacity: 0, scale: 0.55 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: [0, -5, 0] }
          : { opacity: 0, scale: 0.55, y: 0 }
      }
      transition={
        visible
          ? {
              opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 4.6 + index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.55,
              },
            }
          : { duration: 0.2 }
      }
      style={{ rotate }}
      aria-hidden={!alt}
    >
      <img
        src={src}
        alt={alt || ''}
        draggable={false}
        className="h-auto w-full drop-shadow-[0_12px_28px_rgba(29,43,99,0.22)]"
      />
    </motion.div>
  );
};

export default ApprovalStamp;
