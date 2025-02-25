import LangSelect from "./components/LangSelect/LangSelect";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

const Settings = () => {
  return (
    <section className="my-4 w-full h-8 flex items-center justify-end gap-4 text-foreground-soft">
      <ThemeSwitch />
      <hr className="ml-2 h-4 border-l-2" />
      <LangSelect />
    </section>
  )
}

export default Settings