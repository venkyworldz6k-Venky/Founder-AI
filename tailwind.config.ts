import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#0A0A08",
        primaryText: "#D8D2C4",
        secondaryText: "#9D988B",
        accentOlive: "#94A17C",
        glowBlue: "#9FD8FF",
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        luxury: ['"Bodoni Moda"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        momento: ['"Bodoni Moda"', 'serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        garamond: ['"Bodoni Moda"', 'serif'],
        cinzel: ['"Bodoni Moda"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
