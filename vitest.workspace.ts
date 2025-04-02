import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';
import { defineWorkspace } from 'vitest/config';
import path from 'path';

const config = defineWorkspace([
  {
    plugins: [storybookNextJsPlugin(), storybookTest()],
    publicDir: './public',
    test: {
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true,
        screenshotFailures: false,
      },
      isolate: false,
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
  {
    plugins: [react()],
    test: {
      include: ['**/*.test.{js,jsx,ts,tsx}'],

      // Explicitly set the environment to jsdom
      environment: 'jsdom',

      setupFiles: ['vitest.node.setup.ts'],

      // Coverage configuration
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },
]);

export default config;
