import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Sonner } from './Sonner';

describe('Sonner', () => {
  function renderComponent() {
    return render(<Sonner data-testid="Sonner-testid" />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Sonner-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
