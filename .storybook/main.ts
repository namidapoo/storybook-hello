import { mergeConfig } from 'vite';
import * as path from 'path';
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    'storycap',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '..'),
          },
        ],
      },
    });
  },
};
export default config;
