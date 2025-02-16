import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
} from './Drawer';

type Story = StoryObj<typeof Drawer>;

const meta: Meta = {
  component: Drawer,
  title: 'Core/Components/Drawer',
};

export default meta;

function SampleComponent(props: DrawerProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClickOpenDialog = () => setIsOpened(true);

  return (
    <>
      <Button onClick={handleClickOpenDialog}>Open Dialog</Button>
      <Drawer onOpenChange={setIsOpened} open={isOpened} {...props}>
        <DrawerContent data-testid="DrawerContent-testid">
          <DrawerHeader data-testid="DrawerHeader-testid">
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>Header description</DrawerDescription>
          </DrawerHeader>
          <div className="px-4" data-testid="DrawerContentBody-testid">
            Content body
          </div>
          <DrawerFooter data-testid="DrawerFooter-testid">
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="primary-outlined">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const Default: Story = {
  render: () => <SampleComponent />,
};
