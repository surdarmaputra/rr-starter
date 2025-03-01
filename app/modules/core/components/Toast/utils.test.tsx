import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { Toaster } from './Toast';
import * as toastUtils from './utils';

function renderSampleApp() {
  return render(<Toaster />);
}

describe('Toast utils', () => {
  beforeEach(() => {
    renderSampleApp();
  });

  test('triggers default toast', async () => {
    toastUtils.toast('Default toast');
    const toast = await screen.findByRole('alert');
    within(toast).getByText('Default toast');
    within(toast).getByRole('button', { name: 'Close' });
  });

  test('triggers default toast with description', async () => {
    toastUtils.toast({
      title: 'Default toast',
      description: 'Description',
    });
    const toast = await screen.findByRole('alert');
    within(toast).getByText('Default toast');
    within(toast).getByText('Description');
    within(toast).getByRole('button', { name: 'Close' });
  });

  test('triggers default toast without close button', async () => {
    toastUtils.toast({
      title: 'Default toast',
      description: 'Description',
      isClosable: false,
    });

    const toast = await screen.findByRole('alert');
    within(toast).getByText('Default toast');
    within(toast).getByText('Description');
    expect(
      within(toast).queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
  });

  test('triggers default toast with action', async () => {
    const action = () => <button>Action</button>;
    toastUtils.toast({
      title: 'Default toast',
      description: 'Description',
      action,
    });

    const toast = await screen.findByRole('alert');
    within(toast).getByText('Default toast');
    within(toast).getByText('Description');
    within(toast).getByRole('button', { name: 'Action' });
    expect(
      within(toast).queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
  });

  test.each`
    utilVariantFunction         | variant
    ${toastUtils.toast.success} | ${'success'}
    ${toastUtils.toast.warning} | ${'warning'}
    ${toastUtils.toast.danger}  | ${'danger'}
  `('triggers $variant toast', async ({ utilVariantFunction }) => {
    utilVariantFunction({
      title: 'Title',
      description: 'Description',
    });
    const toast = await screen.findByRole('alert');
    within(toast).getByText('Title');
    within(toast).getByText('Description');
    within(toast).getByRole('button', { name: 'Close' });
    expect(toast).toMatchSnapshot();
  });
});
