"use client";

import {
  CSSProperties,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
} from "react";
import classnames from "classnames";

import styles from "./Dialog.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";
import { Flex } from "lib/stories/Layout/Flex";
import { Button } from "lib/stories/Inputs/Button";
import { Close } from "lib/stories/Icons/assets";
import { Box } from "lib/stories/Layout/Box";
import { Text } from "lib/stories/DataDisplay/Text";

type Props = {
  fullScreen?: boolean;
  title?: string;
  open?: boolean;
  onClose?: () => void;
  containerStyle?: CSSProperties;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Dialog: FC<Props> = ({
  open,
  fullScreen = true,
  title,
  onClose,
  className,
  children,
  containerStyle,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !open) {
      return;
    }

    contentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [open]);

  if (!open) {
    return null;
  }

  const classNameVal = classnames(
    withClassPrefix("dialog"),
    styles.main,
    !fullScreen && styles.nonFullScreen,
    className,
  );

  return (
    <Flex
      role="presentation"
      className={classNameVal}
      alignItems="center"
      justifyContent="center"
      ref={contentRef}
      {...props}
    >
      <Flex className={styles.body} style={containerStyle}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className={styles.header}
        >
          {title ? <Text variant="h6">{title}</Text> : <Box />}
          <Button
            variant="text"
            className={styles.close}
            disableSpacing
            onClick={() => onClose?.()}
          >
            <Close width="32px" height="32px" />
          </Button>
        </Flex>
        <Flex flexDirection="column" className={styles.content}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
