import {
  CircleAlert,
  CircleCheck,
  Info,
  type LucideProps,
  TriangleAlert,
} from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export const VARIANT = {
  default: 'default',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
} as const;

export type VariantType = (typeof VARIANT)[keyof typeof VARIANT];

export const BACKGROUND_CLASSNAME: Record<VariantType, string> = {
  [VARIANT.default]: 'bg-white dark:bg-accent ring-divider',
  [VARIANT.success]:
    'bg-toast-success-background ring-toast-success-border shadow-success-disabled',
  [VARIANT.warning]:
    'bg-toast-warning-background ring-toast-warning-border shadow-warning-disabled',
  [VARIANT.danger]:
    'bg-toast-danger-background ring-toast-danger-border shadow-danger-disabled',
};

export const TITLE_CLASSNAME: Record<VariantType, string> = {
  [VARIANT.default]: 'text-letter-title',
  [VARIANT.success]: 'text-toast-success-title',
  [VARIANT.warning]: 'text-toast-warning-title',
  [VARIANT.danger]: 'text-toast-danger-title',
};

export const ICON_CLASSNAME: Record<VariantType, string> = {
  [VARIANT.default]: 'fill-backdrop text-letter-inverted',
  [VARIANT.success]: 'fill-toast-success-title',
  [VARIANT.warning]: 'fill-toast-warning-title',
  [VARIANT.danger]: 'fill-toast-danger-title',
};

export const ICON: Record<
  VariantType,
  ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
> = {
  [VARIANT.default]: Info,
  [VARIANT.success]: CircleCheck,
  [VARIANT.warning]: TriangleAlert,
  [VARIANT.danger]: CircleAlert,
};

export const DESCRIPTION_CLASSNAME: Record<VariantType, string> = {
  [VARIANT.default]: 'text-letter-caption',
  [VARIANT.success]: 'text-toast-success-title opacity-60',
  [VARIANT.warning]: 'text-toast-warning-title opacity-70',
  [VARIANT.danger]: 'text-toast-danger-title opacity-60',
};

export const CLOSE_BUTTON_CLASSNAME: Record<VariantType, string> = {
  [VARIANT.default]:
    'text-letter-disabled hover:bg-accent hover:text-letter-caption',
  [VARIANT.success]:
    'text-toast-success-title opacity-60 hover:bg-success-disabled hover:text-toast-success-title hover:opacity-100',
  [VARIANT.warning]:
    'text-toast-warning-title opacity-70 hover:bg-warning-disabled hover:text-toast-warning-title hover:opacity-100',
  [VARIANT.danger]:
    'text-toast-danger-title opacity-60 hover:bg-danger-disabled hover:text-toast-danger-title hover:opacity-100',
};
