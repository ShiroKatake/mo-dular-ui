import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button } from './Button';
import { NbButton } from './examples/NbButton';
import { ImBin } from 'react-icons/im';
import { IoMdSend } from 'react-icons/io';
import { RiShareFill } from 'react-icons/ri';
import React from 'react';

const icons = {
  none: <></>,
  ImBin: <ImBin/>,
  IoMdSend: <IoMdSend/>,
  RiShareFill: <RiShareFill/>
};

const meta: Meta<typeof Button> = {
  title: 'Form Control/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Buttons allow the user to perform actions and interact with the webapp.'
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Set button as disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    onClick: {
      description: 'Function to run when button is clicked',
      table: {
        type: { summary: 'function' },
      }
    },
    children: {
      description: 'Children components',
      table: {
        type: { summary: 'React.ReactNode' },
      }
    },
    startIcon: {
      description: 'Icons before the button text',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          none: 'none',
          ImBin: 'Bin Icon',
          IoMdSend: 'Send Icon',
          RiShareFill: 'Share Icon'
        },
      },
      table: {
        type: { summary: 'React.ReactNode' },
      }
    },
    endIcon: {
      description: 'Icons before the button text',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          none: 'none',
          ImBin: 'Bin Icon',
          IoMdSend: 'Send Icon',
          RiShareFill: 'Share Icon'
        },
      },
      table: {
        type: { summary: 'React.ReactNode' },
      }
    }
  },
  args: {
    disabled: false,
    children: 'Button Text',
    startIcon: <></>,
    endIcon: <></>
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
};

export const Styled: Story = {
  render: (args) => <NbButton {...args} />,
  args: {
    children: 'Nuts & Bolts',
  }
};
