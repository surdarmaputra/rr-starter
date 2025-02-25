import { Toaster as Sonner } from 'sonner';

export type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: `
              bg-white dark:bg-accent
              text-letter-title border-divider shadow-lg
              px-4 py-2.5 text-sm border rounded-lg
              flex items-center gap-2.5 w-[240px]
            `,
          description: 'group-[.toast]:text-letter-body',
          actionButton:
            'group-[.toast]:bg-backdrop group-[.toast]:text-letter-inverted',
          cancelButton:
            'group-[.toast]:bg-accent group-[.toast]:text-letter-body',
          success: 'group-[.toast]:bg-warning',
          content: 'flex flex-col gap-2',
          closeButton: '!bg-white dark:!bg-accent border-divider',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
