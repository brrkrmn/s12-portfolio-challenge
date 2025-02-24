import { Translations } from "../../services/translations/translations.types";

export type LangContextValue = null | {
  lang: Lang;
  translations: Translations;
  loading: boolean;
  toggleLang: () => void;
}

export type Lang = "tr" | "en"