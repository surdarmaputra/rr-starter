import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './app/**/*.stories.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-disabled': 'var(--color-primary-disabled)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-disabled': 'var(--color-secondary-disabled)',
        'secondary-hover': 'var(--color-secondary-hover)',
        success: 'var(--color-success)',
        'success-disabled': 'var(--color-success-disabled)',
        'success-hover': 'var(--color-success-hover)',
        warning: 'var(--color-warning)',
        'warning-disabled': 'var(--color-warning-disabled)',
        'warning-hover': 'var(--color-warning-hover)',
        danger: 'var(--color-danger)',
        'danger-disabled': 'var(--color-danger-disabled)',
        'danger-hover': 'var(--color-danger-hover)',
        divider: 'var(--color-divider)',
        accent: 'var(--color-accent)',
        backdrop: 'var(--color-backdrop)',
        'letter-title': 'var(--color-letter-title)',
        'letter-body': 'var(--color-letter-body)',
        'letter-caption': 'var(--color-letter-caption)',
        'letter-disabled': 'var(--color-letter-disabled)',
        'letter-inverted': 'var(--color-letter-inverted)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
