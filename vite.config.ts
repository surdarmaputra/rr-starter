import netlifyPlugin from '@netlify/vite-plugin-react-router';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isStorybook = process.argv[1]?.includes('storybook');
const shouldUseReactRouterPlugin = !isStorybook && !process.env.VITEST;
const vitePlugins = [];

if (shouldUseReactRouterPlugin) {
  vitePlugins.push(reactRouter());
}

vitePlugins.push(tsconfigPaths());

if (process.env.NETLIFY_DEPLOYMENT === 'true') {
  vitePlugins.push(netlifyPlugin());
}

/// <reference types="vitest" />
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcssNesting, tailwindcss, autoprefixer],
    },
  },
  plugins: vitePlugins,
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      exclude: [
        '.storybook',
        '**/*.config.{js,ts,tsx}',
        '**/*.stories.tsx',
        '**/*.test.{ts,tsx}',
        '**/routes.ts',
        '**/types.ts',
      ],
    },
  },
});
