import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
  title: 'Core/Components/Button',
};

export default meta;

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args} />,
};
