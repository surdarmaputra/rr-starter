import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';

import { Button } from '../Button/Button';
import { Toaster, type ToasterProps } from './Sonner';

type Story = StoryObj<typeof Toaster>;

const meta: Meta = {
  component: Toaster,
  title: 'Core/Components/Sonner',
};

export default meta;

export const Default: Story = {
  args: {
    richColors: true,
  },
  parameters: {
    docs: {
      source: {
        code: `

import { toast } from 'sonner';

// JSX
<>
  <Button onClick={() => toast('Default Toast')}>
    Toggle Toast
  </Button>
  <Button onClick={() => toast('Default Toast', {
    closeButton: true,
  })}>
    Closable Toast
  </Button>
  <Button onClick={() => toast('Top Right', {
    position: 'top-right',
  })}>
    Toggle Top Right
  </Button>
  <Button onClick={() => toast.success('Congrats! Action success.')} variant="success">
    Success Toast
  </Button>
  <Button onClick={() => toast.error('Oops! Something wrong.')} variant="danger">
    Error Toast
  </Button>
  <Button onClick={() => toast.warning('Watch out! This action might by harmful')} variant="warning">
    Warning Toast
  </Button>
  <Button onClick={() => toast.info('This is just an info')}>
    Info Toast
  </Button>
  <Toaster richColors />
</>
        `,
      },
    },
  },
  render: (args: ToasterProps) => (
    <div className="flex h-64 gap-2">
      <Button onClick={() => toast('Default Toast')}>Toggle Toast</Button>
      <Button
        onClick={() =>
          toast('Default Toast', {
            closeButton: true,
          })
        }
      >
        Closable Toast
      </Button>
      <Button
        onClick={() =>
          toast('Top Right', {
            position: 'top-right',
          })
        }
      >
        Toggle Top Right
      </Button>
      <Button
        onClick={() => toast.success('Congrats! Action success.')}
        variant="success"
      >
        Success Toast
      </Button>
      <Button
        onClick={() => toast.error('Oops! Something wrong.')}
        variant="danger"
      >
        Error Toast
      </Button>
      <Button
        onClick={() => toast.warning('Watch out! This action might by harmful')}
        variant="warning"
      >
        Warning Toast
      </Button>
      <Button onClick={() => toast.info('This is just an info')}>
        Info Toast
      </Button>
      <Toaster {...args} />
    </div>
  ),
};
