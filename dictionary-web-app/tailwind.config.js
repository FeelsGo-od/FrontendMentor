/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '05': '#050505',
        '1F': '#1F1F1F',
        '2D': '#2D2D2D',
        '3A': '#3A3A3A',
        '75': '#757575',
        'E9': '#E9E9E9',
        'F4': '#F4F4F4',
        'FF': '#FFFFFF',
        'violet': '#A445ED',
        'red': '#FF5252'
      },
      fontFamily: {
        sans: ['Inter'],
        mono: ['var(--font-roboto-mono)'],
        lora: ['var(--font-lora)'],
      },
      screens: {
        'tn': {'max': '297px'},
        'mxl': {'min': '1440px'}
      }
    },
  },
  plugins: [],
}
