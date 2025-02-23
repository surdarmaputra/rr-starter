import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input/Input';
import { FormField, type FormFieldProps } from './FormField';

type Story = StoryObj<typeof FormField>;

const meta: Meta = {
  component: FormField,
  title: 'Core/Components/Form/FormField',
  argTypes: {
    hint: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    label: 'Full name',
    isOptional: true,
    errors: [
      'Full name is required',
      'Full name must be at least 2 characters',
    ],
    hint: 'Full name must be at least 2 characters',
  },

  render: (args: FormFieldProps) => (
    <FormField {...args}>
      <Input name="full_name" />
    </FormField>
  ),
};
