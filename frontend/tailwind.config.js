/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "em": {
          "xs": ".75em",
          "s": ".87em",
          "md": "1em",
          "lg": "1.12em",
          "xl": "1.25em",
          "2xl": "1.5em",
          "3xl": "1.87em",
          "4xl": "2.25em",
        }
      },
      lineHeight:{
        "em": {
          "xs": "0.75em",
          "s": "0.87em",
          "md": "1em",
          "lg": "1.12em",
          "xl": "1.25em",
          "2xl": "1.5em",
          "3xl": "1.87em",
          "4xl": "2.25em",
        }
      },
      colors: {
        "highlight": "var(--color-highlight)",
        "highlight-muted": "var(--color-highlight-muted)",
        "primary-bg": "var(--color-background)",
        "primary-bg-muted": "var(--color-background-muted)",
        "primary-bg-hard": "var(--color-background-hard)",
        "primary": "var(--color-text)",
        "primary-muted": "var(--color-text-muted)",
      }
    },
  },
  plugins: [],
  safelist: [],
};
