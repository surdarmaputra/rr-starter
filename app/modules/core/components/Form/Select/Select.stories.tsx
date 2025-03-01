import type { Meta, StoryObj } from '@storybook/react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  type SelectProps,
  SelectTrigger,
  SelectValue,
} from './Select';

type Story = StoryObj<typeof Select>;

const meta: Meta = {
  component: Select,
  title: 'Core/Components/Form/Select',
};

export default meta;

export const Default: Story = {
  render: (args: SelectProps) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]" data-testid="Select-testid">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
