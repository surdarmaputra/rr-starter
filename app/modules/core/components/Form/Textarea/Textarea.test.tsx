import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Textarea, type TextareaProps } from './Textarea';

describe('Textarea', () => {
  function renderComponent(props?: TextareaProps) {
    return render(<Textarea data-testid="Textarea-testid" {...props} />);
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('Textarea-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
