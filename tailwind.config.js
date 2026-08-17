/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm near-black ground, single signal hue. Deliberately not the
        // slate-900/indigo-500 default — see the design notes in the README.
        bg: '#0c0a09',
        card: '#15120f',
        border: '#2b2521',
        accent: '#f0b429',
        sky: '#e08b3a',
        textPrimary: '#f6f1e9',
        textSecondary: '#a49b90',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

