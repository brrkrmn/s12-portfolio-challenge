module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", 'serif']
    },
    screens: {
      mobile: "425px",
      tablet: "768px",
      laptop: "1024px",
    },
    extend: {
      animation: {
        blink: "blink 1.4s infinite both",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
      },
      borderWidth: {
        small: "1px",
      },
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          secondary: "var(--color-bg-secondary)",
          soft: "var(--color-bg-soft)"
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
          text: "var(--color-main-text)"
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
