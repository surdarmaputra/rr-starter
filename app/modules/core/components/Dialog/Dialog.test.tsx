import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  type DialogProps,
  DialogTitle,
} from './Dialog';

describe('Dialog', () => {
  function renderComponent(props?: DialogProps) {
    return render(
      <Dialog {...props}>
        <DialogContent data-testid="DialogContent-testid">
          <DialogHeader data-testid="DialogHeader-testid">
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>Header description</DialogDescription>
          </DialogHeader>
          <div data-testid="DialogContentBody-testid">Content body</div>
          <DialogFooter data-testid="DialogFooter-testid">
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
  }

  test('hides content when not opened', async () => {
    renderComponent();
    expect(
      screen.queryByTestId('DialogContent-testid'),
    ).not.toBeInTheDocument();
  });

  test('displays content when opened', async () => {
    renderComponent({
      open: true,
    });
    const dialog = await screen.findByTestId('DialogContent-testid');

    const header = within(dialog).getByTestId('DialogHeader-testid');
    within(header).getByText(/Are you absolutely sure?/);
    within(header).getByText(/Header description/);

    const body = within(dialog).getByTestId('DialogContentBody-testid');
    within(body).getByText(/Content body/);

    const footer = within(dialog).getByTestId('DialogFooter-testid');
    within(footer).getByRole('button', { name: /Save changes/ });
  });

  test('renders snapshot', async () => {
    renderComponent({
      open: true,
    });
    const dialog = await screen.findByTestId('DialogContent-testid');
    expect(dialog).toMatchSnapshot();
  });
});
