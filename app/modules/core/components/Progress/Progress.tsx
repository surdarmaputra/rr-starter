import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { mergeClassNames } from '~/modules/core/libs/utils/ui';

export type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
>;

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    className={mergeClassNames(
      'relative h-4 w-full overflow-hidden rounded-full bg-primary-disabled',
      className,
    )}
    ref={ref}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 animate-pulse rounded-full bg-primary transition-all duration-1000"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
