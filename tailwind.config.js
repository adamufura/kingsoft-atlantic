/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Metallic gold
          50: '#F5E8C8',
          100: '#EED9A3',
          200: '#E2C270',
          300: '#D4AF37',
          400: '#B8941F',
          500: '#9A7A15',
          600: '#7C600F',
          700: '#5E4709',
          800: '#402F06',
          900: '#221803',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Deep black
          50: '#4A4A4A',
          100: '#3D3D3D',
          200: '#303030',
          300: '#242424',
          400: '#1A1A1A',
          500: '#0F0F0F',
          600: '#0A0A0A',
          700: '#050505',
          800: '#000000',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
