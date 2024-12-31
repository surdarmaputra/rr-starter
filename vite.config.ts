import netlifyPlugin from '@netlify/vite-plugin-react-router';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitePlugins = [reactRouter(), tsconfigPaths()];

if (process.env.NETLIFY_DEPLOYMENT === 'true') {
  vitePlugins.push(netlifyPlugin());
}

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcssNesting, tailwindcss, autoprefixer],
    },
  },
  plugins: vitePlugins,
});
