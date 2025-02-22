import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea, type ScrollAreaProps } from './ScrollArea';

type Story = StoryObj<typeof ScrollArea>;

const meta: Meta = {
  component: ScrollArea,
  title: 'Core/Components/ScrollArea',
};

export default meta;

export const Default: Story = {
  render: (args: ScrollAreaProps) => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
      vestibulum massa. Morbi euismod, nunc ac dignissim euismod, velit justo
      faucibus nisl, nec malesuada turpis nunc a metus. Sed auctor, magna quis
      blandit venenatis, metus nisl tincidunt lorem, sit amet rutrum libero
      lorem sit amet magna. Nullam ac erat sed libero ornare dictum ut et dolor.
      Pellentesque auctor, metus eu tincidunt convallis, massa erat vulputate
      sapien, ut malesuada nisl magna sit amet sapien. Nullam ac erat sed libero
      ornare dictum ut et dolor. Sed euismod, nunc ac dignissim euismod, velit
      justo faucibus nisl, nec malesuada turpis nunc a metus. Sed auctor, magna
      quis blandit venenatis, metus nisl tincidunt lorem, sit amet rutrum libero
      lorem sit amet magna. Nullam ac erat sed libero ornare dictum ut et dolor.
      Pellentesque auctor, metus eu tincidunt convallis, massa erat vulputate
      sapien, ut malesuada nisl magna sit amet sapien. Nullam ac erat sed libero
      ornare dictum ut et dolor.
    </ScrollArea>
  ),
};
