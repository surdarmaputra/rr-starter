import { type ExternalToast, toast as sonnerToast } from 'sonner';

import { Toast, type ToastProps } from './Toast';

function toastVariantRenderer(variant: ToastProps['variant']) {
  return (props: string | Omit<ToastProps, 'id'>, options?: ExternalToast) => {
    if (typeof props === 'string') {
      return sonnerToast.custom(
        (id) => <Toast id={id} title={props} variant={variant} />,
        options,
      );
    }
    return sonnerToast.custom(
      (id) => <Toast id={id} {...props} variant={variant} />,
      options,
    );
  };
}

export function toast(
  props: string | Omit<ToastProps, 'id'>,
  options?: ExternalToast,
) {
  return toastVariantRenderer('default')(props, options);
}

toast.success = toastVariantRenderer('success');
toast.warning = toastVariantRenderer('warning');
toast.danger = toastVariantRenderer('danger');
