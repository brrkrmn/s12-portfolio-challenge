import { Switch } from "@heroui/switch";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useThemeContext } from "../../../../context/ThemeContext";

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Switch
      isSelected={!isDarkMode}
      onValueChange={toggleTheme}
      size="sm"
      thumbIcon={
        isDarkMode ? <FaMoon /> : <MdSunny />
      }
      classNames={{
        thumb: "bg-transparent group-data-[selected=true]:ms-8",
        wrapper: "bg-main dark:bg-bg-soft w-14 h-6",
        label: "text-foreground-soft dark:text-foreground font-semibold text-xs font-inter tracking-wide",
        thumbIcon: "text-yellow"
      }}
    >
      {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
    </Switch>
  )
}

export default ThemeSwitch