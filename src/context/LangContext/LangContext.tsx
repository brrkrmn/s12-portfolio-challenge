import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useGetEn, useGetTr } from "../../hooks/useTranslations";
import toast from "../../utils/toast/toast";
import { LangContextValue } from "./LangContext.types";

export const LangContext = createContext<LangContextValue>(null);

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === null) throw new Error("You can only call this hook inside LangContextProvider")
  return context;
}

const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useLocalStorage("lang", "en");
  const { data: trTranslations } = useGetTr();
  const { data: enTranslations } = useGetEn();

  const translations = useMemo(() => {
    return lang === "tr"
      ? trTranslations && trTranslations[0]
      : enTranslations && enTranslations[0]
  }, [lang, trTranslations, enTranslations]);

  const toggleLang = () => {
    setLang(lang === "tr" ? "en" : "tr");
    toast(lang === "en" ? "Dil başarıyla güncellendi" : "Language updated successfully")
  }

  if (translations) return (
    <LangContext.Provider
      value={{
        lang,
        translations,
        toggleLang,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangContextProvider