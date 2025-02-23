import LangSelect from "./components/LangSelect/LangSelect"
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch"

const Settings = () => {
  return (
    <div className="my-4 w-full h-8 flex items-center justify-end gap-4 text-foreground-soft">
      <ThemeSwitch />
      <hr className="h-4 border-l-2" />
      <LangSelect />
    </div>
  )
}

export default Settings