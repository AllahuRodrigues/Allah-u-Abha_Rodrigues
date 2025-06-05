import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        muted: "var(--muted)",
        accent: {
          DEFAULT: "rgb(120, 119, 198)",
          foreground: "#ffffff",
        },
        border: "rgba(255, 255, 255, 0.1)",
        primary: {
          DEFAULT: "rgb(120, 119, 198)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#EC4899",
          foreground: "#ffffff",
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
      });
    }),
  ],
};

export default config;
