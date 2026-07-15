/**
 * Destination hero images — Unsplash (optimized WebP via auto=format)
 * Centralized so components never hardcode image URLs.
 */
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const countryImages = {
  malta: {
    src: unsplash('1551882547-ff40c63fe5fa'),
    alt: 'Valletta harbour, Malta',
  },
  dubai: {
    src: unsplash('1512453979798-5ea266f8880c'),
    alt: 'Dubai skyline at dusk',
  },
  malaysia: {
    src: unsplash('1596422846543-75c6fc197f07'),
    alt: 'Kuala Lumpur Petronas Towers',
  },
  singapore: {
    src: unsplash('1525626928542-5545f399a9af'),
    alt: 'Marina Bay Sands, Singapore',
  },
  spain: {
    src: unsplash('1583422409516-28912a58ef52'),
    alt: 'Sagrada Familia, Barcelona',
  },
  france: {
    src: unsplash('1502602898657-3e91760cbb34'),
    alt: 'Eiffel Tower, Paris',
  },
  latvia: {
    src: unsplash('1578662996442-48f60103fc96'),
    alt: 'Riga old town, Latvia',
  },
  cyprus: {
    src: unsplash('1601581875250-2af513f57b9d'),
    alt: 'Mediterranean coast, Cyprus',
  },
  russia: {
    src: unsplash('1513326738677-b964753b0a76'),
    alt: 'Saint Basil Cathedral, Moscow',
  },
  uk: {
    src: unsplash('1513635269975-59663e0ac1ad'),
    alt: 'London skyline with Tower Bridge',
  },
  australia: {
    src: unsplash('1506973035872-a4ec16b8e8d9'),
    alt: 'Sydney Opera House and harbour',
  },
  newzealand: {
    src: unsplash('1469521664192-4dde1001a27f'),
    alt: 'Milford Sound, New Zealand',
  },
  greece: {
    src: unsplash('1613395875278-7bbc394494a8'),
    alt: 'Santorini white buildings and blue sea',
  },
  lithuania: {
    src: unsplash('1605649487212-47bdab064df7'),
    alt: 'Vilnius old town, Lithuania',
  },
  hungary: {
    src: unsplash('1541343677864-2161936a7e93'),
    alt: 'Parliament building, Budapest',
  },
  canada: {
    src: unsplash('1519832971-ade6f4aa930a'),
    alt: 'Moraine Lake, Canadian Rockies',
  },
};

export const getCountryImage = (slug) =>
  countryImages[slug] ?? {
    src: unsplash('1526778548025-fa2f55cda622'),
    alt: 'International travel destination',
  };

export default countryImages;
