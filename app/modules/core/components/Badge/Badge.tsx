import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/modules/core/libs/shadcn/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-divider px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-backdrop text-white',
        'default-outlined': 'border-letter-title text-letter-title',
        danger: 'border-transparent bg-danger text-white',
        'danger-outlined': 'border-danger text-danger',
        success: 'border-transparent bg-success text-white',
        'success-outlined': 'border-success text-success',
        warning: 'border-transparent bg-warning text-white',
        'warning-outlined': 'border-warning text-warning',
        primary: 'border-transparent bg-primary text-white',
        'primary-outlined': 'border-primary text-primary',
        secondary: 'border-transparent bg-secondary text-white',
        'secondary-outlined': 'border-secondary text-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
