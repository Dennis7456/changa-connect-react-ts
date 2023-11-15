/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    colors: {
      "primary": "#0c6da9",
      "on-primary": "#ffffff",
      "primary-container": "#76f5ff",
      "on-primary-container": "#002022",

      "secondary": "#063f5f",
      "on-secondary": "#ffffff",
      "secondary-container": "#cce8ea",
      "on-secondary-container": "#051f21",

      "tertiary": "#0f3460",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#d7e3ff",
      "on-tertiary-container": "#091b36",

      "error": "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#410002",

      "background": "#fafdfc",
      "on-background": "#191c1c",
      "surface": "#fafdfc",
      "on-surface": "#191c1c",

      "outline": "#6f797a",
      "surface-variant": "#dae4e5",
      "on-surface-variant": "#3f4849",

      "success": "#04a784",
      "info": "#3490dc",
      "warning": "#ecc94b",
      "danger": "#e53e3e"
    },
    extend: {},
  },
  plugins: [],
}

