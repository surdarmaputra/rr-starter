import '../app/app.css';

import type { Preview } from '@storybook/react';

import { darkTheme } from './constants';
import { DocsContainer } from './DocsContainer';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: 'html',
      dark: darkTheme,
      stylePreview: true,
    },
    docs: {
      container: DocsContainer,
    },
  },
  tags: ['autodocs'],
};

export default preview;
