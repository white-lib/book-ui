import {
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
import { Card, CardContent } from "lib/stories/Surfaces/Card";
import { Button } from "lib/stories/Inputs/Button";
import { Close } from "lib/stories/Icons/assets";

type Props = {
  fullScreen?: boolean;
  open?: boolean;
  onClose?: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Dialog: FC<Props> = ({
  open,
  fullScreen = true,
  onClose,
  className,
  children,
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
    >
      <Card ref={contentRef}>
        <CardContent className={styles.card}>
          <Button
            variant="text"
            className={styles.close}
            disableSpacing
            onClick={() => onClose?.()}
          >
            <Close width="18px" height="18px" />
          </Button>
          {children}
        </CardContent>
      </Card>
    </Flex>
  );
};
