import SEO from '../components/layout/SEO';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CountriesSection from '../sections/CountriesSection';
import ProcessSection from '../sections/ProcessSection';
import ServicesSection from '../sections/ServicesSection';
import MediaAwardsSection from '../sections/MediaAwardsSection';
import SuccessStoriesSection from '../sections/SuccessStoriesSection';
import ApplySection from '../sections/ApplySection';
import ContactSection, { TrustSection } from '../sections/ContactSection';

const HomePage = () => (
  <>
    <SEO />
    <HeroSection />
    <AboutSection />
    <CountriesSection />
    <ProcessSection />
    <ServicesSection />
    <MediaAwardsSection />
    <SuccessStoriesSection />
    <TrustSection />
    <ApplySection />
    <ContactSection />
  </>
);

export default HomePage;
