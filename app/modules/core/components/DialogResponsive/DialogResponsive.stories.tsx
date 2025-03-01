import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';
import {
  DialogResponsive,
  type DialogResponsiveProps,
} from './DialogResponsive';

type Story = StoryObj<typeof DialogResponsive>;

const meta: Meta = {
  component: DialogResponsive,
  title: 'Core/Components/DialogResponsive',
};

export default meta;

function SampleComponent(props: DialogResponsiveProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClickOpenDialog = () => setIsOpened(true);

  return (
    <>
      <Button onClick={handleClickOpenDialog}>Toggle Dialog</Button>
      <DialogResponsive
        {...props}
        contentBody="Content body"
        footer={<Button type="submit">Save changes</Button>}
        headerDescription="Dialog description"
        headerTitle="Dialog Title"
        onOpenChange={setIsOpened}
        open={isOpened}
      />
    </>
  );
}

export const Default: Story = {
  render: (args: DialogResponsiveProps) => <SampleComponent {...args} />,
};
