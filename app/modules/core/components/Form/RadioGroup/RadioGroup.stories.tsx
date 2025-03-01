import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../Label/Label';
import { RadioGroup, RadioGroupItem, type RadioGroupProps } from './RadioGroup';

type Story = StoryObj<typeof RadioGroup>;

const meta: Meta = {
  component: RadioGroup,
  title: 'Core/Components/Form/RadioGroup',
};

export default meta;

export const Default: Story = {
  args: {
    defaultValue: 'option2',
  },
  render: (args: RadioGroupProps) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="option1" value="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="option2" value="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
    </RadioGroup>
  ),
};
