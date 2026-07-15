import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, '../src/data/source.html');
const html = readFileSync(htmlPath, 'utf-8');

const cardRegex = /<a class="country-card" href="#country-([^"]+)"><div class="flag">([^<]+)<\/div><h3>([^<]+)<\/h3><p>([^<]+)<\/p>/g;
const cards = [];
let match;
while ((match = cardRegex.exec(html)) !== null) {
  cards.push({ slug: match[1], flag: match[2].trim(), name: match[3].trim(), shortDescription: match[4].trim() });
}

const articleRegex = /<article class="country-detail" id="country-([^"]+)">([\s\S]*?)<\/article>/g;
const countries = [];

while ((match = articleRegex.exec(html)) !== null) {
  const slug = match[1];
  const content = match[2];
  const card = cards.find((c) => c.slug === slug) || {};

  const name = content.match(/<h3>([^<]+)<\/h3>/)?.[1]?.trim() || card.name;
  const flag = content.match(/<div class="bigflag">([^<]+)<\/div>/)?.[1]?.trim() || card.flag;
  const description = content.match(/<h3>[^<]+<\/h3>\s*<p>([^<]+)<\/p>/)?.[1]?.trim() || '';

  const badges = [...content.matchAll(/<div class="badge"><span>[^<]*<\/span>\s*([^<]+)<\/div>/g)].map((m) => m[1].trim());

  const facts = {};
  [...content.matchAll(/<div class="fact"><small>([^<]+)<\/small><b>([^<]+)<\/b><\/div>/g)].forEach((m) => {
    const key = m[1].trim().replace(/\s+/g, '_').toLowerCase();
    facts[key] = m[2].trim();
  });

  const whyChoose = [...content.matchAll(/<h4>Why Students Choose[^<]*<\/h4><ul>([\s\S]*?)<\/ul>/g)]
    .flatMap((m) => [...m[1].matchAll(/<li>([^<]+)<\/li>/g)].map((li) => li[1].trim()));

  const studyAreas = [...content.matchAll(/<h4>Popular Study Areas<\/h4><ul>([\s\S]*?)<\/ul>/g)]
    .flatMap((m) => [...m[1].matchAll(/<li>([^<]+)<\/li>/g)].map((li) => li[1].trim()));

  const sourceNote = content.match(/<div class="source-note">([^<]+)<\/div>/)?.[1]?.trim() || '';
  const applyName = content.match(/setDestination\('([^']+)'\)/)?.[1] || name;

  const region = badges.find((b) => b.startsWith('Region:'))?.replace('Region: ', '') || '';
  const currency = badges.find((b) => b.startsWith('Currency:'))?.replace('Currency: ', '') || facts.currency || '';
  const studentCities = badges.find((b) => b.startsWith('Student cit'))?.replace(/Student cities?: /, '') || '';

  countries.push({
    id: slug,
    slug,
    name,
    applyName,
    flag,
    shortDescription: card.shortDescription || description.slice(0, 120),
    description,
    region,
    currency,
    studentCities,
    badges,
    facts: {
      capital: facts.capital || '',
      currency: facts.currency || currency,
      languages: facts.languages || '',
      climate: facts.climate || '',
      bestFor: facts.best_for || '',
      tuitionFeeRange: facts.tuition_fee_range || '',
      livingCost: facts.living_cost || '',
      apjNote: facts.apj_note || '',
      processingTime: facts.processing_time || 'Varies by embassy — APJ will advise',
    },
    whyChoose,
    studyAreas,
    sourceNote,
    featured: ['uk', 'australia', 'canada', 'france', 'malaysia', 'dubai'].includes(slug),
    heroGradient: getGradient(slug),
  });
}

function getGradient(slug) {
  const gradients = {
    uk: 'from-blue-900 via-indigo-800 to-sky-600',
    australia: 'from-amber-600 via-orange-500 to-sky-500',
    canada: 'from-red-700 via-red-500 to-white',
    france: 'from-blue-800 via-blue-600 to-red-500',
    malaysia: 'from-emerald-600 via-teal-500 to-amber-400',
    dubai: 'from-amber-500 via-orange-400 to-sky-400',
    malta: 'from-red-600 via-white to-gray-200',
    singapore: 'from-red-500 via-white to-gray-100',
    spain: 'from-red-600 via-yellow-400 to-red-600',
    latvia: 'from-red-700 via-white to-red-700',
    cyprus: 'from-orange-500 via-white to-green-600',
    russia: 'from-blue-700 via-white to-red-600',
    newzealand: 'from-blue-900 via-white to-red-600',
    greece: 'from-blue-700 via-white to-blue-700',
    lithuania: 'from-yellow-500 via-green-600 to-red-600',
    hungary: 'from-red-600 via-white to-green-600',
  };
  return gradients[slug] || 'from-navy-900 via-sky-600 to-gold-400';
}

const output = `// Auto-generated from APJ HTML source — do not edit manually
export const countries = ${JSON.stringify(countries, null, 2)};

export const featuredCountryIds = countries.filter((c) => c.featured).map((c) => c.id);

export const getCountryBySlug = (slug) => countries.find((c) => c.slug === slug);

export const getCountryById = (id) => countries.find((c) => c.id === id);
`;

writeFileSync(join(__dirname, '../src/data/countries.js'), output);
console.log(`Parsed ${countries.length} countries`);
