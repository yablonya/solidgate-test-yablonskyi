import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "Eng",
  uk: "Укр"
} as const;

export type SupportedLng = keyof typeof supportedLngs;

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "uk",
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;