/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'near-black': '#08090B',
          'dark': '#111318',
          'warm-white': '#F3F1EB',
          'white': '#FFFFFF',
          'blue': '#1A3C6E',
        },
        bg: {
          'primary': '#08090B',
          'secondary': '#111318',
          'tertiary': '#1A1F2E',
        },
        text: {
          'primary': '#F3F1EB',
          'secondary': '#B8B5AC',
          'muted': '#7A7770',
        },
      },
      fontFamily: {
        'display': ['Instrument Serif', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['96px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['56px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['44px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['24px', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'heading-sm': ['20px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'micro': ['10px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        'gutter': 'clamp(1rem, 4vw, 3rem)',
        'section': 'clamp(4rem, 12vw, 8rem)',
        'hero': 'clamp(6rem, 20vw, 12rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};