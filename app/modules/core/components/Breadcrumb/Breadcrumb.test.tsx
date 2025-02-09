import { render, screen, within } from '@testing-library/react';
import { Slash } from 'lucide-react';
import { describe, expect, test } from 'vitest';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './Breadcrumb';

describe('Breadcrumb', () => {
  function renderComponent() {
    return render(
      <Breadcrumb data-testid="Breadcrumb-testid">
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
      </Breadcrumb>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    const breadcrumb = await screen.findByTestId('Breadcrumb-testid');
    within(breadcrumb).getByText(/Home/);
    within(breadcrumb).getByText(/Components/);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
