import type { Meta, StoryObj } from '@storybook/react';
import { Slash } from 'lucide-react';
import type { ComponentProps } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './Breadcrumb';

type Story = StoryObj<typeof Breadcrumb>;

const meta: Meta = {
  component: Breadcrumb,
  title: 'Core/Components/Breadcrumb',
};

export default meta;

export const Default: Story = {
  render: (args: ComponentProps<typeof Breadcrumb>) => (
    <Breadcrumb data-testid="Breadcrumb-testid" {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
