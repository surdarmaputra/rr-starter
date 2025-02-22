import * as React from 'react';

import { cn } from '~/libs/shadcn/utils';

export type InputProps = React.ComponentProps<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-10 w-full rounded-lg border border-divider bg-white px-3 py-2 text-base ring-offset-white',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-letter-title',
          'placeholder:text-letter-caption focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'md:text-sm',
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
