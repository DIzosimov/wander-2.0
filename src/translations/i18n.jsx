import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './langs/en.json'
import deTranslations from './langs/de.json'
import svTranslations from './langs/sv.json'

import setYupLocale from './yupLocale'

const translations = {
  en: {
    translation: enTranslations
  },
  de: {
    translation: deTranslations
  },
  sv: {
    translation: svTranslations
  }
}

setYupLocale()

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    whitelist: ['en', 'de', 'sv'],
    load: 'languageOnly',
    cleanCode: true
  })

export default i18n