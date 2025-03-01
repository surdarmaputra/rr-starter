import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './NavigationMenu';

describe('NavigationMenu', () => {
  function renderComponent() {
    return render(
      <NavigationMenu data-testid="NavigationMenu-testid">
        <NavigationMenuList>
          <NavigationMenuItem data-testid="NavigationMenuItem1-testid">
            <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="NavigationMenuContent1-testid">
              <ul className="p-4">
                <li>
                  <NavigationMenuLink>Item 1</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Item 2</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem data-testid="NavigationMenuItem2-testid">
            <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="NavigationMenuContent2-testid">
              <ul className="p-4">
                <li>
                  <NavigationMenuLink>Item 3</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Item 4</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem data-testid="NavigationMenuItem3-testid">
            <NavigationMenuLink>Menu 3</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );
  }

  test('renders with data-testid', async () => {
    renderComponent();
    const navigationMenu = await screen.findByTestId('NavigationMenu-testid');

    const navigationMenuItem1 = await within(navigationMenu).findByTestId(
      'NavigationMenuItem1-testid',
    );
    expect(
      screen.queryByTestId('NavigationMenuContent1-testid'),
    ).not.toBeInTheDocument();
    fireEvent.click(
      within(navigationMenuItem1).getByRole('button', { name: /Menu 1/ }),
    );
    const menuList1 = await screen.findByTestId(
      'NavigationMenuContent1-testid',
    );
    const menuList1Items = within(menuList1).getAllByRole('listitem');
    expect(menuList1Items).toHaveLength(2);
    expect(menuList1Items[0]).toHaveTextContent('Item 1');
    expect(menuList1Items[1]).toHaveTextContent('Item 2');

    const navigationMenuItem2 = await within(navigationMenu).findByTestId(
      'NavigationMenuItem2-testid',
    );
    expect(
      screen.queryByTestId('NavigationMenuContent2-testid'),
    ).not.toBeInTheDocument();
    fireEvent.click(
      within(navigationMenuItem2).getByRole('button', { name: /Menu 2/ }),
    );
    const menuList2 = await screen.findByTestId(
      'NavigationMenuContent2-testid',
    );
    const menuList2Items = within(menuList2).getAllByRole('listitem');
    expect(menuList2Items).toHaveLength(2);
    expect(menuList2Items[0]).toHaveTextContent('Item 3');
    expect(menuList2Items[1]).toHaveTextContent('Item 4');
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
