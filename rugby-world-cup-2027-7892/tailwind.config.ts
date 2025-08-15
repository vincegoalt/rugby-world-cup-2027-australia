import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'rugby-green': {
          DEFAULT: '#006A4E',
          50: '#E6F7F2',
          100: '#CCF0E6',
          200: '#99E1CD',
          300: '#66D2B3',
          400: '#33C39A',
          500: '#006A4E',
          600: '#005A42',
          700: '#004A36',
          800: '#003A2A',
          900: '#002A1E',
        },
        'rugby-gold': {
          DEFAULT: '#FFD700',
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFF3A3',
          400: '#FFEF85',
          500: '#FFD700',
          600: '#E6C200',
          700: '#CCAD00',
          800: '#B39800',
          900: '#998300',
        },
        'accent-blue': '#0066CC',
        'accent-red': '#CC0000',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'text-light': '#9CA3AF',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
          '70%': { transform: 'translate3d(0, -4px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slideUp': {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      boxShadow: {
        'rugby': '0 10px 25px -3px rgba(0, 106, 78, 0.1), 0 4px 6px -2px rgba(0, 106, 78, 0.05)',
      },
      backgroundImage: {
        'gradient-rugby': 'linear-gradient(135deg, #006A4E 0%, #008d5c 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFF35C 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
