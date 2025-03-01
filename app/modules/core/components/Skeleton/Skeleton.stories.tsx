import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton, type SkeletonProps } from './Skeleton';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta = {
  component: Skeleton,
  title: 'Core/Components/Skeleton',
};

export default meta;

export const Default: Story = {
  render: (args: SkeletonProps) => (
    <div className="flex flex-col gap-2">
      <Skeleton {...args} className="h-32 w-32" />
      <Skeleton {...args} className="h-32 w-32 rounded-full" />
      <Skeleton {...args} className="h-4 w-32 rounded-full" />
    </div>
  ),
};
