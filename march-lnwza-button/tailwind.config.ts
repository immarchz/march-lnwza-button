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
        "unchecked-opacity-3": "#5aa2d6",
        "unchecked-opacity-2": "#93c2e6",
        "unchecked-opacity-1": "#c6ddf1",
        "checked-opacity-1": "#3d4467",
        "checked-opacity-2": "#353b57",
        "checked-opacity-3": "#30354a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
