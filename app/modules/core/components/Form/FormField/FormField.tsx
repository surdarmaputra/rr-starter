import type { ReactNode } from 'react';

import type { TestableComponentProps } from '~/modules/core/types';

import { Label } from '../Label/Label';

export interface FormFieldProps extends TestableComponentProps {
  children?: ReactNode;
  className?: string;
  errors?: ReactNode[];
  hint?: ReactNode;
  isOptional?: boolean;
  label?: string;
  name: string;
}

export function FormField({
  children,
  className,
  'data-testid': dataTestId,
  errors,
  hint,
  isOptional,
  label,
  name,
}: FormFieldProps) {
  const labelSecondaryText = isOptional ? '(Optional)' : undefined;
  return (
    <div className={className} data-testid={dataTestId}>
      {Boolean(label) && (
        <Label
          className="mb-2 block font-bold text-letter-title"
          htmlFor={name}
          secondaryText={labelSecondaryText}
        >
          {label}
        </Label>
      )}
      {children}
      {Boolean(hint) && (
        <div className="mt-1 text-xs text-letter-disabled">{hint}</div>
      )}
      {Boolean(errors?.length) && (
        <div className="mt-1.5 text-xs text-danger">
          {errors?.map((error, index) => <div key={index}>{error}</div>)}
        </div>
      )}
    </div>
  );
}
