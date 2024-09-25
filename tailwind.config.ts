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
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#3537E8",
        heading: "#3537E8",
      },
      keyframes: {
        rotateX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
      },
      animation: {
        rotateX: "rotateX 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
