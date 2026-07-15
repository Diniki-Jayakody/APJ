import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCountryBySlug } from '../data/countries';
import { getCountryImage } from '../data/countryImages';
import { theme } from '../constants/theme';
import SEO from '../components/layout/SEO';
import Container from '../components/layout/Container';
import LazyImage from '../components/ui/LazyImage';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/variants';

const CountryDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const country = getCountryBySlug(slug);
  const image = country ? getCountryImage(country.slug) : null;

  if (!country) {
    return (
      <Container className="py-32 text-center">
        <h1 className="text-2xl font-semibold text-navy-900">Country not found</h1>
        <Button to="/" variant="primary" className="mt-6">Back Home</Button>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={`Study in ${country.name}`}
        description={country.description}
        path={`/countries/${country.slug}`}
      />
      <div className="bg-soft pt-8 pb-20">
        <Container>
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            ← Back
          </Button>
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-brand-md"
          >
            <div className="relative">
              <LazyImage
                src={image.src}
                alt={image.alt}
                aspectRatio="21 / 9"
                className="max-h-72"
              />
              <div
                className="absolute inset-0"
                style={{ background: theme.gradients.cardOverlay }}
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <span className="text-5xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{country.name}</h1>
                <p className="mt-2 max-w-2xl font-normal leading-relaxed text-sky-100/90">{country.description}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="mb-6 flex flex-wrap gap-2">
                {country.badges.map((badge) => (
                  <span key={badge} className="rounded-xl border border-line bg-sky-50 px-4 py-2 text-sm font-medium text-navy-900">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {Object.entries({
                  Capital: country.facts.capital,
                  Currency: country.facts.currency,
                  Climate: country.facts.climate,
                  'Best For': country.facts.bestFor,
                  'Living Cost': country.facts.livingCost,
                  'APJ Note': country.facts.apjNote,
                }).map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-line bg-gradient-to-b from-white to-sky-50 p-4">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-navy-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-line p-5">
                  <h2 className="font-semibold text-navy-900">Why Students Choose {country.name}</h2>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted">
                    {country.whyChoose.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line p-5">
                  <h2 className="font-semibold text-navy-900">Popular Study Areas</h2>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted">
                    {country.studyAreas.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" onClick={() => navigate('/#countries')}>
                  Back to Countries
                </Button>
              </div>
            </div>
          </motion.article>
        </Container>
      </div>
    </>
  );
};

export default CountryDetailPage;
