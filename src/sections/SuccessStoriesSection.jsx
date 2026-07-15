import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { testimonials } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import 'swiper/css';
import 'swiper/css/pagination';

const metaLine = (item) => [item.country, item.university].filter(Boolean).join(' · ');

export const SuccessStoriesSection = () => (
  <Section id="success-stories" background="default">
    <Heading
      kicker={strings.sections.success.kicker}
      title={strings.sections.success.title}
      description={strings.sections.success.description}
    />
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="!pb-12"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <motion.article
            whileHover={{ y: -6 }}
            className="h-full rounded-2xl border border-line bg-white p-6 shadow-brand-sm hover:shadow-brand-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.photo}
                alt={`${item.name}, APJ Consultancy student`}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 shrink-0 rounded-2xl border border-line object-cover object-top"
              />
              <div className="min-w-0">
                <h3 className="font-semibold text-navy-900">{item.name}</h3>
                {metaLine(item) ? (
                  <p className="text-xs font-medium text-muted">{metaLine(item)}</p>
                ) : null}
              </div>
            </div>
            <p className="mt-4 text-sm font-normal italic leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
          </motion.article>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

export default SuccessStoriesSection;
