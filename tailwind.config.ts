/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#F8F9FF',
        customGreen: '#0698F9',
        customOrange: '#FF6600',
        customGray: '#2D2D2D',
        lightblue: '#E5F4F2',
        darkGray: '#111827',
        lightGray: '#374151',
        lightGrey: '#EEEEEE',
        textGray: '#0C1623',
        textGradient: 'rgba(29, 38, 58, 0.9)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};