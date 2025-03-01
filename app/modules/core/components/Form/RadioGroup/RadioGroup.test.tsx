import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { Label } from '../Label/Label';
import { RadioGroup, RadioGroupItem, type RadioGroupProps } from './RadioGroup';

describe('RadioGroup', () => {
  function renderComponent(props?: RadioGroupProps) {
    return render(
      <RadioGroup
        data-testid="RadioGroup-testid"
        defaultValue="option2"
        {...props}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="option1" value="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="option2" value="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>,
    );
  }

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders default value', async () => {
    renderComponent();
    const radioGroup = await screen.findByTestId('RadioGroup-testid');
    const options = within(radioGroup).getAllByRole('radio');
    expect(options).toHaveLength(2);
    await waitFor(() => expect(options[1]).toBeChecked());
    await waitFor(() => expect(options[0]).not.toBeChecked());
  });

  test('triggers onValueChange', async () => {
    const handleChange = vi.fn();
    renderComponent({ onValueChange: handleChange });
    await waitFor(() =>
      expect(screen.getByRole('radio', { name: /Option 2/ })).toBeChecked(),
    );
    fireEvent.click(screen.getByRole('radio', { name: /Option 1/ }));
    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    expect(handleChange).toHaveBeenCalledWith('option1');
    await waitFor(() =>
      expect(screen.getByRole('radio', { name: /Option 1/ })).toBeChecked(),
    );
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
