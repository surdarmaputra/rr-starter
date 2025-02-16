import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../Label/Label';
import { Switch, type SwitchProps } from './Switch';

type Story = StoryObj<typeof Switch>;

const meta: Meta = {
  component: Switch,
  title: 'Core/Components/Form/Switch',
};

export default meta;

export const Default: Story = {
  render: (args: SwitchProps) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
