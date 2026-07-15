import { motion } from 'framer-motion';
import { IoPlay, IoTvOutline, IoLogoYoutube, IoImagesOutline, IoSchoolOutline } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { mediaAppearances, recognitionStats } from '../data/siteContent';
import { awardsGallery, certificatesGallery } from '../data/assets';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import LazyImage from '../components/ui/LazyImage';

const mediaIcon = {
  tv: IoTvOutline,
  youtube: IoLogoYoutube,
  program: IoSchoolOutline,
  gallery: IoImagesOutline,
};

const MediaCard = ({ item, index }) => {
  const Icon = mediaIcon[item.type] || IoPlay;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm transition-shadow hover:shadow-brand-md"
    >
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-navy-900 via-primary-light to-secondary">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.25), transparent 50%)',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm transition-transform group-hover:scale-105">
            <Icon className="text-xl" aria-hidden />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-white/85">
            {item.label}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-medium uppercase tracking-wide text-secondary">{item.subtitle}</p>
        <h3 className="mt-1 text-base font-semibold text-navy-900">{item.title}</h3>
        <p className="mt-1.5 text-sm font-normal leading-relaxed text-muted">{item.description}</p>
      </div>
    </motion.article>
  );
};

const AwardCard = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.08 + index * 0.07 }}
    className="group overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm transition-shadow hover:shadow-brand-md"
  >
    <LazyImage
      src={item.src}
      alt={item.alt}
      aspectRatio="16 / 10"
      className="transition-transform duration-700 group-hover:scale-105"
    />
    <div className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-navy-900">{item.title}</h3>
        <span className="shrink-0 rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-medium text-navy-900">
          {item.year}
        </span>
      </div>
      <p className="mt-0.5 text-xs font-medium text-secondary">{item.issuer}</p>
      <p className="mt-2 text-sm font-normal leading-relaxed text-muted">{item.description}</p>
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

    <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {recognitionStats.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl border border-line bg-white px-4 py-3 text-center shadow-brand-sm"
        >
          <p className="text-sm font-semibold leading-snug text-navy-900">{stat.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <h3 className="mb-5 text-lg font-semibold text-navy-900">
          {strings.sections.media.mediaTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {mediaAppearances.map((item, index) => (
            <MediaCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-lg font-semibold text-navy-900">
          {strings.sections.media.awardsTitle}
        </h3>
        <div className="flex flex-col gap-4">
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
