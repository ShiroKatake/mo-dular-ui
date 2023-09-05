import type { Meta, StoryObj } from '@storybook/react';
import { Overpass } from 'next/font/google';
import React from 'react';
import { Heading } from './Heading';
import { StyledHeading } from './examples/SAPC/component/SAPCHeading.styled';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
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
  },
  args: {
    level: 1,
    fakeHeading: false,
    children: 'Heading',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

const overpass = Overpass({ subsets: ['latin'] });
export const Styled: Story = {
  render: (args) => <StyledHeading {...args} className={overpass.className} />,
  args: {
    level: 1,
    fakeHeading: false,
    children: 'Heading',
  },
};
