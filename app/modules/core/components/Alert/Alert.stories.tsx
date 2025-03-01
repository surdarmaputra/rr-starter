import type { Meta, StoryObj } from '@storybook/react';
import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, type AlertProps, AlertTitle } from './Alert';

type Story = StoryObj<typeof Alert>;

const meta: Meta = {
  component: Alert,
  title: 'Core/Components/Alert',
};

export default meta;

export const Default: Story = {
  render: (args: AlertProps) => (
    <Alert {...args}>
      <AlertCircle />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Change a few things up and try submitting again.
      </AlertDescription>
    </Alert>
  ),
};
