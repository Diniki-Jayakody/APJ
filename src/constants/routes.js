export const ROUTES = {
  HOME: '/',
  COUNTRIES: '/countries',
  COUNTRY_DETAIL: '/countries/:slug',
  ABOUT: '/#about',
  SERVICES: '/#services',
  PROCESS: '/#process',
  APPLY: '/#apply',
  CONTACT: '/#contact',
  SUCCESS_STORIES: '/#success-stories',
};

export const getCountryRoute = (slug) => `/countries/${slug}`;
