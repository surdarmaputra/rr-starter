import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/libs/shadcn/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-secondary text-white hover:bg-secondaryHover dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80',
        destructive:
          'border-transparent bg-danger text-white hover:bg-dangerHover dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80',
        outline: 'text-body dark:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
