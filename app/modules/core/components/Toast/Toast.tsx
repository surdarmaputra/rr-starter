import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { toast, Toaster } from 'sonner';

import { cn } from '~/libs/shadcn/utils';

import {
  BACKGROUND_CLASSNAME,
  CLOSE_BUTTON_CLASSNAME,
  DESCRIPTION_CLASSNAME,
  ICON,
  ICON_CLASSNAME,
  TITLE_CLASSNAME,
  VARIANT,
  type VariantType,
} from './constants';

interface ToastActionRendererParams {
  id?: string | number;
  dismiss?: () => void;
}

export type ToasterProps = React.ComponentProps<typeof Toaster>;

export interface ToastProps {
  id: string | number;
  title: ReactNode;
  description?: ReactNode;
  isClosable?: boolean;
  action?: ReactNode | ((params: ToastActionRendererParams) => ReactNode);
  variant?: VariantType;
}
function Toast({
  id,
  title,
  description,
  isClosable = true,
  action,
  variant = VARIANT.default,
}: ToastProps) {
  const IconComponent = ICON[variant];

  return (
    <div
      className={cn(
        'relative flex w-full items-center gap-2 rounded-lg p-4 shadow-lg ring-1 md:w-80',
        BACKGROUND_CLASSNAME[variant],
      )}
      role="alert"
    >
      <div className="h-6 w-6 shrink-0 self-start">
        <IconComponent
          className={cn('h-6 w-6 text-white', ICON_CLASSNAME[variant])}
        />
      </div>

      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p
            className={cn(
              'pr-6 text-sm font-medium text-letter-body',
              TITLE_CLASSNAME[variant],
            )}
          >
            {title}
          </p>
          {Boolean(description) && (
            <p
              className={cn(
                'mt-1 pr-6 text-sm text-letter-caption',
                DESCRIPTION_CLASSNAME[variant],
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {isClosable && !action && (
        <button
          className={cn(
            'absolute right-4 top-4 rounded-full bg-transparent p-1 text-letter-disabled hover:bg-accent hover:text-letter-caption',
            CLOSE_BUTTON_CLASSNAME[variant],
          )}
          onClick={() => toast.dismiss(id)}
        >
          <span className="sr-only">Close</span>
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      )}

      {typeof action === 'function'
        ? action({ id, dismiss: () => toast.dismiss(id) })
        : action}
    </div>
  );
}

export { Toast, Toaster };
