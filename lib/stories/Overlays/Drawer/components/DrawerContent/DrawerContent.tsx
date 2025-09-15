"use client";

import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classnames from "classnames";

import { Box } from "lib/stories/Layout/Box";
import { Flex } from "lib/stories/Layout/Flex";

import styles from "./DrawerContent.module.scss";

type Props = {
  anchor?: "left" | "right" | "bottom" | "top";
  open?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

export const DrawerContent: FC<Props> = ({
  anchor = "bottom",
  open,
  onClose,
  children,
}) => {
  const [animate, setAnimate] = useState(open);
  const animateTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  const animateClose = useCallback(() => {
    setAnimate(false);

    animateTimeoutRef.current = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [onClose]);

  const toggleScrollLock = useCallback(() => {
    if (!document?.body) {
      return;
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (animateTimeoutRef.current) {
        clearTimeout(animateTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      setAnimate(true);
    }
    toggleScrollLock();
  }, [open]);

  if (!open) {
    return <></>;
  }

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.backdrop} onClick={animateClose} />
      <Flex
        alignItems="center"
        flexDirection="column"
        className={classnames(
          styles.content,
          styles[`position_${anchor}`],
          animate && styles.open,
        )}
      >
        {["bottom", "top"].includes(anchor) && (
          <Flex
            alignItems="center"
            justifyContent="center"
            className={classnames(
              styles.draggable,
              styles[`position_${anchor}`],
            )}
          >
            <Box className={styles.draggable_line} />
          </Flex>
        )}
        <Flex
          alignItems="center"
          flexDirection="column"
          className={styles.content_inner}
        >
          {children}
        </Flex>
      </Flex>
    </Box>
  );
};
