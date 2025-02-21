module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      satisfy: ['"Satisfy"', "cursive"],
    },
    screens: {
      mobile: "425px",
      tablet: "768px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          secondary: "var(--color-bg-secondary)",
        },
        foreground: {
          DEFAULT: "var(--color-foreground)",
          secondary: "var(--color-foreground-secondary)",
          soft: "var(--color-foreground-soft)",
        },
        main: {
          DEFAULT: "var(--color-main)",
          light: "var(--color-main-light)",
          dark: "var(--color-main-dark)",
          soft: "var(--color-main-soft)",
        },
        divider: "var(--color-divider)",
        red: "var(--color-red)",
        green: "var(--color-green)",
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
      },
    },
  },
  plugins: [],
};
