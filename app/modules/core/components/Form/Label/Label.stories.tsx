import type { Meta, StoryObj } from '@storybook/react';

import { Label, type LabelProps } from './Label';

type Story = StoryObj<typeof Label>;

const meta: Meta = {
  component: Label,
  title: 'Core/Components/Form/Label',
};

export default meta;

export const Default: Story = {
  render: (args: LabelProps) => <Label {...args}>Sample label</Label>,
};
