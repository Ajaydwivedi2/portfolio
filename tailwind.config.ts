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
        background: "#12141D",
        secondary: "#080808",
        complement: "#FA934F",
        displayColor: "#FFFFFF",
        textPrimary: "#D1D5DB",
        textSecondary: "#8F9094",
        button1: "#3CCF91",
        button2: "#F6A20E",
        button3: "#5132BF",
        borderColor: "#111111",
        navBorder: "rgb(30, 32, 41)",
        hoverColor: "rgba(255, 255, 255, 0.16)",
        navHoverColor: "rgba(255, 255, 255, 0.08)",
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
