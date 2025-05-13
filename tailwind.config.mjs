/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mexico: {
          green: "#046A38",
          white: "#FFFFFF",
          red: "#CE1126",
          gold: "#8B5A2B",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Serif", "serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/images/paper-texture.jpg')",
      },
      animation: {
        wave: "wave 2.5s ease-in-out infinite",
        "eagle-float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};