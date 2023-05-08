/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "em-xs": ".75em",
        "em-s": ".87em",
        "em-md": "1em",
        "em-lg": "1.12em",
        "em-xl": "1.25em",
        "em-2xl": "1.5em",
        "em-3xl": "1.87em",
        "em-4xl": "2.25em",
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
