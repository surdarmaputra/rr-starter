import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import {
  Tabs,
  TabsContent,
  TabsList,
  type TabsProps,
  TabsTrigger,
} from './Tabs';

function SampleComponent(props: TabsProps) {
  return (
    <Tabs data-testid="Tabs-testid" defaultValue="password" {...props}>
      <TabsList>
        <TabsTrigger data-testid="TabsTriggerAccount-testid" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger data-testid="TabsTriggerPassword-testid" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account Content</TabsContent>
      <TabsContent value="password">Password Content</TabsContent>
    </Tabs>
  );
}

describe('Tabs', () => {
  function renderComponent(props?: TabsProps) {
    return render(<SampleComponent {...props} />);
  }

  test('renders default tab', async () => {
    renderComponent();
    const tab = screen.getByTestId('Tabs-testid');
    within(tab).getByText(/Password Content/);
    expect(within(tab).queryByText(/Account Content/)).not.toBeInTheDocument();
  });

  test('renders snapshot', async () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
