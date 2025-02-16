import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
} from './Drawer';

describe('Drawer', () => {
  function renderComponent(props?: DrawerProps) {
    return render(
      <Drawer {...props}>
        <DrawerContent data-testid="DrawerContent-testid">
          <DrawerHeader data-testid="DrawerHeader-testid">
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>Header description</DrawerDescription>
          </DrawerHeader>
          <div data-testid="DrawerContentBody-testid">Content body</div>
          <DrawerFooter data-testid="DrawerFooter-testid">
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="primary-outlined">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
    );
  }

  test('hides content when not opened', async () => {
    renderComponent();
    expect(
      screen.queryByTestId('DrawerContent-testid'),
    ).not.toBeInTheDocument();
  });

  test('displays content when opened', async () => {
    renderComponent({
      open: true,
    });
    const dialog = await screen.findByTestId('DrawerContent-testid');

    const header = within(dialog).getByTestId('DrawerHeader-testid');
    within(header).getByText(/Are you absolutely sure?/);
    within(header).getByText(/Header description/);

    const body = within(dialog).getByTestId('DrawerContentBody-testid');
    within(body).getByText(/Content body/);

    const footer = within(dialog).getByTestId('DrawerFooter-testid');
    within(footer).getByRole('button', { name: /Save changes/ });
  });

  test('renders snapshot', async () => {
    renderComponent({
      open: true,
    });
    const dialog = await screen.findByTestId('DrawerContent-testid');
    expect(dialog).toMatchSnapshot();
  });
});
