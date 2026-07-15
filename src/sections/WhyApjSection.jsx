import { strings } from '../constants/strings';
import { whyApjTimeline } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Timeline from '../components/ui/Timeline';

export const WhyApjSection = () => (
  <Section id="why-apj" background="soft">
    <Heading
      kicker={strings.sections.whyApj.kicker}
      title={strings.sections.whyApj.title}
      description={strings.sections.whyApj.description}
    />
    <Timeline items={whyApjTimeline} />
  </Section>
);

export default WhyApjSection;
