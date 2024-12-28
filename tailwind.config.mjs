/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    extend: {},
  },
  plugins: [],
};
