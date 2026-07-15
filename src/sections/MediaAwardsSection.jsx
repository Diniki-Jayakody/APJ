import { motion } from 'framer-motion';
import { IoPlay } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { awardsGallery, certificatesGallery, mediaPresenceGallery } from '../data/assets';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import LazyImage from '../components/ui/LazyImage';

const MediaPresenceCard = ({ item, index }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm transition-shadow hover:shadow-brand-md"
  >
    <div className="relative">
      <LazyImage
        src={item.src}
        alt={item.alt}
        aspectRatio="16 / 10"
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy-900/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-sm">
          <IoPlay className="text-xl" aria-hidden />
        </span>
      </span>
    </div>
    <div className="flex flex-1 items-center p-4 sm:p-5">
      <h3 className="font-semibold text-navy-900">{item.title}</h3>
    </div>
  </motion.a>
);

const AwardCard = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.08 + index * 0.07 }}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm transition-shadow hover:shadow-brand-md"
  >
    <LazyImage
      src={item.src}
      alt={item.alt}
      aspectRatio="16 / 10"
      className="transition-transform duration-700 group-hover:scale-105"
    />
    <div className="flex flex-1 items-center p-4 sm:p-5">
      <h3 className="font-semibold text-navy-900">{item.title}</h3>
    </div>
  </motion.article>
);

const CertificateCard = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.05 + index * 0.06 }}
    className="overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm transition-shadow hover:shadow-brand-md"
  >
    <LazyImage
      src={item.src}
      alt={item.alt}
      aspectRatio="4 / 3"
      objectFit="contain"
      wrapperClassName="bg-sky-50"
    />
    <div className="px-4 py-3">
      <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
    </div>
  </motion.article>
);

export const MediaAwardsSection = () => (
  <Section id="recognition" background="soft">
    <Heading
      kicker={strings.sections.media.kicker}
      title={strings.sections.media.title}
      description={strings.sections.media.description}
    />

    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col">
        <h3 className="mb-5 text-lg font-semibold text-navy-900">
          {strings.sections.media.mediaTitle}
        </h3>
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {mediaPresenceGallery.map((item, index) => (
            <MediaPresenceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="flex h-full flex-col">
        <h3 className="mb-5 text-lg font-semibold text-navy-900">
          {strings.sections.media.awardsTitle}
        </h3>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
          {awardsGallery.map((item, index) => (
            <AwardCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12">
      <h3 className="mb-5 text-lg font-semibold text-navy-900">
        {strings.sections.media.certificatesTitle}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificatesGallery.map((item, index) => (
          <CertificateCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  </Section>
);

export default MediaAwardsSection;
