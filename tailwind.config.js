/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // === CUSTOM COLORS ===
      colors: {
        // Brand Colors
        "primary-dark-purple": "var(--color-primary-dark-purple)",
        "primary-tyrian-purple": "var(--color-primary-tyrian-purple)",
        "primary-folly": "var(--color-primary-folly)",
        "primary-licorice": "var(--color-primary-licorice)",
        "secondary-melon": "var(--color-secondary-melon)",
        "secondary-light": "var(--color-secondary-light)",
        "eerie-black": "var(--color-eerie-black)",
        jet: "var(--color-jet)",
        blush: "var(--color-blush)",
        "china-rose": "var(--color-china-rose)",
        "lavender-web": "var(--color-lavender-web)",
        "ghost-white": "var(--color-ghost-white)",
        "dim-gray": "var(--color-dim-gray)",
        "anti-flash-white": "var(--color-anti-flash-white)",
        seasalt: "var(--color-seasalt)",
        gray: "var(--color-gray)",
        silver: "var(--color-silver)",
        "medium-slate-blue": "var(--color-medium-slate-blue)",
        onyx: "var(--color-onyx)",
        magnolia: "var(--color-magnolia)",
        tekhelet: "var(--color-tekhelet)",
        melon: "var(--color-melon)",
      },

      // === CUSTOM FONTS ===
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        "gideon-roman": ["var(--font-gideon-roman)", "serif"],
        "dm-serif-display": ["var(--font-dm-serif-display)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};