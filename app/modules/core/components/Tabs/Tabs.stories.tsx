import type { Meta, StoryObj } from '@storybook/react';

import {
  Tabs,
  TabsContent,
  TabsList,
  type TabsProps,
  TabsTrigger,
} from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta: Meta = {
  component: Tabs,
  title: 'Core/Components/Tabs',
};

export default meta;

export const Default: Story = {
  render: (args: TabsProps) => (
    <Tabs data-testid="Tabs-testid" defaultValue="password" {...args}>
      <TabsList>
        <TabsTrigger data-testid="TabsTriggerAccount-testid" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger data-testid="TabsTriggerPassword-testid" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account Content</TabsContent>
      <TabsContent value="password">Password Content</TabsContent>
    </Tabs>
  ),
};
