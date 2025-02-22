import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import {
  Popover,
  PopoverContent,
  type PopoverProps,
  PopoverTrigger,
} from './Popover';

type Story = StoryObj<typeof Popover>;

const meta: Meta = {
  component: Popover,
  title: 'Core/Components/Popover',
};

export default meta;

export const Default: Story = {
  render: (args: PopoverProps) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent data-testid="PopoverContent-testid">
        Popover Content
      </PopoverContent>
    </Popover>
  ),
};
