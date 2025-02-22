import type { Meta, StoryObj } from '@storybook/react';

import { Popover, type PopoverProps } from './Popover';

type Story = StoryObj<typeof Popover>;

const meta: Meta = {
  component: Popover,
  title: 'Core/Components/Popover',
};

export default meta;

export const Default: Story = {
  render: (args: PopoverProps) => <Popover {...args} />,
};
