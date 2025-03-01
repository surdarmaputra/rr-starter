import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Separator } from './Separator';

describe('Separator', () => {
  function renderComponent() {
    return render(<Separator data-testid="Separator-testid" />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Separator-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
