import { Translations } from "../../services/translations/translations.types";

export type LangContextValue = null | {
  lang: Lang;
  translations: Translations;
  toggleLang: () => void;
}

export type Lang = "tr" | "en"