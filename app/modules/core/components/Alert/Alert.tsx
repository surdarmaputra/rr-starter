import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { mergeClassNames } from '~/modules/core/libs/utils/ui';

import type { TestableComponentProps } from '../../types';

const alertVariants = cva(
  'relative w-full rounded-xl p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-accent text-letter-title [&>svg]:text-letter-title',
        primary: 'bg-primary-disabled text-primary [&>svg]:text-primary',
        success: 'bg-success-disabled text-success [&>svg]:text-success',
        danger: 'bg-danger-disabled text-danger [&>svg]:text-danger',
        warning: 'bg-warning-disabled text-warning [&>svg]:text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants>,
    TestableComponentProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      className={mergeClassNames(alertVariants({ variant }), className)}
      ref={ref}
      role="alert"
      {...props}
    />
  ),
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    className={mergeClassNames(
      'mb-1.5 font-bold leading-none tracking-tight',
      className,
    )}
    ref={ref}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    className={mergeClassNames('text-sm [&_p]:leading-relaxed', className)}
    ref={ref}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
