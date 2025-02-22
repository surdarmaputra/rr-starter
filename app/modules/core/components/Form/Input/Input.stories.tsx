import type { Meta, StoryObj } from '@storybook/react';

import { Input, type InputProps } from './Input';

type Story = StoryObj<typeof Input>;

const meta: Meta = {
  component: Input,
  title: 'Core/Components/Form/Input',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: 'Input some text...',
  },
  render: (args: InputProps) => <Input {...args} />,
};
