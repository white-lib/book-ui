import { createElement, FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./Typography.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Props = { variant: Tags; component?: Tags; children: ReactNode };

export const Typography: FC<Props> = ({
  variant = "p",
  component,
  children,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("tp"),
    styles.main,
    styles[variant],
  );

  return createElement(
    component || variant,
    { ...props, className: classNameVal },
    children,
  );
};
