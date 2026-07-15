import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { getServiceIcon } from '../../utils/icons';

export const FeatureCard = ({ title, description, icon, index = 0, className }) => {
  const Icon = getServiceIcon(icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={cn(
        'rounded-2xl border border-line bg-white p-6 shadow-brand-sm hover:shadow-brand-md',
        className,
      )}
    >
      <motion.span
        whileHover={{ rotate: 8 }}
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-white border border-line text-2xl text-secondary"
      >
        <Icon aria-hidden />
      </motion.span>
      <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm font-normal leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
