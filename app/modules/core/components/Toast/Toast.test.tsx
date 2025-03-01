import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VARIANT } from './constants';
import { Toast, type ToastProps } from './Toast';

describe('Toast', () => {
  function renderToast(props: Partial<ToastProps>) {
    return render(<Toast id="1" title="Title" {...props} />);
  }

  it('renders title', () => {
    renderToast({ title: 'Hello' });
    const alert = within(screen.getByRole('alert'));
    alert.getByText('Hello');
    alert.getByRole('button', { name: 'Close' });
  });

  it('renders description', () => {
    renderToast({ description: 'This is a test' });

    const alert = within(screen.getByRole('alert'));
    alert.getByText('Title');
    alert.getByText('This is a test');
    alert.getByRole('button', { name: 'Close' });
  });

  it('renders action and hide close button', () => {
    const action = <button>Action</button>;
    renderToast({ action });

    const alert = within(screen.getByRole('alert'));
    alert.getByRole('button', { name: 'Action' });
    expect(
      alert.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
  });

  it.each(Object.values(VARIANT))('renders %s variant', (variant) => {
    const { container } = renderToast({
      title: 'Title',
      description: 'Description',
      variant,
    });
    expect(container).toMatchSnapshot();
  });
});
