import { DialogClose } from '@radix-ui/react-dialog';
import { useMediaQuery } from '@react-hookz/web';
import type { ReactNode } from 'react';

import type { TestableComponentProps } from '../../types';
import { Button } from '../Button/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../Dialog/Dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../Drawer/Drawer';

export interface DialogResponsiveProps extends TestableComponentProps {
  cancelText?: string;
  contentBody?: ReactNode;
  footer?: ReactNode;
  headerDescription?: ReactNode;
  headerTitle?: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  shouldDisplayCancelOnDesktop?: boolean;
  shouldDisplayCancelOnMobile?: boolean;
}

export function DialogResponsive({
  'data-testid': dataTestId,
  cancelText = 'Cancel',
  contentBody,
  footer,
  headerDescription,
  headerTitle,
  onOpenChange,
  open,
  shouldDisplayCancelOnDesktop = true,
  shouldDisplayCancelOnMobile = true,
}: DialogResponsiveProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent data-testid={dataTestId}>
          {Boolean(headerTitle || headerDescription) && (
            <DialogHeader data-testid="dialogResponsiveHeader">
              {Boolean(headerTitle) && (
                <DialogTitle data-testid="dialogResponsiveTitle">
                  {headerTitle}
                </DialogTitle>
              )}
              {Boolean(headerDescription) && (
                <DialogDescription data-testid="dialogResponsiveDescription">
                  {headerDescription}
                </DialogDescription>
              )}
            </DialogHeader>
          )}
          {contentBody}
          {Boolean(footer) && (
            <DialogFooter data-testid="dialogResponsiveFooter">
              {shouldDisplayCancelOnDesktop && (
                <DialogClose asChild>
                  <Button variant="secondary-outlined">{cancelText}</Button>
                </DialogClose>
              )}
              {footer}
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer onOpenChange={onOpenChange} open={open}>
      <DrawerContent data-testid={dataTestId}>
        {Boolean(headerTitle || headerDescription) && (
          <DrawerHeader data-testid="dialogResponsiveHeader">
            {Boolean(headerTitle) && (
              <DrawerTitle data-testid="dialogResponsiveTitle">
                {headerTitle}
              </DrawerTitle>
            )}
            {Boolean(headerDescription) && (
              <DrawerDescription data-testid="dialogResponsiveDescription">
                {headerDescription}
              </DrawerDescription>
            )}
          </DrawerHeader>
        )}
        {Boolean(contentBody) && <div className="px-4">{contentBody}</div>}
        {Boolean(footer) && (
          <DrawerFooter data-testid="dialogResponsiveFooter">
            {footer}
            {shouldDisplayCancelOnMobile && (
              <DrawerClose asChild>
                <Button variant="secondary-outlined">{cancelText}</Button>
              </DrawerClose>
            )}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
