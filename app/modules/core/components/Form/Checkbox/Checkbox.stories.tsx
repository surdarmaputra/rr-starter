import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../Label/Label';
import { Checkbox, type CheckboxProps } from './Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta = {
  component: Checkbox,
  title: 'Core/Components/Form/Checkbox',
};

export default meta;

export const Default: Story = {
  render: (args: CheckboxProps) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
