import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import classnames from "classnames";

import styles from "./Text.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

import { ColorType } from "lib/system/color.types.ts";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Props = {
  variant?: Tag | "hint";
  color?: ColorType;
  component?: Tag;
  error?: boolean;
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> &
  DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const validTags: Array<Tag> = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

export const Text: FC<Props> = ({
  variant = "p",
  color,
  component,
  error,
  className,
  children,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("tp"),
    styles.main,
    styles[variant],
    color && styles[color],
    error && styles.error,
    className,
  );

  return createElement(
    component || (validTags.includes(variant as Tag) ? variant : "p"),
    { ...props, className: classNameVal },
    children,
  );
};
