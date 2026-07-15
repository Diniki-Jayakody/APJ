import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { strings } from '../constants/strings';
import { testimonials } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import 'swiper/css';
import 'swiper/css/pagination';

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
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-lg font-semibold text-white`}>
                {item.initials}
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">{item.name}</h3>
                <p className="text-xs font-medium text-muted">{item.country} · {item.university}</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-normal italic leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-xs font-medium text-secondary">Visa approved · {item.visaDate}</p>
          </motion.article>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

export default SuccessStoriesSection;
