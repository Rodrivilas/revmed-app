/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#FC9807',
        secondary: {
          DEFAULT: '#448C6E',
          100: '#3dc28b'
        },
        error: '#C14D4D',
        success: '#8DD486'
      },

      fontFamily: {
        'roboto-flex': ['RobotoFlex-Regular', 'sans-serif'],
        'nunito-regular': ['NunitoSans_10pt-Regular', 'sans-serif'],
        'nunito-light': ['NunitoSans_10pt-Light', 'sans-serif'],
        'nunito-black': ['NunitoSans_10pt-Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}