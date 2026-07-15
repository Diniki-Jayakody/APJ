import { motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { aboutPoints } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { slideLeft, slideRight } from '../animations/variants';

export const AboutSection = () => (
  <Section id="about" background="default">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeft}
        className="rounded-3xl border border-line bg-gradient-to-b from-white to-sky-50 p-4 shadow-brand-md"
      >
        <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 via-navy-900 to-sky-50">
          <div className="rounded-3xl border border-white/30 bg-white/10 px-10 py-8 text-center backdrop-blur-sm">
            <p className="text-3xl font-semibold tracking-wide text-white">APJ CONSULTANCY</p>
            <p className="mt-2 text-sm font-normal text-sky-100">Professional student visa counselling</p>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-navy-900 shadow-brand-sm">
            Kuliyapitiya & Matara branches serving Sri Lanka
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
        <Heading
          align="left"
          kicker={strings.sections.about.kicker}
          title={strings.sections.about.title}
          description={strings.sections.about.description}
        />
        <ul className="space-y-3">
          {aboutPoints.map((point) => (
            <li key={point} className="flex gap-3 text-sm font-normal leading-relaxed text-ink">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-sky-100 text-sm font-semibold text-secondary">✓</span>
              {point}
            </li>
          ))}
        </ul>
        <Button href="/#countries" variant="primary" className="mt-8">
          View Country Guide
        </Button>
      </motion.div>
    </div>
  </Section>
);

export default AboutSection;
