import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/modules/core/libs/shadcn/utils';

const labelVariants = cva(
  'text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-letter-body',
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  secondaryText?: React.ReactNode;
}

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ children, className, secondaryText, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    ref={ref}
    {...props}
  >
    {children}
    {Boolean(secondaryText) && (
      <span className="ml-1.5 font-normal text-letter-caption">
        {secondaryText}
      </span>
    )}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
