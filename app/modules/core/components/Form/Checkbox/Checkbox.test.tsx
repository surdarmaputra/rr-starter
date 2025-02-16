import type { CheckboxProps } from '@radix-ui/react-checkbox';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Label } from '../Label/Label';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  function renderComponent(props?: CheckboxProps) {
    return render(
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...props} />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>,
    );
  }

  test('triggers onCheckedChange', async () => {
    const handleCheckedChange = vi.fn();
    renderComponent({ onCheckedChange: handleCheckedChange });

    const checkbox = screen.getByRole('checkbox', {
      name: /Accept terms and conditions/,
    });
    fireEvent.click(checkbox);

    await waitFor(() => expect(handleCheckedChange).toHaveBeenCalledTimes(1));
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
