import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translateEN from "./en.json"
import translateAR from "./ar.json"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translateEN,
      },
      ar: {
        translation: translateAR,
      },
    },
  });

export default i18n
