import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { ThemeContextValue } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextValue>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) throw new Error("You can only call this hook inside ThemeContextProvider");
  return context;
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
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