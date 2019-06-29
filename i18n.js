const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
  ignoreRoutes: ['/_next', '/static', '/public'],
  browserLanguageDetection: true,
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  fallbackLng: 'en',
  lng: 'en',
  shallowRouteChange: true,
  localeSubpaths: 'foreign',
  ns: ['common', 'footer'], // need to preload all the namespaces
  caches: ['cookie']
});
