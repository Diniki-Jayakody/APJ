/**
 * Contact data sourced from src/assets/contacts/contacts.txt
 * Keep this file aligned with that source of truth.
 */
const formatPhone = (localNumber) => {
  const digits = String(localNumber).replace(/\D/g, '');
  const spaced = digits.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3');
  return {
    display: spaced,
    link: `tel:+94${digits.slice(1)}`,
    e164: `94${digits.slice(1)}`,
  };
};

const kuliyapitiyaPhones = ['0743327985', '0701962029', '0712828375', '0702676450'].map(formatPhone);
const mataraPhones = ['0772828375', '0772727304', '0714003037'].map(formatPhone);
const whatsapp = formatPhone('0743327985');

export const contact = {
  brand: 'APJ Consultancy',
  tagline: 'Your Dream, Our Guidance',
  email: 'info@apjconsultancy.com',
  website: 'www.apjconsultancy.lk',
  websiteUrl: 'https://www.apjconsultancy.lk',
  whatsapp: whatsapp.e164,
  whatsappDisplay: whatsapp.display,
  whatsappUrl: `https://wa.me/${whatsapp.e164}`,
  phones: kuliyapitiyaPhones,
  branches: [
    {
      id: 'kuliyapitiya',
      name: 'Kuliyapitiya Branch',
      address: '114/4 Main Street, 02nd Floor, Union Arcade, Kuliyapitiya',
      phones: kuliyapitiyaPhones,
      phone: kuliyapitiyaPhones[0].display,
      phoneLink: kuliyapitiyaPhones[0].link,
      mapUrl: 'https://maps.app.goo.gl/5qest8xRJWSR79WP8',
      mapEmbedQuery: 'Union Arcade Kuliyapitiya Sri Lanka',
    },
    {
      id: 'matara',
      name: 'Matara Branch',
      address: '413/6 Akuressa Road, Hiththatiya, Matara',
      phones: mataraPhones,
      phone: mataraPhones[0].display,
      phoneLink: mataraPhones[0].link,
      mapUrl: 'https://maps.app.goo.gl/6sPrZyLYTJ2RJ7rEA',
      mapEmbedQuery: 'Hiththatiya Matara Sri Lanka',
    },
  ],
  foundedYear: 2022,
};

export default contact;
