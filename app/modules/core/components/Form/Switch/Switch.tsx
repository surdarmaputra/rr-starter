import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { mergeClassNames } from '~/modules/core/libs/utils/ui';

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>;

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={mergeClassNames(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full',
      'border-2 border-transparent transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-disabled dark:data-[state=unchecked]:bg-accent',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={mergeClassNames(
        'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg dark:bg-black',
        'ring-0 transition-transform',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
