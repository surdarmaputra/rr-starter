import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

type Story = StoryObj<typeof Avatar>;

const meta: Meta = {
  component: Avatar,
  title: 'Core/Components/Avatar',
};

export default meta;

export const Default: Story = {
  render: () => (
    <Avatar data-testid="avatar-testid">
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
