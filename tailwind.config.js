/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-corporate-pro)"],
        mono: ["var(--font-ibm-mono)"],
      },
      colors: {
        primaryMain: "#4c4cff",
      },
    },
  },
  plugins: [],
};
