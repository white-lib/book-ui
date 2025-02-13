import { createElement, DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./AppBar.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

type Tags = "div" | "section" | "header" | "footer";
type Position = "fixed" | "absolute" | "sticky" | "static" | "relative";

type Props = { component?: Tags; position?: Position } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const AppBar: FC<Props> = ({
  component = "div",
  position,
  children,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("box"),
    styles.main,
    styles[component],
    position && styles[position],
    className,
  );
  return createElement(
    component,
    { ...props, className: classNameVal },
    children,
  );
};
