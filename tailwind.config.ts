import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rub: {
          "0%": {
            opacity: "1",
            transform: "translateX(2px)",
          },
          "30%": {
            opacity: "0.2",
            transform: "translateX(100px)",
          },
          "60%": {
            opacity: "0.2",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "rub-effect": "rub 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
