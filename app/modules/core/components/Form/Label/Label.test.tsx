import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Label } from './Label';

describe('Label', () => {
  function renderComponent() {
    return render(<Label data-testid="Label-testid">Sample label</Label>);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Label-testid');
    await screen.findByText(/Sample label/);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
