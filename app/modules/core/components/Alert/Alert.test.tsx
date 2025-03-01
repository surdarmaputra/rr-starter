import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Alert, AlertDescription, type AlertProps, AlertTitle } from './Alert';

describe('Alert', () => {
  function renderComponent(props?: AlertProps) {
    return render(
      <Alert {...props}>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Change a few things up and try submitting again.
        </AlertDescription>
      </Alert>,
    );
  }

  test('renders with data-testid', async () => {
    const dataTestId = 'sample-test-id';
    renderComponent({ 'data-testid': dataTestId });
    await screen.findByTestId(dataTestId);
  });

  test('renders snapshot', async () => {
    const { container } = render(<Alert />);
    renderComponent();
    expect(container).toMatchSnapshot();
  });
});
