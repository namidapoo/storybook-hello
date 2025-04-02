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
        exclude: [...coverageConfigDefaults.exclude, '**/*.{stories,mock}.*'],
        provider: 'istanbul',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './'),
        },
      },
    },
  },
  {
    name: 'node',
    test: {
      include: ['**/*.test.{js,ts}'],

      // Explicitly set the environment to node
      environment: 'node',

      // Coverage configuration
      coverage: {
        all: true,
        include: ['app/**/*', 'lib/**/*'],
        exclude: [...coverageConfigDefaults.exclude],
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
