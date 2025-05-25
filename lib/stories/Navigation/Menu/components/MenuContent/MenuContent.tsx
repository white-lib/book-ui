import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Flex } from "lib/stories/Layout/Flex";

import styles from "./MenuContent.module.scss";
import { useIsVisible } from "lib/hooks/useIsVisible.tsx";
import classnames from "classnames";

type Props = {
  children?: ReactNode;
  open?: boolean;
  onOutsideClick?: () => void;
  direction?: "top" | "bottom";
  stickTo?: "left" | "right";
  menuChildren?: ReactNode;
  className?: string;
};

export const MenuContent: FC<Props> = ({
  open,
  direction = "bottom",
  stickTo = "left",
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isIntersecting, outCorner } = useIsVisible(ref, open);

  const initialPosition = useRef<Props["direction"] | null>(direction);
  const [positon, setPosition] = useState(initialPosition.current);

  const initialStick = useRef<Props["stickTo"] | null>(stickTo);
  const [stick, setStick] = useState(initialStick.current);

  useEffect(() => {
    if (!open || !ref.current) {
      return;
    }

    // track(ref.current);
    // trackOutsideClick(ref.current);
  }, [open]);

  useEffect(() => {
    if (positon !== direction) {
      setPosition(direction);
    }
  }, [positon]);

  useEffect(() => {
    if (stickTo !== stick) {
      setStick(stickTo);
    }
  }, [stickTo]);

  useEffect(() => {
    if (!open || !outCorner || isIntersecting) {
      if (!outCorner && positon !== initialPosition.current) {
        setPosition(initialPosition.current);
      }
      return;
    }

    if (outCorner === "top") {
      setPosition("bottom");
    } else if (outCorner === "bottom") {
      setPosition("top");
    }
  }, [isIntersecting, open, outCorner]);

  if (!open) {
    return <></>;
  }

  return (
    <Flex
      flexDirection="column"
      className={classnames(
        styles.main,
        styles[`open_${positon}`],
        styles[`stick_${stick}`],
        className,
      )}
      ref={ref}
    >
      {children}
    </Flex>
  );
};
