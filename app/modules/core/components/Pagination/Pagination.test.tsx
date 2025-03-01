import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination';

describe('Pagination', () => {
  function renderComponent() {
    return render(
      <Pagination data-testid="Pagination-testid">
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
      </Pagination>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    const pagination = within(await screen.findByTestId('Pagination-testid'));
    pagination.getByTestId('PaginationPrevious-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
