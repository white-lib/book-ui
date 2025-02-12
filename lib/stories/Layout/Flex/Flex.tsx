import { createElement, FC } from "react";
import classnames from "classnames";

import styles from "./Flex.module.css";

import { createClassName, withClassPrefix } from "lib/helpers/classNames.tsx";

import { Props as BoxProps } from "lib/stories/Layout/Box";

import { JustifyContent, AlignItems } from "lib/helpers/classNames.tsx";

type Props = {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
} & BoxProps;

export const Flex: FC<Props> = ({
  component = "div",
  justifyContent,
  alignItems,
  children,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("flex"),
    createClassName({ justifyContent, alignItems }),
    styles.main,
    className,
  );

  return createElement(
    component,
    { ...props, className: classNameVal },
    children,
  );
};
