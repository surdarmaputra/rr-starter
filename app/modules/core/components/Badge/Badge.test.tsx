import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  function renderComponent() {
    return render(<Badge data-testid="badge-testid">Label</Badge>);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    const badge = await screen.findByTestId('badge-testid');
    await within(badge).findByText(/Label/);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
