import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        secondary: "#080808",
        textSecondary: "#8F9094",
        button1: "#3CCF91",
        orange100: "#FA934F",
        dark600: "rgb(30, 32, 41)",
        dark700: "#111111",
        gray100: "rgba(255, 255, 255, 0.16)",
        gray200: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        xs: "420px",
        xmd: "900px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
