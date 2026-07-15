
import greece from '../assets/countries/greece.jpg';
import hungary from '../assets/countries/hungary.jpg';
import latvia from '../assets/countries/latvia.jpg';
import russia from '../assets/countries/russia.jpg';
import spain from '../assets/countries/spain.jpg';
import singapore from '../assets/countries/singapore.jpg';
import canada from '../assets/countries/canada.jpg';

/**
 * Destination hero images — Unsplash (optimized via auto=format)
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
    src: singapore,
    alt: 'Marina Bay Sands skyline, Singapore',
  },
  spain: {
    src: spain,
    alt: 'Barcelona cityscape, Spain',
  },
  france: {
    src: unsplash('1502602898657-3e91760cbb34'),
    alt: 'Eiffel Tower, Paris',
  },
  latvia: {
    src: latvia,
    alt: 'Riga old town, Latvia',
  },
  cyprus: {
    src: unsplash('1507525428034-b723cf961d3e'),
    alt: 'Mediterranean coastline, Cyprus',
  },
  russia: {
    src: russia,
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
    src: unsplash('1469854523086-cc02fe5d8800'),
    alt: 'Mountain lake landscape, New Zealand',
  },
  greece: {
    src: greece,
    alt: 'Santorini white buildings and blue sea',
  },
  lithuania: {
    src: unsplash('1605649487212-47bdab064df7'),
    alt: 'Vilnius old town, Lithuania',
  },
  hungary: {
    src: hungary,
    alt: 'Parliament building along the Danube, Budapest',
  },
  canada: {
    src: canada,
    alt: 'Moraine Lake, Canadian Rockies',
  },
};

export const getCountryImage = (slug) =>
  countryImages[slug] ?? {
    src: unsplash('1526778548025-fa2f55cda622'),
    alt: 'International travel destination',
  };

export default countryImages;
