"use client";

import {
  Children,
  cloneElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";

import styles from "./Drawer.module.scss";

import { Box } from "lib/stories/Layout/Box";

import { DrawerContent } from "lib/stories/Overlays/Drawer/components/DrawerContent";
import { DrawerTrigger } from "lib/stories/Overlays/Drawer/components/DrawerTrigger";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Drawer: FC<Props> = ({
  open = false,
  onOpenChange,
  children,
  ...props
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(open);

  const DrawerChildren = Children.toArray(children).filter((child) =>
    [DrawerContent, DrawerTrigger].includes((child as any).type),
  );

  const onClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (open !== drawerOpen) {
      setDrawerOpen(open);
    }
  }, [open]);

  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(drawerOpen);
    }
  }, [drawerOpen]);

  return (
    <Box className={styles.wrapper} {...props}>
      {DrawerChildren.length > 0
        ? Children.map(DrawerChildren, (child) => {
            if ((child as any)?.type === DrawerTrigger) {
              return cloneElement(child as any, {
                onClick: () => {
                  setDrawerOpen(true);
                },
              });
            }

            if ((child as any)?.type === DrawerContent) {
              return cloneElement(child as any, {
                open: drawerOpen,
                onClose,
              });
            }

            return child;
          })
        : undefined}
    </Box>
  );
};
