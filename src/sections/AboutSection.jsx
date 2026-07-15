import { motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { aboutPoints } from '../data/siteContent';
import { officeGallery } from '../data/assets';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import LazyImage from '../components/ui/LazyImage';
import { slideLeft, slideRight } from '../animations/variants';

export const AboutSection = () => {
  const [featured, ...rest] = officeGallery;
  const sidePhotos = rest.slice(0, 4);

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
            <LazyImage
              src={featured.src}
              alt={featured.alt}
              aspectRatio="16 / 10"
              className="transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {sidePhotos.map((photo) => (
                <LazyImage
                  key={photo.id}
                  src={photo.src}
                  alt={photo.alt}
                  aspectRatio="1 / 1"
                  wrapperClassName="rounded-xl"
                  className="transition-transform duration-500 hover:scale-105"
                />
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-navy-900 shadow-brand-sm">
              {strings.sections.office.caption}
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
