import { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeContextValue } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextValue>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) throw new Error("You can only call this hook inside Theme Context Provider");
  return context;
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<Theme>(false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider