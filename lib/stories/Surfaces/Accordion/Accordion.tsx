import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Accordion.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

type Props = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Accordion: FC<Props> = ({ children, className, ...props }) => {
  const classNameVal = classnames(
    withClassPrefix("box"),
    styles.main,
    className,
  );
  return <div className={classNameVal} {...props}></div>;
};
