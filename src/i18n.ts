import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/local-en_US.json';
import fr from './locales/local-fr_FR.json';
import ar from './locales/local-ar_AR.json';

i18n
  .use(LanguageDetector) // optional: detect user language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar'],
    interpolation: { escapeValue: false },
  });

export default i18n;
