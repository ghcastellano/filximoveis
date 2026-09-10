import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // coastal-luxury palette (Litoral Sul de SP)
        porcelain: '#F6F2EA', // warm light background
        cream: '#EFE7D8',
        sand: '#E4D8C3',
        ink: '#14201D', // primary text on light
        deep: '#0A2B27', // deep ocean — dark sections
        teal: '#12655C', // primary brand
        sea: '#3E9B8C', // secondary
        gold: '#BF9D5F', // warm accent (use on dark backgrounds)
        golddeep: '#8A6420', // accessible gold for text on light backgrounds
        goldsoft: '#D8BE8E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 20px 60px -24px rgba(10, 43, 39, 0.28)',
        card: '0 14px 40px -18px rgba(10, 43, 39, 0.35)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
