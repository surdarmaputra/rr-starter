import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  type TooltipProviderProps,
  TooltipTrigger,
} from './Tooltip';

type Story = StoryObj<typeof TooltipProvider>;

const meta: Meta = {
  component: Tooltip,
  title: 'Core/Components/Tooltip',
};

export default meta;

export const Default: Story = {
  render: (args: TooltipProviderProps) => (
    <TooltipProvider {...args}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip Content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
