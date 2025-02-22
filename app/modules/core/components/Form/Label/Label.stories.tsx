import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input/Input';
import { Label, type LabelProps } from './Label';

type Story = StoryObj<typeof Label>;

const meta: Meta = {
  component: Label,
  title: 'Core/Components/Form/Label',
};

export default meta;

export const Default: Story = {
  render: (args: LabelProps) => (
    <>
      <Label htmlFor="name" {...args}>
        Sample label
      </Label>
      <Input name="name" />
    </>
  ),
};
