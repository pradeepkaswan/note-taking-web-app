import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif", ...defaultTheme.fontFamily.serif],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "preset-1": [
          "1.5rem",
          { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.5px" },
        ],
        "preset-2": [
          "1.25rem",
          { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.5px" },
        ],
        "preset-3": [
          "1rem",
          { fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.3px" },
        ],
        "preset-4": [
          "0.875rem",
          { fontWeight: "500", lineHeight: "1.2", letterSpacing: "-0.2px" },
        ],
        "preset-5": [
          " 0.875rem",
          { fontWeight: "400", lineHeight: "1.2", letterSpacing: "-0.2px" },
        ],
        "preset-6": [
          "0.75rem",
          { fontWeight: "400", lineHeight: "1.2", letterSpacing: "-0.2px" },
        ],
      },
      colors: {
        neutral: {
          0: "#FFFFFF",
          50: "#F5F7FA",
          100: "#F3F5F8",
          200: "#E0E4EA",
          300: "#CACFD8",
          400: "#232530",
          500: "#717784",
          600: "#525866",
          700: "#2B303B",
          800: "#232530",
          900: "#191B25",
          950: "#0E121B",
        },
        blue: {
          50: "#EBF1FF",
          500: "#335CFF",
          700: "#2547D0",
        },
        green: {
          100: "#191B25",
          500: "#21C16B",
        },
        red: {
          100: "#FFD5D8",
          500: "#FB3748",
        },
      },
      boxShadow: {
        md: "0px 4px 6px rgba(240, 240, 240, 0.60)",
        lg: "0px 8px 12px rgba(240, 240, 240, 0.60)",
      },
      borderRadius: {},
      spacing: {},
    },
  },
  plugins: [forms],
};
export default config;
