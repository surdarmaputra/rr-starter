import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
  title: 'Core/Components/Button',
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-outlined',
        'primary-ghost',
        'secondary',
        'secondary-outlined',
        'secondary-ghost',
        'success',
        'success-outlined',
        'success-ghost',
        'warning',
        'warning-outlined',
        'warning-ghost',
        'danger',
        'danger-outlined',
        'danger-ghost',
        'link',
      ],
    },
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
