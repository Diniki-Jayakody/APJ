import { strings } from '../constants/strings';
import { services } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Grid from '../components/layout/Grid';
import FeatureCard from '../components/ui/FeatureCard';

export const ServicesSection = () => (
  <Section id="services" background="soft">
    <Heading
      kicker={strings.sections.services.kicker}
      title={strings.sections.services.title}
      description={strings.sections.services.description}
    />
    <Grid cols={4} gap="md">
      {services.map((service, index) => (
        <FeatureCard key={service.id} {...service} index={index} />
      ))}
    </Grid>
  </Section>
);

export default ServicesSection;
