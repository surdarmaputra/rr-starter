import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button/Button';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('Popover', () => {
  function renderComponent() {
    return render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Action</Button>
        </PopoverTrigger>
        <PopoverContent data-testid="PopoverContent-testid">
          Popover Content
        </PopoverContent>
      </Popover>,
    );
  }

  test('renders content when trigger is clicked', async () => {
    renderComponent();
    expect(
      screen.queryByTestId('PopoverContent-testid'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Popover Content/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Action/ }));
    await screen.findByTestId('PopoverContent-testid');
    screen.getByText(/Popover Content/);
  });

  test('renders snapshot', async () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /Action/ }));
    const popover = await screen.findByTestId('PopoverContent-testid');
    expect(popover).toMatchSnapshot();
  });
});
