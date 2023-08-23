import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading } from './Heading';
import { Recommended } from './examples/Recommended/component/Recommended';

const meta: Meta<typeof Heading> = {
  title: 'Form Control/Button',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    level: {
      description: 'Heading level',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    fakeHeading: {
      description: 'Use <span> instead of <h> tag',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      description: 'Children components',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    dynamicHeadingStyle: {
      description: 'Children components',
      table: {
        type: { summary: '(level: number) => CSS_Rules' },
      },
    },
  },
  args: {
    level: 1,
    fakeHeading: false,
    children: 'Heading',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Styled: Story = {
  render: (args) => <Recommended {...args} />,
  args: {
    level: 1,
    fakeHeading: false,
    children: 'Heading',
  },
};
