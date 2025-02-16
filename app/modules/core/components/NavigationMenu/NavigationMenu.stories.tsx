import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '~/libs/shadcn/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  type NavigationMenuProps,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './NavigationMenu';

type Story = StoryObj<typeof NavigationMenu>;

const meta: Meta = {
  component: NavigationMenu,
  title: 'Core/Components/NavigationMenu',
  decorators: (Story) => <div className="h-96">{Story()}</div>,
};

export default meta;

export const Default: Story = {
  render: (args: NavigationMenuProps) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-accent p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-semibold">
                      RR Starter
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      React Router starter kit with battery included to speed up
                      your development process. Customizable. Open Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Introduction
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/installation"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Installation
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      How to install dependencies and structure your app.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/typography"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Typography
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/alert-dialog"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Alert Dialog
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A modal dialog that interrupts the user with important
                      content and expects a response.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/hover-card"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Hover Card
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      For sighted users to preview content available behind a
                      link.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/progress"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Progress
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Displays an indicator showing the completion progress of a
                      task, typically displayed as a progress bar.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/scroll-area"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Scroll-area
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Visually or semantically separates content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/tabs"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Tabs
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A set of layered sections of content—known as tab
                      panels—that are displayed one at a time.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      'hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
                    )}
                    href="/docs/primitives/tooltip"
                  >
                    <div className="text-sm font-semibold leading-none">
                      Tooltip
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A popup that displays information related to an element
                      when the element receives keyboard focus or the mouse
                      hovers over it.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
