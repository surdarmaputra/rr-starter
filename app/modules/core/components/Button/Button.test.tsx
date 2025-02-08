import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  test('renders with data-testid', async () => {
    const dataTestId = 'sample-test-id';
    render(<Button data-testid={dataTestId} />);
    await screen.findByTestId(dataTestId);
  });

  test('renders snapshot', async () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
