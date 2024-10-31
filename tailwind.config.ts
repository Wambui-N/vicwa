import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px", // Small devices
      md: "768px", // Medium devices (Tablets)
      lg: "1024px", // Large devices (Desktops)
      xl: "1280px", // Extra-large devices
      "2xl": "1536px", // 2X Large devices
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('/Hero Img.png')",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFAF7",
        black: "#171A21",
        green: "#0A4A44",
        orange: "#FF681F",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
};
export default config;
