import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Heading = ({
  kicker,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}) => {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div className={cn('mb-10 max-w-3xl md:mb-12', alignClass[align], align === 'center' && 'mx-auto', className)}>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-secondary"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={cn(
          'text-3xl font-semibold tracking-tight text-navy-900 md:text-4xl lg:text-[2.5rem] leading-[1.2]',
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base font-normal leading-relaxed text-muted md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export const SectionHeading = Heading;
export default Heading;
