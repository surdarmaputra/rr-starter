import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Label } from '../Label/Label';
import { Switch, type SwitchProps } from './Switch';

describe('Switch', () => {
  function renderComponent(props?: SwitchProps) {
    return render(
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>,
    );
  }

  test('triggers onCheckedChange', async () => {
    const handleCheckedChange = vi.fn();
    renderComponent({ onCheckedChange: handleCheckedChange });

    const switchToggle = screen.getByRole('switch', { name: /Airplane Mode/ });
    fireEvent.click(switchToggle);
    await waitFor(() => expect(handleCheckedChange).toHaveBeenCalledTimes(1));
    expect(handleCheckedChange).toHaveBeenCalledWith(true);

    fireEvent.click(switchToggle);
    await waitFor(() => expect(handleCheckedChange).toHaveBeenCalledTimes(2));
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
