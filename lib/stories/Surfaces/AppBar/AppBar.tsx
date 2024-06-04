import { createElement, DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./AppBar.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Tags = "div" | "section";

type Props = { component?: Tags } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const AppBar: FC<Props> = ({
  component = "div",
  children,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("box"),
    styles.main,
    styles[component],
    className,
  );
  return createElement(
    component,
    { ...props, className: classNameVal },
    children,
  );
};
