import type { Meta, StoryObj } from '@storybook/react';

import { Textarea, type TextareaProps } from './Textarea';

type Story = StoryObj<typeof Textarea>;

const meta: Meta = {
  component: Textarea,
  title: 'Core/Components/Form/Textarea',
};

export default meta;

export const Default: Story = {
  render: (args: TextareaProps) => <Textarea {...args} />,
};
