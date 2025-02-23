import { Switch } from "@heroui/switch";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useThemeContext } from "../../../../context/ThemeContext";

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Switch
      isSelected={isDarkMode}
      onValueChange={toggleTheme}
      size="sm"
      thumbIcon={
        isDarkMode ? <MdSunny /> : <FaMoon />
      }
      classNames={{
        thumb: "bg-transparent group-data-[selected=true]:ms-6",
        wrapper: "bg-main w-12 h-6",
        label: "text-foreground-soft font-semibold text-xs font-inter tracking-wide",
        thumbIcon: "text-yellow"
      }}
    >
      {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
    </Switch>
  )
}

export default ThemeSwitch