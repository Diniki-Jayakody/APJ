import { motion } from 'framer-motion';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { getServiceIcon } from '../utils/icons';
import BackgroundGradient from '../components/visual/BackgroundGradient';
import AnimatedGlobe from '../components/visual/AnimatedGlobe';
import FloatingPlane from '../components/visual/FloatingPlane';
import HeroComposition from '../components/visual/HeroComposition';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { StatCard } from '../components/ui/AnimatedCounter';
import { fadeUp, staggerContainer } from '../animations/variants';
import useMouseParallax from '../hooks/useMouseParallax';

export const HeroSection = () => {
  const mouseOffset = useMouseParallax(10);

  return (
    <BackgroundGradient className="overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14 lg:min-h-[88vh]">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Copy column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 order-1"
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

          {/* Visual column — desktop */}
          <div className="relative order-2 hidden min-h-[460px] items-center justify-center overflow-visible lg:flex">
            <motion.div
              style={{ x: mouseOffset.x, y: mouseOffset.y }}
              className="relative z-10 -translate-y-6 h-[280px] w-[280px] xl:-translate-y-8 xl:h-[320px] xl:w-[320px]"
            >
              <AnimatedGlobe className="h-full w-full" />
              <FloatingPlane orbitRadius={165} />
            </motion.div>
            <HeroComposition
              mouseOffset={mouseOffset}
              layout="desktop"
              className="absolute inset-0 z-20"
            />
          </div>

          {/* Visual column — mobile / tablet */}
          <div className="order-2 flex flex-col items-center lg:hidden">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <AnimatedGlobe className="h-full w-full" size="md" />
              <FloatingPlane orbitRadius={125} duration={30} />
            </div>
            <HeroComposition layout="mobile" className="mt-6 w-full max-w-md" />
          </div>
        </div>
      </Container>
    </BackgroundGradient>
  );
};

export default HeroSection;
