import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Label, type LabelProps } from './Label';

describe('Label', () => {
  function renderComponent(props?: LabelProps) {
    return render(
      <Label data-testid="Label-testid" {...props}>
        Sample label
      </Label>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Label-testid');
    await screen.findByText(/Sample label/);
  });

  test('renders with isOptional', async () => {
    renderComponent({ secondaryText: 'Optional ' });
    await screen.findByText(/Sample label/);
    await screen.findByText(/Optional/);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
