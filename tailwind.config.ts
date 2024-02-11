import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
export default config;
