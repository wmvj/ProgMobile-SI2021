/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        accent: "#00ADB5",
        text: "#EEEEEE",
        primario: "var(--cor-primaria)",
        secundario: "var(--cor-secundaria)"
      },
    },
  },
  plugins: [],
}

