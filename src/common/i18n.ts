import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from '../locales/en.json';
import zh from '../locales/zh.json';

// Add translations to i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      zhHK: {
        translation: zh,
      },
    },
    fallbackLng: 'en', // Fallback language if translation isn't available
    debug: true, // Enable debug output
    supportedLngs: ['en', 'zhHK'],
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;