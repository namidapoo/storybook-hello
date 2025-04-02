import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';
import { coverageConfigDefaults } from 'vitest/config';
import path from 'path';

const config = [
  {
    name: 'storybook',
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
      coverage: {
        all: true,
        include: ['{app,lib,components}/**/*'],
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/*.{stories,mock}.*',
          'next.config.ts',
          'postcss.config.mjs',
          'storybook-static/**/*',
        ],
        provider: 'istanbul',
      },
    },
  },
  {
    name: 'react',
    plugins: [react()],
    test: {
      include: ['**/*.test.{js,jsx,ts,tsx}'],

      // Explicitly set the environment to jsdom
      environment: 'jsdom',

      setupFiles: ['vitest.node.setup.ts'],

      // Coverage configuration
      coverage: {
        all: true,
        include: ['app/**/*', 'lib/**/*'],
        exclude: [
          ...coverageConfigDefaults.exclude,
          'next.config.ts',
          'postcss.config.mjs',
          'storybook-static/**/*',
        ],
        provider: 'istanbul',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },
];

export default config;
