import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import translationsService from "../../services/translations/translations";
import toast from "../../utils/toast/toast";
import { LangContextValue } from "./LangContext.types";

export const LangContext = createContext<LangContextValue>(null);

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === null) throw new Error("You can only call this hook inside LangContextProvider")
  return context;
}

const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useLocalStorage("lang", "en")
  const [translations, setTranslations] = useLocalStorage("translations", {})
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getTranslations = async () => {
      try {
        const data = lang === "tr" ? await translationsService.getTr() : await translationsService.getEn();
        setTranslations(data[0])
      } catch (error) {
        console.log("Error fetching translations: ", error)
        toast(lang === "tr" ? "Dil güncellenemedi" : "Failed to update language")
      }
      setLoading(false)
    }

    getTranslations();
  }, [lang])

  const toggleLang = () => {
    setLoading(true);
    setLang(lang === "tr" ? "en" : "tr");
    toast(lang === "tr" ? "Dil başarıyla güncellendi" : "Language updated successfully")
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        translations,
        toggleLang,
        loading,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangContextProvider