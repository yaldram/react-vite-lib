import React from 'react';
import { Parameters } from '@storybook/react';

import { ViteLibProvider } from '../src/provider';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story) => (
  <ViteLibProvider>
    <Story />
  </ViteLibProvider>
);

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [withThemeProvider];
