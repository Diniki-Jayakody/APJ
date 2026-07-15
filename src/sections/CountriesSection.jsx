import { useNavigate } from 'react-router-dom';
import { strings } from '../constants/strings';
import { countries, featuredCountryIds } from '../data/countries';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Grid from '../components/layout/Grid';
import CountryCard from '../components/ui/CountryCard';
import CountryModal, { useCountryModal } from '../components/ui/CountryModal';
import Button from '../components/ui/Button';
import { getCountryRoute } from '../constants/routes';

export const CountriesSection = () => {
  const navigate = useNavigate();
  const { open, close, isOpen } = useCountryModal();

  const featured = countries.filter((c) => featuredCountryIds.includes(c.id));

  const handleViewDetails = (country) => {
    close();
    navigate(getCountryRoute(country.slug));
  };

  return (
    <Section id="countries" background="gradient">
      <Heading
        kicker={strings.sections.countries.kicker}
        title={strings.sections.countries.title}
        description={strings.sections.countries.description}
      />
      <Grid cols={3} gap="lg">
        {featured.map((country) => (
          <CountryCard key={country.id} country={country} onViewDetails={handleViewDetails} />
        ))}
      </Grid>
      <div className="mt-10 text-center">
        <Button variant="outline" size="lg" onClick={open}>
          {strings.sections.countries.exploreMore}
        </Button>
      </div>
      <CountryModal
        isOpen={isOpen}
        onClose={close}
        countries={countries}
        onViewDetails={handleViewDetails}
      />
    </Section>
  );
};

export default CountriesSection;
