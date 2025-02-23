import { Toaster as Sonner } from 'sonner';

export type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `group toast group-[.toaster]:bg-white group-[.toaster]:text-letter-title
            group-[.toaster]:border-divider group-[.toaster]:shadow-lg`,
          description: 'group-[.toast]:text-letter-body',
          actionButton:
            'group-[.toast]:bg-backdrop group-[.toast]:text-letter-inverted',
          cancelButton:
            'group-[.toast]:bg-accent group-[.toast]:text-letter-body',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
