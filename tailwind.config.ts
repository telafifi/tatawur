import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          50: '#E8EBF5',
          100: '#C5CCE6',
          200: '#9FADD4',
          300: '#788EC2',
          400: '#5B77B3',
          500: '#3E60A4',
          600: '#2A4B8C',
          700: '#183774',
          800: '#0A2463',
          900: '#071A47',
        },
        secondary: {
          DEFAULT: '#3BCEAC',
          50: '#E8FAF6',
          100: '#C5F3E8',
          200: '#9EEBD8',
          300: '#77E3C8',
          400: '#56DBB9',
          500: '#3BCEAC',
          600: '#2BB595',
          700: '#1F937A',
          800: '#15715F',
          900: '#0C4F43',
        },
        accent: {
          DEFAULT: '#FB8B24',
          50: '#FEF3E8',
          100: '#FDE0C4',
          200: '#FCCC9C',
          300: '#FBB874',
          400: '#FAA44C',
          500: '#FB8B24',
          600: '#E77508',
          700: '#B85C06',
          800: '#894305',
          900: '#5A2C03',
        },
        neutral: {
          dark: '#2B2D42',
          light: '#E5E5E5',
        },
        background: {
          white: '#FFFFFF',
          off: '#F8F9FA',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

