import SEO from '../components/layout/SEO';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CountriesSection from '../sections/CountriesSection';
import WhyApjSection from '../sections/WhyApjSection';
import ProcessSection from '../sections/ProcessSection';
import ServicesSection from '../sections/ServicesSection';
import SuccessStoriesSection from '../sections/SuccessStoriesSection';
import MediaAwardsSection from '../sections/MediaAwardsSection';
import ApplySection from '../sections/ApplySection';
import ContactSection, { TrustSection } from '../sections/ContactSection';

const HomePage = () => (
  <>
    <SEO />
    <HeroSection />
    <AboutSection />
    <CountriesSection />
    <WhyApjSection />
    <ProcessSection />
    <ServicesSection />
    <SuccessStoriesSection />
    <MediaAwardsSection />
    <TrustSection />
    <ApplySection />
    <ContactSection />
  </>
);

export default HomePage;
