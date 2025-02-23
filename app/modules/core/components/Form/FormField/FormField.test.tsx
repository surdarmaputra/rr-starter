import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { FormField } from './FormField';

describe('FormField', () => {
  function renderComponent(props = {}) {
    return render(
      <FormField
        data-testid="FormField-testid"
        inputId="full-name"
        {...props}
      />,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('FormField-testid');
  });

  test('renders label with optional text', async () => {
    renderComponent({ label: 'Name', isOptional: true });
    await screen.findByText(/Name/);
    await screen.findByText(/\(Optional\)/);
  });

  test('renders accessible label', async () => {
    const handleChange = vi.fn();
    renderComponent({
      label: 'Name',
      children: <input id="full-name" onChange={handleChange} />,
    });
    const input = await screen.findByLabelText(/Name/);
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'New Value',
        }),
      }),
    );
  });

  test('renders hint', async () => {
    renderComponent({ hint: 'This is a hint' });
    await screen.findByText(/This is a hint/);
  });

  test('renders errors', async () => {
    const errors = ['Error 1', 'Error 2'];
    renderComponent({ errors });
    await screen.findByText(/Error 1/);
    await screen.findByText(/Error 2/);
  });

  test('handles input change', async () => {
    const handleChange = vi.fn();
    const { getByTestId } = renderComponent({
      children: <input data-testid="input-testid" onChange={handleChange} />,
    });

    const input = getByTestId('input-testid');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'New Value',
        }),
      }),
    );
  });

  test('renders without errors, label, or hint safely', async () => {
    renderComponent();
    const formField = await screen.findByTestId('FormField-testid');
    expect(formField).toMatchSnapshot();
  });

  test('renders with errors, label, and hint safely', async () => {
    renderComponent({
      errors: ['Error 1', 'Error 2'],
      label: 'Name',
      hint: 'This is a hint',
    });
    const formField = await screen.findByTestId('FormField-testid');
    expect(formField).toMatchSnapshot();
  });
});
