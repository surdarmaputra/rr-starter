import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

type Story = StoryObj<typeof Card>;

const meta: Meta = {
  component: Card,
  title: 'Core/Components/Card',
};

export default meta;

export const Default: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <Card data-testid="Card-testid" {...args}>
      <CardHeader>
        <CardTitle data-testid="CardTitle-testid">Card Title</CardTitle>
        <CardDescription data-testid="CardDescription-testid">
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent data-testid="CardContent-testid">
        <p>Card Content</p>
      </CardContent>
      <CardFooter data-testid="CardFooter-testid">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};
