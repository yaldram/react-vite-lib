import * as React from 'react';
import { StoryObj } from '@storybook/react';

import { Box, BoxProps } from './box';

export default {
  title: 'Box',
};

export const Playground: StoryObj<BoxProps> = {
  parameters: {
    backgrounds: {
      default: 'grey',
    },
  },
  args: {
    bg: 'green',
    color: 'white',
    p: '2rem',
  },
  argTypes: {
    bg: {
      name: 'bg',
      type: { name: 'string', required: false },
      description: 'Background Color CSS Prop for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'transparent' },
      },
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color CSS Prop for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' },
      },
    },
    p: {
      name: 'p',
      type: { name: 'string', required: false },
      description: `Padding CSS prop for the Component shothand for padding.
        We also have pt, pb, pl, pr.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
  },
  render: (args) => <Box {...args}>Hello</Box>,
};
