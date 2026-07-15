import { motion } from 'framer-motion';
import { IoArrowForward, IoArrowDown } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { visaProcessSteps } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import { cn } from '../utils/cn';

export const ProcessSection = () => (
  <Section id="process" background="default">
    <Heading
      kicker={strings.sections.process.kicker}
      title={strings.sections.process.title}
      description={strings.sections.process.description}
    />
    <div className="flex flex-col gap-3 xl:flex-row xl:items-stretch xl:gap-0">
      {visaProcessSteps.map((step, index) => {
        const isSuccess = step.id === 'success';
        const isLast = index === visaProcessSteps.length - 1;

        return (
          <div key={step.id} className="flex flex-col xl:min-w-0 xl:flex-1 xl:flex-row xl:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={cn(
                'relative flex-1 rounded-2xl border p-5 shadow-brand-sm',
                isSuccess
                  ? 'border-success/40 bg-gradient-to-b from-white to-emerald-50 ring-1 ring-success/20'
                  : 'border-line bg-gradient-to-b from-white to-sky-50',
              )}
            >
              <span
                className={cn(
                  'mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold text-white',
                  isSuccess ? 'bg-success' : 'bg-secondary',
                )}
              >
                {step.step}
              </span>
              <h3 className={cn('font-semibold', isSuccess ? 'text-success' : 'text-navy-900')}>
                {step.title}
              </h3>
              <p className="mt-2 text-xs font-normal leading-relaxed text-muted">{step.description}</p>
            </motion.div>

            {!isLast ? (
              <>
                <div className="flex items-center justify-center py-1 text-secondary xl:hidden" aria-hidden>
                  <IoArrowDown className="text-xl" />
                </div>
                <div className="hidden shrink-0 items-center px-1.5 text-secondary xl:flex" aria-hidden>
                  <IoArrowForward className="text-xl" />
                </div>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  </Section>
);

export default ProcessSection;
