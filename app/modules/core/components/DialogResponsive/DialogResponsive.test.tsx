import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import {
  DialogResponsive,
  type DialogResponsiveProps,
} from './DialogResponsive';

describe('DialogResponsive', () => {
  function renderComponent(props?: DialogResponsiveProps) {
    return render(
      <DialogResponsive
        contentBody="Dialog content body"
        data-testid="DialogResponsive-testid"
        footer="Dialog footer"
        headerDescription="Dialog Description"
        headerTitle="Dialog Title"
        {...props}
      />,
    );
  }

  test('hides content when not opened', async () => {
    renderComponent();
    expect(
      screen.queryByTestId('DialogResponsive-testid'),
    ).not.toBeInTheDocument();
  });

  test('displays content when opened', async () => {
    renderComponent({
      open: true,
    });
    const dialog = await screen.findByTestId('DialogResponsive-testid');

    const header = within(dialog).getByTestId('dialogResponsiveHeader');
    const title = within(header).getByTestId('dialogResponsiveTitle');
    expect(title).toHaveTextContent('Dialog Title');
    const description = within(header).getByTestId(
      'dialogResponsiveDescription',
    );
    expect(description).toHaveTextContent('Dialog Description');

    within(dialog).getByText('Dialog content body');

    const footer = within(dialog).getByTestId('dialogResponsiveFooter');
    within(footer).getByText('Dialog footer');
  });
});
