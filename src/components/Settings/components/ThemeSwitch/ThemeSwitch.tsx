import { Switch } from "@heroui/switch";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useLangContext } from "../../../../context/LangContext";
import { useThemeContext } from "../../../../context/ThemeContext";

const ThemeSwitch = () => {
  const translations = useLangContext().translations;
  const { isDarkMode, toggleTheme } = useThemeContext();
  if (!translations.settings) return null;

  return (
    <Switch
      data-testid="theme-switch"
      isSelected={!isDarkMode}
      onValueChange={toggleTheme}
      size="sm"
      thumbIcon={
        isDarkMode ? <FaMoon /> : <MdSunny />
      }
      classNames={{
        thumb: "bg-transparent group-data-[selected=true]:ms-8",
        wrapper: "bg-main dark:bg-bg-soft w-14 h-6",
        label: "text-foreground-soft dark:text-foreground font-semibold text-xs font-inter tracking-wide uppercase hidden mobile:block",
        thumbIcon: "text-yellow"
      }}
    >
      {isDarkMode ? translations.settings.theme.light : translations.settings.theme.dark}
    </Switch>
  )
}

export default ThemeSwitch