import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button/Button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, type AlertDialogContentProps, AlertDialogDescription, type AlertDialogDescriptionProps, AlertDialogFooter, type AlertDialogFooterProps, AlertDialogHeader, AlertDialogTitle, type AlertDialogTitleProps } from './AlertDialog';

interface TestComponentProps {
  contentProps?: AlertDialogContentProps;
  titleProps?: AlertDialogTitleProps;
  descriptionProps?: AlertDialogDescriptionProps;
  footerProps?: AlertDialogFooterProps;
}

export function TestComponent({
  contentProps,
  titleProps,
  descriptionProps,
  footerProps,
}: TestComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Toggle Dialog</Button>
      <AlertDialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
        <AlertDialogContent data-testid='dialog-content-testid' {...contentProps}>
          <AlertDialogHeader >
            <AlertDialogTitle data-testid="dialog-title-testid" {...titleProps}>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription data-testid='dialog-description-testid' {...descriptionProps}>
              This is a description.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter data-testid='dialog-footer-testid' {...footerProps}>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

describe('AlertDialog', () => {
  function renderComponent({
    contentProps,
    titleProps,
    descriptionProps,
    footerProps,
  }: TestComponentProps = {}) {
    return render(<TestComponent
      contentProps={contentProps}
      descriptionProps={descriptionProps}
      footerProps={footerProps}
      titleProps={titleProps}
    />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    expect(screen.queryByTestId('dialog-content-testid')).toBeNull();
    fireEvent.click(await screen.findByText(/Toggle Dialog/));

    const dialog = await screen.findByTestId('dialog-content-testid');
    const title = await within(dialog).findByTestId('dialog-title-testid');
    const description = await within(dialog).findByTestId('dialog-description-testid');
    const footer = await within(dialog).findByTestId('dialog-footer-testid');

    await within(title).findByText(/Are you absolutely sure?/);
    await within(description).findByText(/This is a description./);
    await within(footer).findByText(/Cancel/);
    await within(footer).findByText(/Continue/);
  });

  test('renders snapshot', async () => {
    renderComponent();
    fireEvent.click(await screen.findByText(/Toggle Dialog/));
    const dialog = await screen.findByTestId('dialog-content-testid');
    expect(dialog).toMatchSnapshot();
  });

  test('cancels dialog', async () => {
    renderComponent();

    fireEvent.click(await screen.findByText(/Toggle Dialog/));
    const dialog = await screen.findByTestId('dialog-content-testid');

    fireEvent.click(await within(dialog).findByText(/Cancel/));
    await waitFor(() => expect(screen.queryByTestId('dialog-content-testid')).toBeNull());
  });
});
