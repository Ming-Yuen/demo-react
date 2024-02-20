import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enTranslation from '../locales/en/translation.json';
import zhHKTranslation from '../locales/zhHK/translation.json';
import zhCNTranslation from '../locales/zhCN/translation.json';

// Add translations to i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      zhHK: {
        translation: zhHKTranslation,
      },
      zhCN: {
        translation: zhCNTranslation,
      },
    },
    fallbackLng: 'en', // Fallback language if translation isn't available
    debug: true, // Enable debug output
    supportedLngs: ['en', 'zhCN', 'zhHK'],
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;