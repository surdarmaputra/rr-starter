import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  function renderComponent() {
    return render(
      <Skeleton className="h-4 w-12" data-testid="Skeleton-testid" />,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Skeleton-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
