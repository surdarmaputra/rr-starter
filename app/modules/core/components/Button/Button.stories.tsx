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
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
