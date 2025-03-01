import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

describe('Avatar', () => {
  function renderComponent() {
    return render(
      <Avatar data-testid="avatar-testid">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    await screen.findByTestId('avatar-testid');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
