import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Skeleton.module.css";

import { withClassPrefix } from "../../../helpers/classNames.tsx";
import { Box } from "../../Layout/Box";

export type Props = {
  width?: number | string;
  height?: number | string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Skeleton: FC<Props> = ({
  width,
  height,
  variant = "rectangular",
  children,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("sk"),
    styles.main,
    styles[variant],
    className,
  );
  return <Box {...props} className={classNameVal} style={{ width, height }} />;
};
