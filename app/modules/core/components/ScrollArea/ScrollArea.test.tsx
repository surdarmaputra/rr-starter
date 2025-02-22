import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
  function renderComponent() {
    return render(
      <ScrollArea data-testid="ScrollArea-testid">Content</ScrollArea>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('ScrollArea-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
