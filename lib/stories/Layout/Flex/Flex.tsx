import { createElement } from "react";
import classnames from "classnames";

import styles from "./Flex.module.css";

import { FlexDirection, withClassPrefix } from "lib/helpers/classNames.tsx";

import { Props as BoxProps } from "lib/stories/Layout/Box";

import { JustifyContent, AlignItems } from "lib/helpers/classNames.tsx";
import { Size } from "lib/system/measurement.types.ts";

type Props = {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: Size;
} & BoxProps;

export const Flex = ({
  component = "div",
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  className,
  ...props
}: Props) => {
  const classNameVal = classnames(
    withClassPrefix("flex"),
    flexDirection && styles["flex-direction-" + flexDirection],
    justifyContent && styles["justify-content-" + justifyContent],
    alignItems && styles["align-items-" + alignItems],
    gap && styles["gap-" + gap],
    styles.main,
    className,
  );

  return createElement(
    component,
    { ...props, className: classNameVal },
    children,
  );
};
