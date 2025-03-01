import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/modules/core/libs/shadcn/utils';

import type { TestableComponentProps } from '../../types';

const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold
    ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none
    disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
    dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300
  `,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        'primary-outlined':
          'border border-primary text-primary hover:bg-primary-hover hover:text-white',
        'primary-ghost': 'text-primary hover:bg-primary-hover hover:text-white',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover',
        'secondary-outlined':
          'border border-secondary text-secondary hover:bg-secondary-hover hover:text-white',
        'secondary-ghost':
          'text-secondary hover:bg-secondary-hover hover:text-white',
        success: 'bg-success text-white hover:bg-success-hover',
        'success-outlined':
          'border border-success text-success hover:bg-success-hover hover:text-white',
        'success-ghost': 'text-success hover:bg-success-hover hover:text-white',
        warning: 'bg-warning text-white hover:bg-warning-hover',
        'warning-outlined':
          'border border-warning text-warning hover:bg-warning-hover hover:text-white',
        'warning-ghost': 'text-warning hover:bg-warning-hover hover:text-white',
        danger: 'bg-danger text-white hover:bg-danger-hover',
        'danger-outlined':
          'border border-danger text-danger hover:bg-danger-hover hover:text-white',
        'danger-ghost': 'text-danger hover:bg-danger-hover hover:text-white',
        link: 'text-textTitle underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    TestableComponentProps {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
