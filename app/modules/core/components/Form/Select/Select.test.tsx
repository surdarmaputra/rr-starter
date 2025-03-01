import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  type SelectProps,
  SelectTrigger,
  SelectValue,
} from './Select';

describe('Select', () => {
  function renderComponent(props?: SelectProps) {
    return render(
      <Select {...props}>
        <SelectTrigger className="w-[180px]" data-testid="Select-testid">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Select-testid');
  });

  test('triggers onValueChange', async () => {
    const handleChange = vi.fn();
    renderComponent({ onValueChange: handleChange });

    fireEvent.click(screen.getByTestId('Select-testid'));
    const option = await screen.findByRole('option', { name: /Banana/ });
    fireEvent.click(option);

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    expect(handleChange).toHaveBeenCalledWith('banana');
  });
});
