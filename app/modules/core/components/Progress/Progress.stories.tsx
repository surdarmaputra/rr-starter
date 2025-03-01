import type { Meta, StoryObj } from '@storybook/react';

import { Progress, type ProgressProps } from './Progress';

type Story = StoryObj<typeof Progress>;

const meta: Meta = {
  component: Progress,
  title: 'Core/Components/Progress',
};

export default meta;

export const Default: Story = {
  args: {
    value: 45,
  },
  render: (args: ProgressProps) => <Progress {...args} />,
};
