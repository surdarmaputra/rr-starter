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
        'toast-success-title': 'var(--color-toast-success-title)',
        'toast-success-background': 'var(--color-toast-success-background)',
        'toast-success-border': 'var(--color-toast-success-border)',
        'toast-warning-title': 'var(--color-toast-warning-title)',
        'toast-warning-background': 'var(--color-toast-warning-background)',
        'toast-warning-border': 'var(--color-toast-warning-border)',
        'toast-danger-title': 'var(--color-toast-danger-title)',
        'toast-danger-background': 'var(--color-toast-danger-background)',
        'toast-danger-border': 'var(--color-toast-danger-border)',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        blob: 'blob 7s infinite',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
