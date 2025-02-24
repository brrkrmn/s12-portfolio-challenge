export type ThemeContextValue = null | {
  isDarkMode: Theme;
  toggleTheme: () => void;
}

export type Theme = boolean