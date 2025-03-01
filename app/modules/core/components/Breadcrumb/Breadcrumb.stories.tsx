import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
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
        <BreadcrumbSeparator />
        <BreadcrumbEllipsis />
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
