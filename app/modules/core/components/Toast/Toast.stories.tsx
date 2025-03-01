import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { Toaster, type ToasterProps } from './Toast';
import { toast } from './utils';

type Story = StoryObj<typeof Toaster>;

const meta: Meta = {
  component: Toaster,
  title: 'Core/Components/Toast',
};

export default meta;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        
import { toast } from 'sonner';
        
// JSX
<div className="flex h-64 flex-col gap-2">
  <div className="flex gap-2">
    <Button onClick={() => toast("This is default toast")}>
      Default Toast
    </Button>
    <Button
      onClick={() =>
        toast({
          title: "Closable Toast",
          isClosable: false,
        })
      }
    >
      Not Closable Toast
    </Button>
    <Button
      onClick={() =>
        toast(
          {
            description: "This is a top right toast",
            isClosable: true,
            title: "Top Right",
          },
          {
            position: "top-right",
          }
        )
      }
    >
      Toggle Top Right
    </Button>
    <Button
      onClick={() =>
        toast({
          description: "This is a toast with action",
          title: "Toast with action",
          action: (
            <Button size="sm" variant="primary">
              Action
            </Button>
          ),
        })
      }
    >
      With Action
    </Button>
    <Button
      onClick={() =>
        toast({
          description: "This is a toast with action",
          title: "Toast with action",
          action: ({ dismiss }) => (
            <Button onClick={dismiss} size="sm" variant="primary">
              Dismiss
            </Button>
          ),
        })
      }
    >
      With Action Renderer
    </Button>
  </div>

  <div className="flex gap-2">
    <Button
      onClick={() => toast.success("Congrats! Action success.")}
      variant="success"
    >
      Success Toast
    </Button>
    <Button
      onClick={() =>
        toast.success({
          description: "Congrats! Action success.",
          title: "Success Toast",
        })
      }
      variant="success"
    >
      Success Description
    </Button>
    <Button
      onClick={() => toast.warning("Watch out! This action might by harmful")}
      variant="warning"
    >
      Warning Toast
    </Button>{" "}
    <Button
      onClick={() =>
        toast.warning({
          description: "Watch out! This action might by harmful",
          title: "Warning Toast",
        })
      }
      variant="warning"
    >
      Warning Description
    </Button>
    <Button
      onClick={() => toast.danger("Oops! Something wrong.")}
      variant="danger"
    >
      Danger Toast
    </Button>{" "}
    <Button
      onClick={() =>
        toast.danger({
          description: "Oops! Something wrong.",
          title: "Error Toast",
        })
      }
      variant="danger"
    >
      Danger Description
    </Button>
  </div>
  <Toaster />
</div>
        `,
      },
    },
  },
  render: (args: ToasterProps) => (
    <div className="flex h-64 flex-col gap-2">
      <div className="flex gap-2">
        <Button onClick={() => toast('This is default toast')}>
          Default Toast
        </Button>
        <Button
          onClick={() =>
            toast({
              title: 'Closable Toast',
              isClosable: false,
            })
          }
        >
          Not Closable Toast
        </Button>
        <Button
          onClick={() =>
            toast(
              {
                description: 'This is a top right toast',
                isClosable: true,
                title: 'Top Right',
              },
              {
                position: 'top-right',
              },
            )
          }
        >
          Toggle Top Right
        </Button>
        <Button
          onClick={() =>
            toast({
              description: 'This is a toast with action',
              title: 'Toast with action',
              action: (
                <Button size="sm" variant="primary">
                  Action
                </Button>
              ),
            })
          }
        >
          With Action
        </Button>
        <Button
          onClick={() =>
            toast({
              description: 'This is a toast with action',
              title: 'Toast with action',
              action: ({ dismiss }) => (
                <Button onClick={dismiss} size="sm" variant="primary">
                  Dismiss
                </Button>
              ),
            })
          }
        >
          With Action Renderer
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => toast.success('Congrats! Action success.')}
          variant="success"
        >
          Success Toast
        </Button>
        <Button
          onClick={() =>
            toast.success({
              description: 'Congrats! Action success.',
              title: 'Success Toast',
            })
          }
          variant="success"
        >
          Success Description
        </Button>
        <Button
          onClick={() =>
            toast.warning('Watch out! This action might by harmful')
          }
          variant="warning"
        >
          Warning Toast
        </Button>{' '}
        <Button
          onClick={() =>
            toast.warning({
              description: 'Watch out! This action might by harmful',
              title: 'Warning Toast',
            })
          }
          variant="warning"
        >
          Warning Description
        </Button>
        <Button
          onClick={() => toast.danger('Oops! Something wrong.')}
          variant="danger"
        >
          Danger Toast
        </Button>{' '}
        <Button
          onClick={() =>
            toast.danger({
              description: 'Oops! Something wrong.',
              title: 'Error Toast',
            })
          }
          variant="danger"
        >
          Danger Description
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
};
