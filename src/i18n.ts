import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en_US',
    supportedLngs: ['en_US', 'fr_FR', 'ar_AR'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/local-{{lng}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
