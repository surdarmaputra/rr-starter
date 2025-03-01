import * as React from 'react';

import { mergeClassNames } from '~/modules/core/libs/utils/ui';

export type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={mergeClassNames(
          'flex min-h-[80px] w-full rounded-md border border-divider bg-white px-3 py-2 text-base ring-offset-white',
          'placeholder:text-letter-caption focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
