import { motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { visaProcessSteps } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';

export const ProcessSection = () => (
  <Section id="process" background="default">
    <Heading
      kicker={strings.sections.process.kicker}
      title={strings.sections.process.title}
      description={strings.sections.process.description}
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {visaProcessSteps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="rounded-2xl border border-line bg-gradient-to-b from-white to-sky-50 p-5 shadow-brand-sm"
        >
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-sm font-semibold text-white">
            {step.step}
          </span>
          <h3 className="font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 text-xs font-normal leading-relaxed text-muted">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default ProcessSection;
