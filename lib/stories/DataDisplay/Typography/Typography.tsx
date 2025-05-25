import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import classnames from "classnames";

import styles from "./Typography.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Props = {
  variant?: Tag | "hint";
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

export const Typography: FC<Props> = ({
  variant = "p",
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
    error && styles.error,
    className,
  );

  return createElement(
    component || (validTags.includes(variant as Tag) ? variant : "p"),
    { ...props, className: classNameVal },
    children,
  );
};
