import { Switch } from "@heroui/switch";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Switch
      isSelected={darkMode}
      onValueChange={setDarkMode}
      size="sm"
      thumbIcon={
        darkMode ? <MdSunny /> : <FaMoon />
      }
      classNames={{
        thumb: "bg-transparent group-data-[selected=true]:ms-6",
        wrapper: "bg-main w-12 h-6",
        label: "text-foreground-soft font-semibold text-xs font-inter tracking-wide",
        thumbIcon: "text-yellow"
      }}
    >
      DARK MODE
    </Switch>
  )
}

export default ThemeSwitch