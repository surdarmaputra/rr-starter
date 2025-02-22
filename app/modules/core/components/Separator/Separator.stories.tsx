import type { Meta, StoryObj } from '@storybook/react';

import { Separator, type SeparatorProps } from './Separator';

type Story = StoryObj<typeof Separator>;

const meta: Meta = {
  component: Separator,
  title: 'Core/Components/Separator',
};

export default meta;

export const Default: Story = {
  render: (args: SeparatorProps) => (
    <div className="flex flex-col gap-2">
      Sample Text
      <Separator {...args} />
      Sample Text
      <Separator />
      <div className="flex h-10 gap-2">
        Text
        <Separator orientation="vertical" />
        Text
      </div>
    </div>
  ),
};
