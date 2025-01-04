import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
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
        primaryDisabled: 'var(--color-primary-disabled)',
        primaryHover: 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        secondaryDisabled: 'var(--color-secondary-disabled)',
        secondaryHover: 'var(--color-secondary-hover)',
        success: 'var(--color-success)',
        successDisabled: 'var(--color-success-disabled)',
        successHover: 'var(--color-success-hover)',
        warning: 'var(--color-warning)',
        warningDisabled: 'var(--color-warning-disabled)',
        warningHover: 'var(--color-warning-hover)',
        danger: 'var(--color-danger)',
        dangerDisabled: 'var(--color-danger-disabled)',
        dangerHover: 'var(--color-danger-hover)',
        divider: 'var(--color-divider)',
        textTitle: 'var(--color-text-title)',
        textBody: 'var(--color-text-body)',
        textCaption: 'var(--color-text-caption)',
        textDisabled: 'var(--color-text-disabled)',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
