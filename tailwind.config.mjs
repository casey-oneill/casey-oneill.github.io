/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#B5838D",
      secondary: "#6D6875",
      accent: "#E05438",
      light: "#FFF5EA",
      dark: "#3F3C46",
    },
    fontFamily: {
      display: ["Playfair Display"],
      body: ["Lora"],
    },
    fontSize: {
      base: "1rem",
      lg: "1.25rem",
      "xl": "1.5rem",
      "2xl": "2.125rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
