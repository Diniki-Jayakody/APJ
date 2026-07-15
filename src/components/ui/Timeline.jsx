import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Timeline = ({ items, className }) => (
  <div className={cn('relative', className)}>
    <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-line md:block" aria-hidden />
    <div className="space-y-6 md:space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="relative md:pl-12"
        >
          <span className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full bg-secondary md:block" aria-hidden />
          <div className="rounded-2xl border border-line bg-white p-5 shadow-brand-sm transition-shadow hover:shadow-brand-md sm:p-6">
            <span className="text-xs font-medium uppercase tracking-wide text-secondary">{item.year}</span>
            <h3 className="mt-1 text-lg font-semibold text-navy-900 sm:text-xl">{item.title}</h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-muted">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Timeline;
