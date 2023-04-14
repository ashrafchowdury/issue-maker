/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { min: "1400px" },
        // => @media (min-width: 1279px) { ... }
        lg: { min: "1023px" },
        md: { min: "767px" },
        sm: { min: "550px" },
      },
      colors: {
        light: "#e2e8f0",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
