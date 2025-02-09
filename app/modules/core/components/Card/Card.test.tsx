import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

describe('Card', () => {
  function renderComponent() {
    return render(
      <Card data-testid="Card-testid">
        <CardHeader>
          <CardTitle data-testid="CardTitle-testid">Card Title</CardTitle>
          <CardDescription data-testid="CardDescription-testid">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent data-testid="CardContent-testid">
          <p>Card Content</p>
        </CardContent>
        <CardFooter data-testid="CardFooter-testid">
          <p>Card Footer</p>
        </CardFooter>
      </Card>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    const card = await screen.findByTestId('Card-testid');
    const title = within(card).getByTestId('CardTitle-testid');
    within(title).getByText(/Card Title/);

    const description = within(card).getByTestId('CardDescription-testid');
    within(description).getByText(/Card Description/);

    const content = within(card).getByTestId('CardContent-testid');
    within(content).getByText(/Card Content/);

    const footer = within(card).getByTestId('CardFooter-testid');
    within(footer).getByText(/Card Footer/);
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
