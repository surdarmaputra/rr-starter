import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Progress } from './Progress';

describe('Progress', () => {
  function renderComponent() {
    return render(<Progress data-testid="Progress-testid" value={50} />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Progress-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
