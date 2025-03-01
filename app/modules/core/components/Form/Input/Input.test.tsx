import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Input, type InputProps } from './Input';

describe('Input', () => {
  function renderComponent(props?: InputProps) {
    return render(<Input data-testid="Input-testid" {...props} />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Input-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test('handles input change', async () => {
    const value = 'anyValue';
    const handleChange = vi.fn();
    renderComponent({
      onChange: handleChange,
      placeholder: 'Sample input',
    });

    const input = await screen.findByPlaceholderText(/Sample input/);
    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value,
        }),
      }),
    );
  });
});
