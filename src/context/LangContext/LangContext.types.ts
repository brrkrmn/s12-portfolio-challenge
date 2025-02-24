export type LangContextValue = null | {
  lang: Lang;
  translations: Translations;
  loading: boolean;
  toggleLang: () => void;
}

export type Lang = "tr" | "en"

export type Translations = {
  [key: string]: string | Translations;
};