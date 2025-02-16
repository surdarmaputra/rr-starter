import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './Dialog';

type Story = StoryObj<typeof Dialog>;

const meta: Meta = {
  component: Dialog,
  title: 'Core/Components/Dialog',
};

export default meta;

function SampleComponent() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClickOpenDialog = () => setIsOpened(true);

  return (
    <>
      <Button onClick={handleClickOpenDialog}>Open Dialog</Button>
      <Dialog onOpenChange={setIsOpened} open={isOpened}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>Header description</DialogDescription>
          </DialogHeader>
          <div>Content body</div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClickOpenDialog = () => setIsOpened(true);

  return (
    <>
      <Button onClick={handleClickOpenDialog}>
        Open Dialog
      </Button>
      <Dialog open={isOpened}><Dialog onOpenChange={setIsOpened} open={isOpened}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              Header description
            </DialogDescription>
          </DialogHeader>
          <div>
            Content body
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );     
        `,
      },
    },
  },
  render: () => <SampleComponent />,
};
