import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { aboutPoints } from '../data/siteContent';
import { officeGallery } from '../data/assets';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import LazyImage from '../components/ui/LazyImage';
import { slideLeft, slideRight } from '../animations/variants';
import { cn } from '../utils/cn';

export const AboutSection = () => {
  const [activeId, setActiveId] = useState(officeGallery[0]?.id);
  const activePhoto = officeGallery.find((photo) => photo.id === activeId) || officeGallery[0];

  return (
    <Section id="about" background="default">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          className="rounded-3xl border border-line bg-gradient-to-b from-white to-sky-50 p-4 shadow-brand-md"
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0.35, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.35, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <LazyImage
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  aspectRatio="16 / 10"
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {officeGallery.map((photo) => {
                const isActive = photo.id === activePhoto.id;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActiveId(photo.id)}
                    aria-label={`View ${photo.caption || photo.alt}`}
                    aria-pressed={isActive}
                    className={cn(
                      'overflow-hidden rounded-xl border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
                      isActive
                        ? 'border-secondary shadow-brand-sm ring-2 ring-secondary/20'
                        : 'border-transparent opacity-80 hover:opacity-100',
                    )}
                  >
                    <LazyImage
                      src={photo.src}
                      alt=""
                      aspectRatio="1 / 1"
                      wrapperClassName="rounded-[10px]"
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-3 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-navy-900 shadow-brand-sm">
              {activePhoto.caption || strings.sections.office.caption}
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
};

export default AboutSection;
