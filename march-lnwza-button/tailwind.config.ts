import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "unchecked-moon": "#FED62E",
        "checked-moon": "#C4C9D2",
        "checked-bg": "#1B1D2A",
        "unchecked-bg": "#3A8DCA",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
