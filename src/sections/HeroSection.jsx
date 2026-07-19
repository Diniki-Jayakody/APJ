import { motion } from 'framer-motion';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { getServiceIcon } from '../utils/icons';
import heroWallpaper from '../assets/hero_section_wall_paper.jpeg';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { StatCard } from '../components/ui/AnimatedCounter';
import { fadeUp, staggerContainer } from '../animations/variants';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14 lg:min-h-[88vh]">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWallpaper})` }}
        role="img"
        aria-label="APJ Consultancy — professional study abroad and visa guidance"
      />

      {/* Subtle overlays for readability without darkening the hero */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/15 md:from-white/82 md:via-white/40 md:to-white/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/25 via-navy-900/10 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-secondary"
          >
            {strings.brand.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.15rem,5.2vw,3.65rem)] font-bold leading-[1.12] tracking-tight text-navy-900"
          >
            {strings.hero.title}
            <br />
            <span className="bg-gradient-to-r from-navy-900 to-secondary bg-clip-text text-transparent">
              {strings.hero.titleAccent}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base font-normal leading-relaxed text-muted md:text-lg"
          >
            {strings.hero.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button href="/#apply" variant="primary" className="w-full sm:w-auto">
              {strings.hero.cta.consultation}
            </Button>
            <Button href="/#countries" variant="secondary" className="w-full sm:w-auto">
              {strings.hero.cta.destinations}
            </Button>
            <Button
              href="/#success-stories"
              variant="outline"
              icon={IoPlayCircleOutline}
              className="w-full sm:w-auto"
            >
              {strings.hero.cta.stories}
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {strings.stats.map((stat, i) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={getServiceIcon(stat.icon)}
                delay={0.25 + i * 0.08}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
