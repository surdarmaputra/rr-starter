import type { Meta, StoryObj } from '@storybook/react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  type PaginationProps,
} from './Pagination';

type Story = StoryObj<typeof Pagination>;

const meta: Meta = {
  component: Pagination,
  title: 'Core/Components/Pagination',
};

export default meta;

export const Default: Story = {
  render: (args: PaginationProps) => (
    <Pagination data-testid="Pagination-testid" {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            data-testid="PaginationPrevious-testid"
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink data-testid="PaginationPage-testid" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis data-testid="PaginationEllipsis-testid" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext data-testid="PaginationNext-testid" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
