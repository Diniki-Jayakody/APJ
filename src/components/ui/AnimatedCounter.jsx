import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const useAnimatedNumber = (end, inView, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, inView, duration]);

  return value;
};

export const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2.5, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useAnimatedNumber(value, inView, duration * 1000);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{inView ? count : 0}{suffix}
    </span>
  );
};

export const StatCard = ({ value, suffix, label, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={cn(
      'flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-brand-sm backdrop-blur-sm',
      className,
    )}
  >
    {Icon && (
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-secondary">
        <Icon className="text-xl" aria-hidden />
      </span>
    )}
    <div>
      <p className="text-xl font-bold text-navy-900">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs font-medium text-muted">{label}</p>
    </div>
  </motion.div>
);

export default AnimatedCounter;
