import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    react: { rsc: true },
    nextjs: { appDirectory: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [withScreenshot];
