import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './AlertDialog';

type Story = StoryObj<typeof AlertDialog>;

const meta: Meta = {
  component: AlertDialog,
  title: 'Core/Components/AlertDialog',
};

export default meta;

function SampleComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Toggle Dialog</Button>
      <AlertDialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
        <AlertDialogContent data-testid="dialog-content-testid">
          <AlertDialogHeader>
            <AlertDialogTitle data-testid="dialog-title-testid">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription data-testid="dialog-description-testid">
              This is a description.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter data-testid="dialog-footer-testid">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Button onClick={() => setIsDialogOpen(true)}>Toggle Dialog</Button>
<AlertDialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
  <AlertDialogContent data-testid='dialog-content-testid'>
    <AlertDialogHeader >
      <AlertDialogTitle data-testid="dialog-title-testid">Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription data-testid='dialog-description-testid'>
        This is a description.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter data-testid='dialog-footer-testid'>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        `,
      },
    },
  },
  render: () => <SampleComponent />,
};
