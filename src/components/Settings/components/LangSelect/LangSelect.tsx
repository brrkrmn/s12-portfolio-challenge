import { Spinner } from "@heroui/spinner";
import { useLangContext } from "../../../../context/LangContext";

const LangSelect = () => {
  const { toggleLang, translations, lang, loading} = useLangContext();
  if (!translations.settings) return null;

  if (loading) return <Spinner
    variant="dots"
    size="md"
    classNames={{
      base: "w-36",
      dots: "text-main bg-main"
    }}
  />

   return (
    <button
      aria-label={lang === "en" ? "Dili Türkçe'ye değiştir" : "Switch language to English"}
      data-testid="lang-switch"
      onClick={toggleLang}
      className={`cursor-pointer w-36 flex ${lang === "tr" ? "delay-300 flex-row-reverse gap-1" : "delay-300 flex-row"} uppercase items-center justify-center text-foreground-soft font-semibold text-xs font-inter tracking-wide`}
    >
      <p className="text-main">
        {translations.settings.lang.lang}
      </p>
      <p>
        {translations.settings.lang.text}
      </p>
    </button>
  )
}

export default LangSelect
