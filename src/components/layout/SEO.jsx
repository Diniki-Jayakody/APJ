import { Helmet } from 'react-helmet-async';
import { strings } from '../../constants/strings';
import { contact } from '../../constants/contact';

export const SEO = ({ title, description, path = '/' }) => {
  const pageTitle = title ? `${title} | ${strings.brand.name}` : strings.seo.title;
  const pageDescription = description || strings.seo.description;
  const siteOrigin = contact.websiteUrl || `https://${contact.website}`;
  const url = `${siteOrigin}${path}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: strings.brand.name,
    description: pageDescription,
    url,
    email: contact.email,
    telephone: contact.whatsappDisplay,
    address: contact.branches.map((b) => ({
      '@type': 'PostalAddress',
      streetAddress: b.address,
      addressLocality: b.name,
      addressCountry: 'LK',
    })),
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={strings.seo.keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteOrigin}/apj_logo.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${siteOrigin}/apj_logo.png`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
