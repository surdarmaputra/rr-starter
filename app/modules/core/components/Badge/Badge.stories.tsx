import type { Meta, StoryObj } from '@storybook/react';

import { Badge, type BadgeProps } from './Badge';

type Story = StoryObj<typeof Badge>;

const meta: Meta = {
  component: Badge,
  title: 'Core/Components/Badge',
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Label',
  },
  render: (args: BadgeProps) => <Badge {...args} />,
};
